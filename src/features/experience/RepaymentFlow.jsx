import { useRef, useState } from "react";
import { Pressable, View } from "react-native";
import {
  accounts,
  balance,
  currentTerms,
  opposite,
  people,
  statusOf,
} from "../../domain/workflow";
import { calendarDay, ledger } from "../../domain/schedule";
import {
  Badge,
  Button,
  Card,
  Choice,
  Empty,
  Field,
  Icon,
  Link,
  Money,
  Note,
  Page,
  Row,
  Schedule,
  Title,
  Txt,
  won,
  s,
} from "./FlowKit";
const requestId = () =>
  Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 9);
export function FundingFlow({ contract: c, role, event, back, open }) {
  const [confirm, setConfirm] = useState(false),
    [id] = useState(requestId),
    t = currentTerms(c);
  return (
    <Page
      title={role === "lender" ? "대여 송금" : "돈 받기"}
      step={4}
      back={back}
    >
      <Title
        description={
          role === "lender"
            ? "두 사람의 서명이 끝난 같은 약속으로 돈을 보내요."
            : "상대가 모의 송금을 완료하면 같은 약속의 상환 원장이 열려요."
        }
      >
        {role === "lender"
          ? "이제 약속한 돈을\n보내 주세요"
          : people.lender + "님의\n송금을 기다리고 있어요"}
      </Title>
      <Card title={role === "lender" ? "이하린님에게 보내기" : "받을 금액"}>
        <Money amount={t.amount} />
        <Row
          label="보내는 계좌"
          value={c.accounts?.lender ?? accounts.lender}
        />
        <Row
          label="받는 계좌"
          value={c.accounts?.borrower ?? accounts.borrower}
        />
        <Row label="문서번호" value={c.identifier} />
        <Row label="서명" value="박도윤 · 이하린 모두 완료" />
      </Card>
      <Note>
        모의 송금이에요. 실제 은행 거래와 계좌 잔액 차감은 발생하지 않아요.
      </Note>
      {role === "lender" ? (
        confirm ? (
          <>
            <Card title="송금 내용을 한 번 더 확인해 주세요">
              <Row label="받는 사람" value={people.borrower} />
              <Row label="보낼 돈" value={won(t.amount)} />
            </Card>
            <Button
              title={won(t.amount) + " 모의 송금 확정"}
              onPress={() =>
                event("fund", {
                  requestId: id,
                })
              }
            />
            <Button
              secondary
              title="돌아가기"
              onPress={() => setConfirm(false)}
            />
          </>
        ) : (
          <Button
            title={won(t.amount) + " 보내기"}
            onPress={() => setConfirm(true)}
          />
        )
      ) : (
        <Badge>대여 송금 대기</Badge>
      )}
      <Link onPress={() => open("versions")}>서명 원본 보기</Link>
    </Page>
  );
}
export function ContractDetail({ contract: c, role, open, back, event }) {
  const t = currentTerms(c),
    rows = ledger(t, c.payments),
    next = rows.find((r) => r.remaining > 0),
    status = statusOf(c),
    peer = people[opposite(role)];
  return (
    <Page
      title={peer + "님과의 약속"}
      back={back}
      subtitle={
        (role === "lender" ? "빌려준 사람" : "빌린 사람") + " · " + people[role]
      }
    >
      <Badge warning={status === "연체"}>{status}</Badge>
      <Money
        amount={balance(c)}
        label={
          role === "lender" ? "받을 돈 · 남은 원금" : "갚을 돈 · 남은 원금"
        }
      />
      <Txt style={s.small}>
        {won(t.amount)} 중 {won(t.amount - balance(c))} 갚음 · 무이자 ·{" "}
        {rows.length}회
      </Txt>
      {c.change && (
        <Card soft title="변경 협의가 진행 중이에요">
          <Txt style={s.description}>
            양쪽 재서명 전에는 현재 원금과 상환표를 유지해요.
          </Txt>
          <Button title="변경안 확인" onPress={() => open("changeReview")} />
        </Card>
      )}
      {c.lastDecline && (
        <Note warning>
          {people[c.lastDecline.from]}님이 변경안을 거절했어요.{" "}
          {c.lastDecline.reason}
        </Note>
      )}
      {next && (
        <Card title={status === "연체" ? "기한이 지난 회차" : "다음 상환"}>
          <Row
            label={next.number + "회차 · " + next.due}
            value={won(next.remaining)}
          />
          <Row
            label="상환 계좌"
            value={c.accounts?.lender ?? accounts.lender}
          />
          {role === "borrower" && (
            <Link onPress={() => open("reminders")}>내 상환 알림 설정</Link>
          )}
        </Card>
      )}
      <Card title="상환 원장">
        <Row
          label="대여 실행"
          value={
            c.fundedAt
              ? new Date(c.fundedAt).toLocaleDateString("ko-KR")
              : "대기"
          }
        />
        <Schedule rows={rows} onPress={(r) => r.paid > 0 && open("receipts")} />
        <Link onPress={() => open("receipts")}>상환 영수증 보기</Link>
      </Card>
      {c.outside && (
        <Card
          soft
          title={
            role === "lender" ? "알려 온 외부 상환" : "외부 상환 확인 대기"
          }
        >
          <Row
            label={c.outside.sentDate + " · " + c.outside.sender}
            value={won(c.outside.amount)}
          />
          <Txt style={s.description}>
            알리기만 해서는 갚은 것으로 기록되지 않아요. 받은 사람이 입금
            내역에서 확인해야 반영돼요.
          </Txt>
          {role === "lender" && (
            <Button
              title="내 입금 내역에서 확인"
              onPress={() => open("deposits")}
            />
          )}
        </Card>
      )}
      <Card title="약속 메뉴">
        <Link onPress={() => open("versions")}>약정서 · 변경 합의서</Link>
        <Link onPress={() => open("changeEditor")}>약속 변경 제안</Link>
        <Link onPress={() => open("audit")}>증거·진행 기록</Link>
      </Card>
      {role === "borrower" && c.phase === "repaying" && !c.change && (
        <>
          <Button
            title={next?.number + "회차 " + won(next?.remaining) + " 갚기"}
            onPress={() => open("payment")}
          />
          {!c.outside && (
            <Button
              secondary
              title="따로 보낸 돈 알리기"
              onPress={() => open("report")}
            />
          )}
        </>
      )}
      {role === "lender" && c.phase === "repaying" && !c.change && (
        <Button
          secondary
          title="따로 받은 돈 · 입금 내역에서 넣기"
          onPress={() => open("deposits")}
        />
      )}
      {status === "연체" && (
        <Button
          title={role === "lender" ? "연체 현황 · 상환 요청" : "연체 안내 보기"}
          secondary
          onPress={() => open("overdue")}
        />
      )}
      {c.phase === "closed" && (
        <Note>
          모든 회차를 갚았어요. 두 사람의 원문과 상환 이력은 그대로 보관해요.
        </Note>
      )}
    </Page>
  );
}
export function PaymentFlow({ contract: c, role, page, event, back, open }) {
  const rows = ledger(currentTerms(c), c.payments),
    next = rows.find((r) => r.remaining),
    [amount, setAmount] = useState(String(next?.remaining ?? 0)),
    [date, setDate] = useState(calendarDay()),
    [sender, setSender] = useState(people.borrower),
    [method, setMethod] = useState("다른 은행 앱"),
    [target, setTarget] = useState(next?.id),
    [confirm, setConfirm] = useState(false),
    [id] = useState(requestId),
    external = page === "report";
  const row = rows.find((r) => r.id === target),
    available = rows
      .slice(rows.findIndex((r) => r.id === target))
      .reduce((n, r) => n + r.remaining, 0),
    number = /^\d+$/.test(amount) ? Number(amount) : NaN,
    valid = Number.isSafeInteger(number) && number > 0 && number <= available;
  if (!next)
    return (
      <Page title="상환" back={back}>
        <Empty
          title="모든 회차를 갚았어요"
          description="남아 있는 상환 금액이 없어요."
        />
        <Button title="약속으로" onPress={() => open("detail")} />
      </Page>
    );
  if (c.change)
    return (
      <Page title="상환" back={back}>
        <Note>변경 협의가 끝난 뒤 상환을 진행해 주세요.</Note>
        <Button title="변경안 확인" onPress={() => open("changeReview")} />
      </Page>
    );
  if (external && c.outside)
    return (
      <Page title="따로 보낸 돈 알리기" back={back}>
        <Title>박도윤님의 확인을{"\n"}기다리고 있어요</Title>
        <Card>
          <Row label={c.outside.sentDate} value={won(c.outside.amount)} />
          <Txt style={s.description}>
            확인 전까지 상환일과 남은 금액은 그대로예요. 앱 상환은 계속할 수
            있어요.
          </Txt>
        </Card>
        <Button title="약속으로 돌아가기" onPress={() => open("detail")} />
      </Page>
    );
  return (
    <Page
      title={external ? "따로 보낸 돈 알리기" : "앱으로 갚기"}
      back={back}
      subtitle="빌리는 사람 · 이하린의 화면"
    >
      <Title
        description={
          external
            ? "다른 은행 앱이나 현금으로 보냈다면 받은 사람이 확인할 수 있게 알려 주세요."
            : "선택한 회차부터 반영해요. 전액 상환은 따로 선택할 수 있어요."
        }
      >
        {confirm
          ? "보낼 내용을\n확인해 주세요"
          : external
            ? "따로 보낸 돈을\n박도윤님에게 알려요"
            : "이번 회차를\n얼마나 갚을까요?"}
      </Title>
      {confirm ? (
        <Card title={external ? "외부 상환 알림" : "모의 송금 확인"}>
          <Row label="받는 사람" value={people.lender} />
          <Row label="계좌" value={c.accounts?.lender ?? accounts.lender} />
          <Row label="반영 시작" value={row?.number + "회차"} />
          <Money amount={number} />
          {external && (
            <>
              <Row label="보낸 날짜" value={date} />
              <Row label="보낸 이름" value={sender} />
              <Row label="방법" value={method} />
            </>
          )}
        </Card>
      ) : (
        <>
          <Card title="어느 회차 돈인가요">
            {rows
              .filter((r) => r.remaining)
              .map((r) => (
                <Choice
                  key={r.id}
                  label={
                    r.number + "회차 · " + r.due + " · " + won(r.remaining)
                  }
                  selected={r.id === target}
                  onPress={() => {
                    setTarget(r.id);
                    setAmount(String(r.remaining));
                  }}
                />
              ))}
          </Card>
          <Card title={external ? "보낸 돈" : "보낼 돈"}>
            <Row label="남은 원금 전체" value={won(balance(c))} />
            <Field
              label={external ? "따로 보낸 금액 (원)" : "상환할 금액 (원)"}
              numeric
              value={amount}
              onChangeText={(v) => setAmount(v.replace(/[^0-9]/g, ""))}
            />
            {!external && (
              <Button
                secondary
                small
                title="남은 금액 전액 선택"
                onPress={() => {
                  setTarget(next.id);
                  setAmount(String(balance(c)));
                }}
              />
            )}
            {external && (
              <>
                <Field
                  label="보낸 날짜 (YYYY-MM-DD)"
                  value={date}
                  onChangeText={setDate}
                />
                <Field
                  label="보낸 사람 이름"
                  value={sender}
                  onChangeText={setSender}
                />
                {["다른 은행 앱", "현금", "그 밖에"].map((item) => (
                  <Choice
                    key={item}
                    label={item}
                    selected={method === item}
                    onPress={() => setMethod(item)}
                  />
                ))}
              </>
            )}
          </Card>
          {valid && (
            <Card soft title="반영되면">
              <Row
                label={row.number + "회차"}
                value={
                  number < row.remaining
                    ? won(row.remaining - number) + " 남음"
                    : "완납"
                }
              />
              {number > row.remaining && (
                <Txt style={s.small}>
                  남는 {won(number - row.remaining)}은 다음 회차부터 반영돼요.
                </Txt>
              )}
            </Card>
          )}
        </>
      )}
      <Note>
        {external
          ? "알리기만 해서는 원장에 상환으로 반영되지 않아요."
          : "실제 이체 없이 두 시연 계정의 원장에 한 번만 반영해요."}
      </Note>
      <Button
        title={
          confirm
            ? external
              ? "박도윤님에게 알리기"
              : won(number) + " 모의 상환 확정"
            : "내용 확인하기"
        }
        disabled={!valid}
        onPress={() =>
          confirm
            ? event(external ? "report" : "pay", {
                amount: number,
                requestId: id,
                installmentId: target,
                sentDate: date,
                sender,
                method,
              })
            : setConfirm(true)
        }
      />
      {confirm && (
        <Button secondary title="내용 수정" onPress={() => setConfirm(false)} />
      )}
    </Page>
  );
}
export function DepositFlow({ contract: c, event, back, open }) {
  const rows = ledger(currentTerms(c), c.payments),
    first = rows.find((r) => r.remaining),
    [target, setTarget] = useState(c.outside?.installmentId ?? first?.id),
    [selected, setSelected] = useState([]),
    [filter, setFilter] = useState(false),
    [mock, setMock] = useState(false),
    [sender, setSender] = useState(c.outside?.sender ?? people.borrower),
    [amount, setAmount] = useState(String(c.outside?.amount ?? 80000)),
    [date, setDate] = useState(c.outside?.sentDate ?? calendarDay()),
    [id, setId] = useState(requestId);
  const available = c.deposits.filter(
      (d) => !d.used && (!filter || d.sender === people.borrower),
    ),
    sum = c.deposits
      .filter((d) => selected.includes(d.id) && !d.used)
      .reduce((n, d) => n + d.amount, 0),
    row = rows.find((r) => r.id === target),
    limit = rows
      .slice(rows.findIndex((r) => r.id === target))
      .reduce((n, r) => n + r.remaining, 0);
  return (
    <Page
      title="입금 내역에서 넣기"
      back={back}
      subtitle="빌려준 사람 · 박도윤의 화면"
    >
      <Title description="이름·금액이 같아도 다른 돈일 수 있어요. 내가 고른 입금만 반영해요.">
        내 계좌에 들어온 돈 중{"\n"}상환금을 골라요
      </Title>
      {c.outside && (
        <Note>
          {c.outside.sender}님이 {c.outside.sentDate}에 {won(c.outside.amount)}
          을 보냈다고 알려 왔어요.
        </Note>
      )}
      <Card title="어느 회차에 넣을까요">
        {rows
          .filter((r) => r.remaining)
          .map((r) => (
            <Choice
              key={r.id}
              label={r.number + "회차 · " + r.due + " · " + won(r.remaining)}
              selected={target === r.id}
              onPress={() => setTarget(r.id)}
            />
          ))}
      </Card>
      <Card title="내 계좌 입금 내역">
        <Txt style={s.small}>
          {c.accounts?.lender ?? accounts.lender} · 시연 내역
        </Txt>
        <Choice
          label="보낸 이름 ‘이하린’만 보기"
          selected={filter}
          onPress={() => setFilter(!filter)}
        />
        {!available.length && (
          <Txt style={s.small}>
            선택할 입금이 없어요. 아래에서 시연 내역을 추가할 수 있어요.
          </Txt>
        )}
        {available.map((d) => (
          <Pressable
            key={d.id}
            accessibilityRole="checkbox"
            accessibilityLabel={d.sender + " 입금 " + won(d.amount)}
            accessibilityState={{
              checked: selected.includes(d.id),
            }}
            onPress={() =>
              setSelected((old) =>
                old.includes(d.id)
                  ? old.filter((x) => x !== d.id)
                  : [...old, d.id],
              )
            }
            style={s.scheduleRow}
          >
            <Txt style={s.changeValue}>
              {selected.includes(d.id) ? "☑" : "□"}
            </Txt>
            <View style={s.grow}>
              <Txt style={s.strong}>{d.sender}</Txt>
              <Txt style={s.small}>
                {new Date(d.at).toLocaleString("ko-KR")}
              </Txt>
            </View>
            <Txt style={s.strong}>{won(d.amount)}</Txt>
          </Pressable>
        ))}
      </Card>
      <Card soft title={"고른 " + selected.length + "건"}>
        <Row label="선택한 입금 합계" value={won(sum)} />
        <Row label={row?.number + "회차 남은 돈"} value={won(row?.remaining)} />
        <Txt style={s.description}>
          {sum > limit
            ? "남은 약정 금액을 넘었어요. 입금을 다시 골라 주세요."
            : sum < (row?.remaining ?? 0)
              ? won((row?.remaining ?? 0) - sum) +
                " 모자라요 · 일부 납부로 남아요."
              : sum > (row?.remaining ?? 0)
                ? "회차를 넘는 금액은 다음 회차에 반영해요."
                : "선택한 회차가 완납돼요."}
        </Txt>
      </Card>
      <Button
        title={row?.number + "회차에 넣기"}
        disabled={!sum || sum > limit || !!c.change}
        onPress={() => {
          if (
            event("recordDeposit", {
              depositIds: selected,
              installmentId: target,
              requestId: id,
            })
          ) {
            setSelected([]);
            setId(requestId());
          }
        }}
      />
      {c.outside && (
        <Link onPress={() => event("rejectReport")}>
          알려 온 입금을 찾지 못했어요
        </Link>
      )}
      <Link onPress={() => setMock(!mock)}>
        {mock ? "시연 입금 입력 닫기" : "시연 입금 내역 추가"}
      </Link>
      {mock && (
        <Card title="테스트 입금 추가">
          <Field label="입금자 이름" value={sender} onChangeText={setSender} />
          <Field
            label="입금 금액 (원)"
            numeric
            value={amount}
            onChangeText={setAmount}
          />
          <Field
            label="입금 날짜 (YYYY-MM-DD)"
            value={date}
            onChangeText={setDate}
          />
          <Button
            secondary
            title="내 시연 입금 내역에 추가"
            onPress={() => {
              if (
                event(
                  "simulateDeposit",
                  {
                    sender,
                    amount: Number(amount),
                    date,
                    requestId: requestId(),
                  },
                  false,
                )
              )
                setMock(false);
            }}
          />
        </Card>
      )}
      <Note>
        받은 사람이 확인한 외부 입금은 즉시 반영돼요. 영수증에서 반영을 되돌릴
        수 있어요.
      </Note>
    </Page>
  );
}
export function ReceiptScreen({ contract: c, role, event, back }) {
  const [selected, setSelected] = useState(null);
  return (
    <Page title="상환 영수증" back={back}>
      {!c.payments.length && (
        <Empty
          title="아직 상환 기록이 없어요"
          description="상환이 확인되면 같은 영수증이 두 계정에 보여요."
        />
      )}
      {c.payments.map((p, i) => (
        <Card key={p.requestId ?? i} title={i + 1 + "번째 상환 영수증"}>
          <Money amount={p.amount} />
          <Row label="상태" value={p.reversedAt ? "반영 되돌림" : "확인됨"} />
          <Row label="보낸 사람" value={people.borrower} />
          <Row label="받은 사람" value={people.lender} />
          <Row label="방법" value={p.method} />
          <Row
            label="기록 시각"
            value={new Date(p.at).toLocaleString("ko-KR")}
          />
          <Row label="문서번호" value={c.identifier} />
          {role === "lender" && p.depositIds && !p.reversedAt && (
            <>
              <Link
                onPress={() =>
                  setSelected(selected === p.requestId ? null : p.requestId)
                }
              >
                잘못 반영했나요? 되돌리기
              </Link>
              {selected === p.requestId && (
                <>
                  <Note warning>
                    이 외부 입금의 반영을 되돌리면 원장의 남은 금액이 다시
                    늘어나요. 기록은 삭제하지 않아요.
                  </Note>
                  <Button
                    secondary
                    title="외부 입금 반영 되돌리기"
                    onPress={() =>
                      event("reverseDeposit", {
                        paymentId: p.requestId,
                      })
                    }
                  />
                </>
              )}
            </>
          )}
        </Card>
      ))}
    </Page>
  );
}
