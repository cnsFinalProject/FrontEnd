import { useState } from "react";
import { View } from "react-native";
import {
  currentTerms,
  initialTerms,
  opposite,
  people,
} from "../../domain/workflow";
import { calendarDay, makeSchedule } from "../../domain/schedule";
import {
  Badge,
  Button,
  Card,
  Choice,
  Field,
  Link,
  Note,
  Page,
  Row,
  Schedule,
  Title,
  Txt,
  won,
  s,
} from "./FlowKit";
export default function NegotiationFlow({
  contract: c,
  role,
  page,
  open,
  event,
  back,
  switchRole,
}) {
  const latest = c.proposals.at(-1),
    terms = currentTerms(c),
    [amount, setAmount] = useState(String(terms.amount)),
    [due, setDue] = useState(terms.due),
    [count, setCount] = useState(String(latest ? terms.count : 2)),
    [memo, setMemo] = useState(terms.memo ?? ""),
    [special, setSpecial] = useState(Boolean(terms.acceleration));
  const rows = makeSchedule(Number(amount), due, Number(count)),
    editing = page === "editor" || (!latest && c.turn === role),
    waiting = c.turn !== role && page !== "editor";
  const send = () =>
    event(c.phase === "signing" ? "renegotiate" : "offer", {
      terms: {
        amount: /^\d+$/.test(amount) ? Number(amount) : NaN,
        due,
        count: /^\d+$/.test(count) ? Number(count) : NaN,
        memo,
        acceleration: special,
      },
    });
  if (waiting)
    return (
      <Page title="조건 협상" step={2} back={back}>
        <Title description="상대가 합의하거나 역제안하면 같은 약속에서 이어서 확인해요.">
          {people[opposite(role)]}님이{"\n"}제안을 보고 있어요
        </Title>
        <Card title={c.proposals.length + "차 제안"}>
          <Row label="원금" value={won(terms.amount)} />
          <Row label="갚는 방식" value={terms.count + "회 · 무이자"} />
          <Row label="첫 상환일" value={terms.due} />
        </Card>
        <Button
          secondary
          title={people[opposite(role)] + " 계정으로 답하기"}
          onPress={() => switchRole(opposite(role))}
        />
        <Link onPress={() => open("stop")}>협상 그만하기</Link>
      </Page>
    );
  if (editing)
    return (
      <Page
        title={latest ? "역제안 작성" : "조건 제안하기"}
        step={2}
        back={back}
      >
        <Title
          description={
            latest
              ? "받은 조건을 바꾸고, 달라진 내용을 상대에게 보내요."
              : "지금은 돈이 나가지 않아요. 두 사람이 서명한 뒤 송금해요."
          }
        >
          {latest
            ? "바꾸고 싶은 조건을\n적어 주세요"
            : "어떤 조건으로\n빌려줄까요?"}
        </Title>
        <Card>
          <Field
            label="약정 원금 (원)"
            numeric
            value={amount}
            onChangeText={(v) => setAmount(v.replace(/[^0-9]/g, ""))}
          />
          <Row
            label="보낼 계좌"
            value={c.accounts?.lender ?? "모의은행 110-***-482910"}
          />
        </Card>
        <Card title="갚는 방식">
          <View style={s.buttonRow}>
            <View style={s.buttonCell}>
              <Button
                small
                secondary={count !== "1"}
                title="한 번에"
                onPress={() => setCount("1")}
              />
            </View>
            <View style={s.buttonCell}>
              <Button
                small
                secondary={count === "1"}
                title="나눠서"
                onPress={() => setCount(count === "1" ? "2" : count)}
              />
            </View>
          </View>
          {count !== "1" && (
            <Field
              label="상환 횟수 (2~36회)"
              numeric
              value={count}
              onChangeText={setCount}
            />
          )}
          <Field
            label="첫 상환일 (YYYY-MM-DD)"
            value={due}
            onChangeText={setDue}
          />
          <Txt style={s.small}>
            첫 날짜가 말일이면 다음 회차도 매월 말일로 계산해요.
          </Txt>
        </Card>
        <Card title="추가 조건">
          <Row label="이자" value="없음 · 연 0%" />
          <Row label="지연손해금" value="시안 예시 · 연 5%" />
          <Choice
            label="연속 2회 미납 시 남은 돈 청구 특약"
            selected={special}
            onPress={() => setSpecial(!special)}
          />
          <Field
            label="용도 메모·약속 내용"
            multiline
            value={memo}
            onChangeText={setMemo}
          />
          <Txt style={s.small}>
            현재 계산·상환은 무이자 시연이에요. 이율 입력과 지연손해금 정산은
            확정 서버 규격에 맞춰 연결해요.
          </Txt>
        </Card>
        <Card title="상환표 미리보기">
          {rows.length ? (
            <>
              <Schedule rows={rows} />
              <Row label="총 갚을 돈" value={won(Number(amount))} />
              <Row label="다 갚는 날" value={rows.at(-1).due} />
            </>
          ) : (
            <Txt style={s.small}>
              원금·날짜·횟수를 입력하면 상환표가 나와요.
            </Txt>
          )}
        </Card>
        <Button
          title={
            people[opposite(role)] +
            "님에게 " +
            (latest ? "역제안" : "제안") +
            " 보내기"
          }
          onPress={send}
        />
      </Page>
    );
  const previous = c.proposals.at(-2)?.terms;
  return (
    <Page
      title="조건 협상"
      step={2}
      back={back}
      subtitle={
        (role === "lender" ? "빌려주는 사람" : "빌리는 사람") +
        " · " +
        people[role]
      }
    >
      <Title description="받아들이면 이 조건으로 원문을 만들어요. 바꾸고 싶으면 역제안할 수 있어요.">
        {people[opposite(role)]}님이{"\n"}조건을{" "}
        {c.proposals.length > 1 ? "바꿔서 보냈어요" : "제안했어요"}
      </Title>
      <Card title="협상 기록">
        {c.proposals.map((p, i) => (
          <View key={i} style={s.timelineItem}>
            <Txt style={s.strong}>
              {i + 1}차 {i ? "역제안" : "제안"} · {people[p.role]}
            </Txt>
            <Txt style={s.small}>
              {won(p.terms.amount)} · {p.terms.count}회 · {p.terms.due}
            </Txt>
            {p.terms.memo && <Txt style={s.description}>{p.terms.memo}</Txt>}
          </View>
        ))}
      </Card>
      <Card title={previous ? "직전 제안에서 바뀐 것" : "받은 조건"}>
        {[
          ["원금", won(terms.amount), previous && won(previous.amount)],
          ["갚는 방식", terms.count + "회", previous && previous.count + "회"],
          ["첫 상환일", terms.due, previous?.due],
          [
            "특약",
            terms.acceleration ? "연속 2회 미납 특약" : "없음",
            previous
              ? previous.acceleration
                ? "연속 2회 미납 특약"
                : "없음"
              : null,
          ],
        ].map(([name, value, before]) => (
          <View key={name}>
            <Row label={name} value={value} />
            {before && before !== value && (
              <Txt style={s.small}>
                이전 {before} → <Txt style={s.changeValue}>{value}</Txt>
              </Txt>
            )}
          </View>
        ))}
        <Row label="이자" value="무이자" />
      </Card>
      <Card title="동일 조건 상환표">
        <Schedule rows={terms.schedule} />
      </Card>
      <Button title="이 조건으로 합의" onPress={() => event("agree")} />
      <Button secondary title="역제안" onPress={() => open("editor")} />
      <Link onPress={() => open("stop")}>거절 · 협상 끝내기</Link>
    </Page>
  );
}
export function StopScreen({ event, back }) {
  return (
    <Page title="협상 종료" back={back}>
      <Title description="끝내면 두 계정 모두 종료 상태로 보여요. 조건만 맞지 않으면 돌아가서 역제안해 주세요.">
        이 협상을{"\n"}끝낼까요?
      </Title>
      <Button secondary title="계속 협상하기" onPress={back} />
      <Button danger title="협상 끝내기" onPress={() => event("cancel")} />
    </Page>
  );
}
