import {
  applyEvent as originalEvent,
  currentTerms,
  initialTerms,
  newContract,
  originalDocument,
  people,
  opposite,
} from "./contract";
import { calendarDay, ledger, makeSchedule, validDate } from "./schedule";
export { currentTerms, initialTerms, originalDocument, people, opposite };
export const accounts = {
  lender: "모의은행 110-***-482910",
  borrower: "모의은행 220-***-118204",
};
export const addDays = (day, n) => {
  const d = new Date(day + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
};
export const balance = (c) =>
  ledger(currentTerms(c), c.payments).reduce((n, r) => n + r.remaining, 0);
export const statusOf = (c, today = calendarDay()) =>
  c.phase === "repaying" &&
  ledger(currentTerms(c), c.payments).some((r) => r.remaining && r.due < today)
    ? "연체"
    : c.change
      ? "변경 협의"
      : {
          empty: "새 약속",
          pairing: "연결 대기",
          negotiation: "조건 협상",
          signing: "서명 중",
          signed: "송금 대기",
          repaying: "상환 중",
          closed: "완납",
          cancelled: "종료",
        }[c.phase];
const clone = (x) => JSON.parse(JSON.stringify(x));
export function emptyContract() {
  return {
    ...newContract(),
    version: 0,
    termsVersion: 0,
    deposits: [],
    changeHistory: [],
    reminders: { days: [3, 1, 0], evening: false, balance: true, payday: "25" },
  };
}
export function updateContract(c, role, e) {
  const fail = (message) => {
    throw new Error(message);
  };
  if (!["lender", "borrower"].includes(role))
    fail("약속 당사자만 진행할 수 있어요.");
  if (e.baseVersion !== undefined && e.baseVersion !== c.version)
    fail("약속이 바뀌었어요. 최신 내용을 다시 확인해 주세요.");
  const record = (next, text) => ({
    ...c,
    ...next,
    version: c.version + 1,
    events: [...c.events, { role, text, type: e.type, at: e.at }],
  });
  if (
    ["pay", "recordDeposit"].includes(e.type) &&
    e.requestId &&
    c.payments.some((p) => p.requestId === e.requestId)
  )
    return c;
  if (e.type === "start") {
    const values = ["offer", "renegotiate"].includes(e.type)
      ? { ...e, terms: { ...e.terms, accounts: c.accounts } }
      : e;
    const next = originalEvent(c, role, values);
    return {
      ...emptyContract(),
      ...next,
      version: 1,
      termsVersion: 0,
      deposits: [],
      changeHistory: [],
      createdAt: e.at,
      expiresAt: new Date(
        Date.parse(e.at) + (e.channel === "remote" ? 86400000 : 180000),
      ).toISOString(),
    };
  }
  if (e.type === "renew" && c.phase === "pairing")
    return record(
      {
        peers: {},
        expiresAt: new Date(
          Date.parse(e.at) + (c.channel === "remote" ? 86400000 : 180000),
        ).toISOString(),
      },
      "새 연결 번호 발급",
    );
  if (
    e.type === "invite" &&
    c.phase === "pairing" &&
    c.channel === "remote" &&
    role === "lender"
  )
    return record({ invited: true }, "원격 초대 발송 (시연)");
  if (
    e.type === "connect" &&
    c.phase === "pairing" &&
    Date.parse(e.at) > Date.parse(c.expiresAt)
  )
    fail("연결 시간이 지났어요. 새 QR 또는 초대를 만들어 주세요.");
  if (
    e.type === "sign" &&
    e.termsVersion !== undefined &&
    e.termsVersion !== c.termsVersion
  )
    fail("서명할 문서가 바뀌었어요. 원문을 다시 확인해 주세요.");
  if (e.type === "fund" && role === "lender" && c.phase === "signed")
    return record(
      { phase: "repaying", fundedAt: e.at, fundingRequestId: e.requestId },
      "대여 모의 송금",
    );
  if (e.type === "cancel" && c.phase === "signed")
    fail("체결한 원본은 연결 이탈로 취소할 수 없어요.");
  if (e.type === "reminderSettings" && role === "borrower")
    return record({ reminders: clone(e.settings) }, "내 상환 알림 설정 저장");
  if (
    e.type === "evidence" &&
    role === "lender" &&
    ["repaying", "closed"].includes(c.phase)
  )
    return record(
      { evidence: { ...e.answers, updatedAt: e.at } },
      "증거 묶음 답변 저장 (시연)",
    );
  if (
    e.type === "amend" &&
    c.phase === "repaying" &&
    (!c.change || (c.change.stage === "review" && c.change.from !== role))
  ) {
    const terms = clone(e.terms),
      old = ledger(currentTerms(c), c.payments),
      rows = terms.schedule;
    if (!Array.isArray(rows) || !rows.length || rows.length > 36)
      fail("변경할 상환표를 확인해 주세요.");
    const ids = new Set();
    rows.forEach((row, i) => {
      if (
        !row.id ||
        ids.has(row.id) ||
        !validDate(row.due) ||
        !Number.isSafeInteger(row.amount) ||
        row.amount <= 0
      )
        fail("회차별 날짜와 금액을 확인해 주세요.");
      ids.add(row.id);
      const before = old.find((r) => r.id === row.id);
      if (
        before?.remaining === 0 &&
        (before.amount !== row.amount || before.due !== row.due)
      )
        fail("이미 갚은 회차는 바꿀 수 없어요.");
      if (row.amount < (before?.paid ?? 0))
        fail("이미 갚은 금액보다 작게 바꿀 수 없어요.");
      if (
        (!before || before.remaining) &&
        row.due <= calendarDay(new Date(e.at))
      )
        fail("변경 날짜는 내일 이후로 정해 주세요.");
      if (i && row.due <= rows[i - 1].due)
        fail("회차 날짜는 앞 회차보다 뒤여야 해요.");
    });
    if (old.some((r) => !ids.has(r.id))) fail("기존 회차는 삭제할 수 없어요.");
    const total = rows.reduce((n, r) => n + r.amount, 0),
      before = old.reduce((n, r) => n + r.amount, 0);
    if (total > before) fail("변경 합계가 기존 약정 금액을 넘었어요.");
    if (total < before && !e.allowReduction)
      fail("원금 감액에 동의한 뒤 제안해 주세요.");
    if (
      JSON.stringify(rows.map((r) => [r.id, r.due, r.amount])) ===
      JSON.stringify(old.map((r) => [r.id, r.due, r.amount]))
    )
      fail("바꿀 날짜나 금액을 입력해 주세요.");
    terms.amount = total;
    terms.count = rows.length;
    terms.due = rows[0].due;
    const change = {
      terms,
      from: role,
      stage: "review",
      signed: {},
      marks: {},
      reason: e.reason,
      expiresAt: new Date(Date.parse(e.at) + 48 * 3600000).toISOString(),
    };
    return record(
      {
        termsVersion: c.termsVersion + 1,
        change,
        changeHistory: [
          ...c.changeHistory,
          { from: role, terms: clone(terms), reason: e.reason, at: e.at },
        ],
      },
      c.change ? "변경안 역제안" : "약속 변경 제안",
    );
  }
  if (
    c.phase === "repaying" &&
    c.change?.stage === "review" &&
    c.change.from !== role
  ) {
    if (e.type === "decline")
      return record(
        {
          change: null,
          lastDecline: {
            from: role,
            reason: e.reason || "기존 약속을 유지하고 싶어요.",
            at: e.at,
          },
        },
        "변경안 거절 · 기존 약속 유지",
      );
    if (
      e.type === "accept" &&
      Date.parse(e.at) > Date.parse(c.change.expiresAt)
    )
      fail("응답 시간이 지났어요. 새 변경안을 요청해 주세요.");
  }
  if (
    e.type === "report" &&
    c.phase === "repaying" &&
    role === "borrower" &&
    !c.outside &&
    !c.change
  ) {
    if (
      !Number.isSafeInteger(e.amount) ||
      e.amount <= 0 ||
      e.amount > balance(c) ||
      !validDate(e.sentDate) ||
      e.sentDate > calendarDay(new Date(e.at))
    )
      fail("보낸 금액과 날짜를 확인해 주세요.");
    return record(
      {
        outside: {
          amount: e.amount,
          sentDate: e.sentDate,
          sender: e.sender || people.borrower,
          method: e.method || "다른 은행 앱",
          installmentId: e.installmentId,
          at: e.at,
        },
      },
      "따로 보낸 돈 알림 · 확인 대기",
    );
  }
  if (
    e.type === "rejectReport" &&
    c.phase === "repaying" &&
    role === "lender" &&
    c.outside
  )
    return record({ outside: null }, "알려 온 입금을 찾지 못함");
  if (
    e.type === "simulateDeposit" &&
    c.phase === "repaying" &&
    role === "lender"
  ) {
    if (
      !Number.isSafeInteger(e.amount) ||
      e.amount <= 0 ||
      !e.sender?.trim() ||
      !validDate(e.date) ||
      e.date > calendarDay(new Date(e.at))
    )
      fail("시연 입금 이름·금액·날짜를 확인해 주세요.");
    if (c.deposits.some((d) => d.id === "mock-" + e.requestId)) return c;
    return record(
      {
        deposits: [
          ...c.deposits,
          {
            id: "mock-" + e.requestId,
            sender: e.sender.trim(),
            amount: e.amount,
            at: e.date + "T14:02:00",
            used: false,
          },
        ],
      },
      "시연 입금 내역 추가",
    );
  }
  if (
    e.type === "reverseDeposit" &&
    ["repaying", "closed"].includes(c.phase) &&
    role === "lender" &&
    !c.change
  ) {
    const p = c.payments.find(
      (p) => p.requestId === e.paymentId && p.depositIds && !p.reversedAt,
    );
    if (!p) fail("되돌릴 외부 입금 기록이 없어요.");
    return record(
      {
        phase: "repaying",
        payments: c.payments.map((item) =>
          item === p ? { ...p, reversedAt: e.at } : item,
        ),
        deposits: c.deposits.map((d) =>
          p.depositIds.includes(d.id) ? { ...d, used: false } : d,
        ),
      },
      "외부 입금 반영 되돌림",
    );
  }
  if (
    ((e.type === "pay" && role === "borrower") ||
      (e.type === "recordDeposit" && role === "lender")) &&
    c.phase === "repaying"
  ) {
    if (c.change) fail("변경 협의가 끝난 뒤 상환해 주세요.");
    let amount = e.amount,
      depositIds;
    if (e.type === "recordDeposit") {
      depositIds = e.depositIds ?? [];
      const selected = c.deposits.filter((d) => depositIds.includes(d.id));
      if (
        !selected.length ||
        selected.length !== new Set(depositIds).size ||
        selected.some((d) => d.used)
      )
        fail("아직 반영하지 않은 입금 내역을 골라 주세요.");
      amount = selected.reduce((n, d) => n + d.amount, 0);
    }
    const rows = ledger(currentTerms(c), c.payments),
      index = rows.findIndex((r) => r.id === e.installmentId),
      available =
        index < 0 ? 0 : rows.slice(index).reduce((n, r) => n + r.remaining, 0);
    if (
      !e.requestId ||
      !Number.isSafeInteger(amount) ||
      amount <= 0 ||
      amount > available
    )
      fail("선택한 회차부터 남은 금액 이내로 입력해 주세요.");
    const payment = {
      amount,
      at: e.at,
      requestId: e.requestId,
      installmentId: e.installmentId,
      method: e.type === "pay" ? "앱 모의 상환" : "외부 입금 확인",
      ...(depositIds ? { depositIds } : {}),
    };
    const matchingReport =
      c.outside &&
      depositIds &&
      c.deposits.some(
        (d) =>
          depositIds.includes(d.id) &&
          d.sender === c.outside.sender &&
          d.amount === c.outside.amount,
      );
    return record(
      {
        payments: [...c.payments, payment],
        outside: matchingReport || amount === balance(c) ? null : c.outside,
        deposits: c.deposits.map((d) =>
          depositIds?.includes(d.id) ? { ...d, used: true } : d,
        ),
        phase: amount === balance(c) ? "closed" : "repaying",
      },
      payment.method,
    );
  }
  // Legacy events retain the original signature/version checks, wrapped in a revision.
  if (
    [
      "report",
      "confirm",
      "amend",
      "pay",
      "recordDeposit",
      "reverseDeposit",
      "invite",
      "renew",
    ].includes(e.type)
  )
    fail("현재 계정의 차례와 약속 상태를 확인해 주세요.");
  const values = ["offer", "renegotiate"].includes(e.type)
    ? { ...e, terms: { ...e.terms, accounts: c.accounts } }
    : e;
  const next = originalEvent(c, role, values);
  return next === c
    ? c
    : {
        ...next,
        version: c.version + 1,
        termsVersion:
          c.termsVersion + (["offer", "renegotiate"].includes(e.type) ? 1 : 0),
      };
}
export function demoContract(kind = "repay") {
  const c = emptyContract(),
    today = calendarDay(),
    due = kind === "overdue" ? addDays(today, -8) : addDays(today, 14),
    stamp = new Date(Date.now() - 60 * 86400000).toISOString();
  const terms = {
    ...initialTerms,
    count: 3,
    due: addDays(today, -30),
    schedule: [
      { id: "1", number: 1, due: addDays(today, -30), amount: 100000 },
      { id: "2", number: 2, due, amount: 100000 },
      { id: "3", number: 3, due: addDays(due, 31), amount: 100000 },
    ],
  };
  return {
    ...c,
    demo: true,
    identifier: "BB-DEMO-" + kind.toUpperCase(),
    phase: kind === "closed" ? "closed" : "repaying",
    channel: "face",
    peers: { lender: true, borrower: true },
    signed: { lender: stamp, borrower: stamp },
    fundedAt: stamp,
    version: 1,
    termsVersion: 1,
    proposals: [{ role: "lender", terms: clone(terms), at: stamp }],
    versions: [
      {
        number: 1,
        terms: clone(terms),
        document: originalDocument(terms),
        signed: { lender: stamp, borrower: stamp },
        marks: {},
        at: stamp,
      },
    ],
    payments: [
      {
        amount: kind === "closed" ? 300000 : 100000,
        requestId: "demo-first",
        at: new Date(Date.now() - 30 * 86400000).toISOString(),
        method: "앱 모의 상환",
        installmentId: "1",
      },
    ],
    deposits: [
      {
        id: "demo-harin",
        sender: "이하린",
        amount: 80000,
        at: today + "T14:02:00",
        used: false,
      },
      {
        id: "demo-other",
        sender: "김민수",
        amount: 50000,
        at: today + "T11:30:00",
        used: false,
      },
      {
        id: "demo-refund",
        sender: "쇼핑 환불",
        amount: 12800,
        at: addDays(today, -1) + "T11:04:00",
        used: false,
      },
    ],
    events: [
      { role: "lender", text: "대여 모의 송금", at: stamp, type: "fund" },
      {
        role: "borrower",
        text: kind === "closed" ? "전체 회차 완납" : "1회차 상환 완료",
        at: new Date(Date.now() - 30 * 86400000).toISOString(),
        type: "pay",
      },
    ],
  };
}
