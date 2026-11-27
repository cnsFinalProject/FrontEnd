import {
  calendarDay,
  ledger,
  makeSchedule,
  reschedule,
  validDate,
} from "./schedule";

export const people = { lender: "박도윤", borrower: "이하린" };
export const roleTitle = { lender: "빌려주는 사람", borrower: "빌리는 사람" };
export const opposite = (role) => (role === "lender" ? "borrower" : "lender");
export const initialTerms = {
  amount: 300000,
  due:
    calendarDay() < "2027-01-31"
      ? "2027-01-31"
      : calendarDay(new Date(Date.now() + 30 * 86400000)),
  count: 3,
  memo: "무이자",
};
export function newContract() {
  return {
    phase: "empty",
    peers: {},
    marks: {},
    channel: null,
    identifier: "",
    proposals: [],
    versions: [],
    signed: {},
    payments: [],
    change: null,
    outside: null,
    events: [],
    turn: "lender",
  };
}
export const currentTerms = (c) =>
  c.versions.at(-1)?.terms ?? c.proposals.at(-1)?.terms ?? initialTerms;
export const balance = (c) =>
  ledger(currentTerms(c), c.payments).reduce(
    (sum, row) => sum + row.remaining,
    0,
  );
export function validateTerms(t) {
  const count = t.count ?? 1;
  return (
    Number.isSafeInteger(t.amount) &&
    t.amount > 0 &&
    t.amount <= 999999999 &&
    Number.isInteger(count) &&
    count >= 1 &&
    count <= 36 &&
    t.amount >= count &&
    validDate(t.due) &&
    t.due > calendarDay()
  );
}
export function fundingUnlock(c) {
  if (
    currentTerms(c).amount < 3000000 ||
    !c.signed.lender ||
    !c.signed.borrower
  )
    return 0;
  return (
    Math.max(Date.parse(c.signed.lender), Date.parse(c.signed.borrower)) +
    24 * 60 * 60 * 1000
  );
}
export function originalDocument(terms) {
  const snapshot = JSON.parse(JSON.stringify(terms));
  return {
    terms: snapshot,
    clauses: [
      ["제1조 · 당사자", people.lender + " → " + people.borrower],
      ["제2조 · 원금", terms.amount.toLocaleString("ko-KR") + "원"],
      [
        "제3조 · 대여",
        "양쪽 서명 후 " +
          (terms.accounts?.lender ?? "모의은행 110-***-482910") +
          "에서 " +
          (terms.accounts?.borrower ?? "모의은행 220-***-118204") +
          "로 모의 송금합니다. 송금 확인 기록을 같은 문서번호에 연결합니다.",
      ],
      [
        "제4조 · 이자와 지연",
        "무이자(연 0%). 시안의 지연손해금 문구는 연 5%이며, 실제 지연손해금 정산과 청구액은 서버 연동 전입니다.",
      ],
      ["제5조 · 상환", (terms.count ?? 1) + "회 · 아래 상환표에 따름"],
      [
        "제6조 · 조기 상환 및 특약",
        "남은 원금 범위에서 일부 또는 전부 상환. " +
          (terms.acceleration
            ? "연속 2회 미납 시 남은 돈 청구에 관한 특약을 선택함."
            : "별도 기한이익 상실 특약 없음."),
      ],
      [
        "제7조 · 서명과 변경",
        "두 사람이 같은 원문 버전에 모의 서명합니다. 변경 계약은 양쪽 재서명 이후 적용하며 이전 원문과 당시 서명은 보존합니다. 실제 본인인증·전자서명·해시 검증·서버 원본 보관은 연동 전입니다.",
      ],
      ["제8조 · 약속 내용", terms.memo || "없음"],
    ],
  };
}
// Frontend rehearsal. A backend must authorize and serialize these transitions across devices.
export function applyEvent(c, role, e) {
  const fail = (message) => {
    throw new Error(message);
  };
  const event = (next, text) => ({
    ...c,
    ...next,
    events: [...c.events, { role, text, at: e.at }],
  });
  const signedByBoth = (s) => Boolean(s.lender && s.borrower);
  if (e.type === "start") {
    if (!["empty", "cancelled", "closed"].includes(c.phase)) return c;
    return {
      ...newContract(),
      channel: e.channel,
      phase: "pairing",
      identifier: e.id,
    };
  }
  if (e.type === "connect" && c.phase === "pairing") {
    if (c.channel === "remote" && !c.invited)
      fail("원격 요청을 먼저 보내 주세요.");
    if (c.peers[role]) return c;
    const peers = { ...c.peers, [role]: true };
    return event(
      {
        peers,
        phase: peers.lender && peers.borrower ? "negotiation" : "pairing",
      },
      "상대 확인",
    );
  }
  const reopening = e.type === "renegotiate" && c.phase === "signing";
  if (
    reopening ||
    (e.type === "offer" && c.phase === "negotiation" && role === c.turn)
  ) {
    if (!validateTerms(e.terms)) fail("원금과 상환 날짜를 확인해 주세요.");
    return event(
      {
        phase: "negotiation",
        signed: {},
        marks: {},
        markBoxes: {},
        draftDocument: null,
        proposals: [
          ...c.proposals,
          {
            role,
            terms: {
              ...e.terms,
              count: e.terms.count ?? 1,
              schedule: makeSchedule(
                e.terms.amount,
                e.terms.due,
                e.terms.count ?? 1,
              ),
            },
          },
        ],
        turn: opposite(role),
      },
      reopening ? "서명 전 재협상 제안" : "조건 제안",
    );
  }
  if (
    e.type === "agree" &&
    c.phase === "negotiation" &&
    c.proposals.length &&
    role === c.turn
  ) {
    return event(
      {
        phase: "signing",
        signed: {},
        draftDocument: originalDocument(currentTerms(c)),
      },
      "조건 합의",
    );
  }
  if (
    e.type === "cancel" &&
    ["pairing", "negotiation", "signing"].includes(c.phase)
  )
    return event({ phase: "cancelled" }, "체결 취소");
  if (e.type === "sign" && c.phase === "signing" && !c.signed[role]) {
    if (!e.strokes?.some((path) => path.includes(" L ")))
      fail("손글씨 서명을 입력해 주세요.");
    const markBoxes = { ...c.markBoxes, [role]: e.markBox ?? [320, 140] };
    const marks = { ...c.marks, [role]: [...e.strokes] };
    const signed = { ...c.signed, [role]: e.at };
    const done = signedByBoth(signed);
    return event(
      {
        signed,
        marks,
        markBoxes,
        phase: done ? "signed" : "signing",
        versions: done
          ? [
              {
                number: 1,
                signed,
                marks,
                markBoxes,
                document: c.draftDocument,
                terms: { ...currentTerms(c) },
              },
            ]
          : [],
      },
      "원본 모의 서명",
    );
  }
  if (e.type === "fund" && role === "lender" && c.phase === "signed") {
    if (fundingUnlock(c) > Date.parse(e.at))
      fail(
        "300만 원 이상은 두 사람의 서명이 끝난 뒤 24시간이 지나야 모의 송금할 수 있어요.",
      );
    return event({ phase: "repaying" }, "모의 대여 송금");
  }
  if (
    e.type === "cancel" &&
    c.phase === "signed" &&
    fundingUnlock(c) > Date.parse(e.at)
  )
    return event({ phase: "cancelled" }, "송금 대기 중 약속 취소");
  if (
    e.type === "pay" &&
    e.requestId &&
    c.payments.some((p) => p.requestId === e.requestId)
  )
    return c;
  if (c.phase === "repaying") {
    if (e.type === "reminder" && role === "lender") {
      const today = calendarDay(new Date(e.at));
      const overdue = ledger(currentTerms(c), c.payments).some(
        (row) => row.remaining > 0 && row.due < today,
      );
      if (!overdue || c.lastReminder === today)
        fail("연체된 회차가 있을 때 하루 한 번 요청할 수 있어요.");
      return event({ lastReminder: today }, "연체 회차 상환 요청");
    }
    if (
      e.type === "amend" &&
      (!c.change || (c.change.stage === "review" && c.change.from !== role))
    ) {
      const terms = {
        ...currentTerms(c),
        due: e.terms.due,
        memo: e.terms.memo,
      };
      if (
        !validateTerms(terms) ||
        (terms.due === currentTerms(c).due &&
          terms.memo === currentTerms(c).memo)
      )
        fail("바꿀 상환일이나 사유를 입력해 주세요.");
      terms.schedule = reschedule(currentTerms(c), c.payments, terms.due);
      if (
        terms.schedule.some((r, i, rows) => i > 0 && r.due <= rows[i - 1].due)
      )
        fail("변경한 날짜는 이전 회차보다 뒤여야 해요.");
      return event(
        {
          change: { terms, from: role, stage: "review", signed: {}, marks: {} },
        },
        "변경안 제안",
      );
    }
    if (c.change?.stage === "review" && c.change.from !== role) {
      if (e.type === "decline")
        return event({ change: null }, "변경안 거절 · 기존 약속 유지");
      if (e.type === "accept")
        return event(
          {
            change: {
              ...c.change,
              stage: "signing",
              draftDocument: originalDocument(c.change.terms),
            },
          },
          "변경안 수락",
        );
    }
    if (
      e.type === "sign" &&
      c.change?.stage === "signing" &&
      !c.change.signed[role]
    ) {
      if (!e.strokes?.some((path) => path.includes(" L ")))
        fail("손글씨 서명을 입력해 주세요.");
      const markBoxes = {
        ...c.change.markBoxes,
        [role]: e.markBox ?? [320, 140],
      };
      const marks = { ...c.change.marks, [role]: [...e.strokes] };
      const signed = { ...c.change.signed, [role]: e.at };
      if (!signedByBoth(signed))
        return event(
          { change: { ...c.change, signed, marks, markBoxes } },
          "변경안 모의 서명",
        );
      const version = {
        number: c.versions.length + 1,
        terms: { ...c.change.terms },
        signed,
        marks,
        markBoxes,
        document: c.change.draftDocument,
      };
      return event(
        { change: null, versions: [...c.versions, version] },
        "변경 계약 확정",
      );
    }
    if (e.type === "report" && role === "borrower" && !c.outside && !c.change) {
      if (
        !Number.isSafeInteger(e.amount) ||
        e.amount <= 0 ||
        e.amount > balance(c)
      )
        fail("남은 원금 이내의 금액을 입력해 주세요.");
      return event({ outside: { amount: e.amount } }, "외부 상환 확인 요청");
    }
    if (
      ((e.type === "pay" && role === "borrower" && !c.outside) ||
        (e.type === "confirm" && role === "lender" && c.outside)) &&
      !c.change
    ) {
      const amount = e.type === "confirm" ? c.outside.amount : e.amount;
      if (!Number.isSafeInteger(amount) || amount <= 0 || amount > balance(c))
        fail("남은 원금 이내의 금액을 입력해 주세요.");
      const payment = {
        amount,
        requestId: e.requestId,
        at: e.at,
        method: e.type === "confirm" ? "외부 입금 확인" : "앱 모의 상환",
      };
      return event(
        {
          payments: [...c.payments, payment],
          outside: null,
          phase: amount === balance(c) ? "closed" : "repaying",
        },
        payment.method,
      );
    }
  }
  fail("이 단계에서 현재 계정이 처리할 수 없는 작업이에요.");
}
