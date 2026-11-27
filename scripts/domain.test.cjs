const fs = require("node:fs"),
  path = require("node:path"),
  assert = require("node:assert/strict"),
  { test } = require("node:test");
const babel = require("@babel/core");
const original = require.extensions[".js"];
require.extensions[".js"] = (module, filename) =>
  filename.includes(path.join("src", "domain"))
    ? module._compile(
        babel.transformSync(fs.readFileSync(filename, "utf8"), {
          babelrc: false,
          configFile: false,
          plugins: ["@babel/plugin-transform-modules-commonjs"],
        }).code,
        filename,
      )
    : original(module, filename);
const {
  updateContract,
  emptyContract,
  demoContract,
  balance,
  currentTerms,
  addDays,
} = require("../src/domain/workflow.js");
const {
  calendarDay,
  ledger,
  monthlyDate,
  makeSchedule,
} = require("../src/domain/schedule.js");
const now = () => new Date().toISOString(),
  send = (c, role, type, values = {}) =>
    updateContract(c, role, { type, at: now(), ...values });
function signing() {
  let c = send(emptyContract(), "lender", "start", {
    id: "test",
    channel: "face",
  });
  c = send(c, "borrower", "connect");
  c = send(c, "lender", "connect");
  c = send(c, "lender", "offer", {
    terms: {
      amount: 300000,
      count: 3,
      due: addDays(calendarDay(), 30),
      memo: "생활비",
    },
  });
  return send(c, "borrower", "agree");
}
const mark = { strokes: ["M 2 2 L 20 20"], markBox: [320, 140] };
test("both participants must confirm and only the current turn may propose", () => {
  let c = send(emptyContract(), "lender", "start", {
    id: "test",
    channel: "face",
  });
  c = send(c, "lender", "connect");
  assert.equal(c.phase, "pairing");
  assert.throws(() => send(c, "lender", "offer", { terms: {} }));
  c = send(c, "borrower", "connect");
  assert.equal(c.phase, "negotiation");
  assert.throws(() => send(c, "borrower", "offer", { terms: {} }));
});
test("month-end dates remain month-end and principal rounding balances", () => {
  assert.equal(monthlyDate("2027-01-31", 1), "2027-02-28");
  assert.equal(monthlyDate("2027-02-28", 1), "2027-03-31");
  const rows = makeSchedule(100001, "2027-01-31", 3);
  assert.equal(
    rows.reduce((n, r) => n + r.amount, 0),
    100001,
  );
  assert.equal(rows[2].amount, 33335);
});
test("expired QR and uninvited remote requests cannot connect", () => {
  let c = send(emptyContract(), "lender", "start", {
    id: "test",
    channel: "face",
  });
  assert.throws(
    () =>
      send({ ...c, expiresAt: "2000-01-01T00:00:00Z" }, "borrower", "connect"),
    /시간/,
  );
  c = send(emptyContract(), "lender", "start", {
    id: "test",
    channel: "remote",
  });
  assert.throws(() => send(c, "borrower", "connect"));
  c = send(c, "lender", "invite");
  assert.equal(send(c, "borrower", "connect").peers.borrower, true);
});
test("both signatures required; stale document signatures rejected", () => {
  let c = signing();
  assert.throws(() => send(c, "lender", "fund"));
  assert.throws(() => send(c, "lender", "sign", { ...mark, termsVersion: 99 }));
  c = send(c, "lender", "sign", { ...mark, termsVersion: c.termsVersion });
  assert.equal(c.phase, "signing");
  c = send(c, "borrower", "sign", mark);
  assert.equal(c.phase, "signed");
  assert.equal(c.versions.length, 1);
  assert.equal(send(c, "lender", "fund").phase, "repaying");
  assert.throws(() => send(c, "borrower", "fund"));
});
test("renegotiation invalidates previous draft signatures", () => {
  let c = signing();
  c = send(c, "lender", "sign", mark);
  c = send(c, "borrower", "renegotiate", {
    terms: {
      amount: 300000,
      count: 3,
      due: addDays(calendarDay(), 31),
      memo: "수정",
    },
  });
  assert.equal(c.phase, "negotiation");
  assert.deepEqual(c.signed, {});
  assert.equal(c.versions.length, 0);
});
test("reporting external payment never reduces balance and does not freeze app repayment", () => {
  let c = demoContract();
  c = send(c, "borrower", "report", {
    amount: 80000,
    sentDate: calendarDay(),
    installmentId: "2",
  });
  assert.equal(balance(c), 200000);
  c = send(c, "borrower", "pay", {
    amount: 10000,
    installmentId: "2",
    requestId: "part",
  });
  assert.equal(balance(c), 190000);
});
test("selected deposits affect the ledger once; used deposits rejected", () => {
  let c = demoContract();
  const e = {
    depositIds: ["demo-harin"],
    installmentId: "2",
    requestId: "deposit",
  };
  c = send(c, "lender", "recordDeposit", e);
  assert.equal(balance(c), 120000);
  assert.equal(ledger(currentTerms(c), c.payments)[1].remaining, 20000);
  assert.equal(send(c, "lender", "recordDeposit", e), c);
  assert.throws(() =>
    send(c, "lender", "recordDeposit", { ...e, requestId: "other" }),
  );
});
test("targeted repayments and overflow allocate only to selected and later installments", () => {
  let c = demoContract();
  c = send(c, "borrower", "pay", {
    amount: 50000,
    installmentId: "3",
    requestId: "late-row",
  });
  assert.equal(ledger(currentTerms(c), c.payments)[1].paid, 0);
  assert.equal(ledger(currentTerms(c), c.payments)[2].paid, 50000);
});
test("full repayment closes once and duplicate retry remains idempotent after close", () => {
  let c = demoContract();
  const e = { amount: 200000, installmentId: "2", requestId: "full" };
  c = send(c, "borrower", "pay", e);
  assert.equal(c.phase, "closed");
  assert.equal(balance(c), 0);
  assert.equal(send(c, "borrower", "pay", e), c);
});
test("external deposit reversal retains receipt and reopens a paid contract", () => {
  let c = demoContract();
  c = {
    ...c,
    deposits: [
      { id: "all", sender: "이하린", amount: 200000, at: now(), used: false },
    ],
  };
  c = send(c, "lender", "recordDeposit", {
    depositIds: ["all"],
    installmentId: "2",
    requestId: "all",
  });
  assert.equal(c.phase, "closed");
  c = send(c, "lender", "reverseDeposit", { paymentId: "all" });
  assert.equal(c.phase, "repaying");
  assert.equal(balance(c), 200000);
  assert.ok(c.payments.at(-1).reversedAt);
  assert.equal(c.deposits[0].used, false);
});
function changed(c) {
  const terms = structuredClone(currentTerms(c));
  terms.schedule[1].amount = 72000;
  terms.schedule.splice(2, 0, {
    id: "2-split",
    number: "2-2",
    due: addDays(terms.schedule[1].due, 7),
    amount: 28000,
  });
  return terms;
}
test("split amendment applies only after both signatures and preserves original document", () => {
  let c = demoContract();
  const original = structuredClone(c.versions[0]);
  c = send(c, "borrower", "amend", { terms: changed(c), reason: "회차 분할" });
  assert.equal(currentTerms(c).schedule.length, 3);
  c = send(c, "lender", "accept");
  c = send(c, "borrower", "sign", mark);
  assert.equal(c.versions.length, 1);
  c = send(c, "lender", "sign", mark);
  assert.equal(c.versions.length, 2);
  assert.equal(currentTerms(c).schedule.length, 4);
  assert.deepEqual(c.versions[0], original);
  assert.equal(balance(c), 200000);
  assert.equal(ledger(currentTerms(c), c.payments)[0].remaining, 0);
});
test("amendments cannot change settled installments or silently reduce principal", () => {
  const c = demoContract(),
    terms = changed(c);
  terms.schedule[0].amount = 90000;
  assert.throws(() => send(c, "borrower", "amend", { terms }), /갚은/);
  const reduced = changed(c);
  reduced.schedule[1].amount = 50000;
  assert.throws(() => send(c, "borrower", "amend", { terms: reduced }), /감액/);
});
test("counter amendment turns alternate and decline preserves current terms with reason", () => {
  let c = demoContract();
  const before = structuredClone(currentTerms(c));
  c = send(c, "borrower", "amend", { terms: changed(c) });
  assert.throws(() => send(c, "borrower", "amend", { terms: changed(c) }));
  c = send(c, "lender", "decline", { reason: "날짜가 멀어요" });
  assert.deepEqual(currentTerms(c), before);
  assert.equal(c.lastDecline.reason, "날짜가 멀어요");
});
test("reminders are limited to overdue contracts once per day", () => {
  assert.throws(() => send(demoContract(), "lender", "reminder"));
  let c = send(demoContract("overdue"), "lender", "reminder");
  assert.throws(() => send(c, "lender", "reminder"));
  assert.throws(() => send(c, "borrower", "reminder"));
});
test("revision conflicts and outsider roles rejected", () => {
  const c = demoContract();
  assert.throws(
    () => send(c, "lender", "reminder", { baseVersion: 99 }),
    /바뀌/,
  );
  assert.throws(() => send(c, "outsider", "pay", { amount: 1 }));
});
