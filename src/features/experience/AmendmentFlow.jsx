import { useState } from "react";
import { View } from "react-native";
import { addDays, currentTerms, opposite, people } from "../../domain/workflow";
import { ledger, validDate } from "../../domain/schedule";
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
  Title,
  Txt,
  won,
  s,
} from "./FlowKit";
export default function AmendmentFlow({
  contract: c,
  role,
  page,
  event,
  open,
  back,
  notice,
}) {
  const old = ledger(currentTerms(c), c.payments),
    source = c.change?.terms ?? currentTerms(c),
    [rows, setRows] = useState(() =>
      source.schedule.map((r) => ({
        ...r,
        id: r.id ?? String(r.number),
        amount: String(r.amount),
      })),
    ),
    [reason, setReason] = useState(c.change?.reason ?? ""),
    [reduction, setReduction] = useState(false),
    [decline, setDecline] = useState("날짜가 너무 멀어요"),
    [message, setMessage] = useState("");
  const before = old.reduce((n, r) => n + r.amount, 0),
    after = rows.reduce((n, r) => n + Number(r.amount), 0),
    paid = c.payments
      .filter((p) => !p.reversedAt)
      .reduce((n, p) => n + p.amount, 0);
  function patch(id, change) {
    setRows((old) =>
      old.map((r) =>
        r.id === id
          ? {
              ...r,
              ...change,
            }
          : r,
      ),
    );
  }
  function split(id) {
    const index = rows.findIndex((r) => r.id === id),
      row = rows[index],
      settled = old.find((r) => r.id === id)?.paid ?? 0,
      part = Math.floor((Number(row.amount) - settled) / 2);
    if (
      !validDate(row.due) ||
      !Number.isSafeInteger(part) ||
      part < 1 ||
      rows.length >= 36
    ) {
      notice("나눌 금액이 부족하거나 최대 36회차예요.");
      return;
    }
    let due = addDays(row.due, 7);
    if (rows[index + 1] && due >= rows[index + 1].due)
      due = addDays(rows[index + 1].due, -1);
    if (due <= row.due) {
      notice("다음 회차 전에 날짜 여유를 먼저 만들어 주세요.");
      return;
    }
    setRows((old) => {
      const added = [
        ...old.slice(0, index),
        {
          ...row,
          amount: String(Number(row.amount) - part),
        },
        {
          id: row.id + "-" + Date.now().toString(36),
          number: row.number + "-2",
          due,
          amount: String(part),
        },
        ...old.slice(index + 1),
      ];
      const counts = {};
      return added.map((item) => {
        const base = String(item.number).split("-")[0];
        counts[base] = (counts[base] ?? 0) + 1;
        return {
          ...item,
          number: counts[base] === 1 ? Number(base) : base + "-" + counts[base],
        };
      });
    });
  }
  if (page === "changeEditor")
    return (
      <Page
        title="약속 바꾸기 제안"
        back={back}
        subtitle={people[role] + " · " + people[opposite(role)] + "님과의 약속"}
      >
        <Title description="날짜를 미루거나 남은 회차를 나눠 제안할 수 있어요. 이미 갚은 회차는 고정돼요.">
          바꿀 조건을 정해서{"\n"}상대에게 제안해요
        </Title>
        <Card title="회차별 조건">
          {rows.map((row) => {
            const locked = old.find((r) => r.id === row.id)?.remaining === 0;
            return (
              <View
                key={row.id}
                style={{
                  gap: 9,
                  paddingVertical: 8,
                  borderBottomWidth: 1,
                  borderBottomColor: "#D5D4C5",
                }}
              >
                <View style={s.sectionHeader}>
                  <Txt style={s.strong}>{row.number}회차</Txt>
                  {locked && <Badge>갚음 · 고정</Badge>}
                </View>
                <Field
                  label={row.number + "회차 날짜 (YYYY-MM-DD)"}
                  value={row.due}
                  onChangeText={(due) =>
                    patch(row.id, {
                      due,
                    })
                  }
                  editable={!locked}
                />
                <Field
                  label={row.number + "회차 금액 (원)"}
                  numeric
                  value={row.amount}
                  onChangeText={(amount) =>
                    patch(row.id, {
                      amount,
                    })
                  }
                  editable={!locked}
                />
                {!locked && (
                  <Link onPress={() => split(row.id)} icon="plus">
                    이 회차 한 번 더 나누기
                  </Link>
                )}
              </View>
            );
          })}
        </Card>
        <Card soft title="보내기 전 자동 확인">
          <Row label="기존 남은 금액" value={won(before - paid)} />
          <Row label="변경 후 남은 금액" value={won(after - paid)} />
          <Row
            label="차이"
            value={
              after === before
                ? "합계가 같아요"
                : after < before
                  ? won(before - after) + " 감액"
                  : won(after - before) + " 초과"
            }
          />
          {after < before && (
            <Choice
              label="원금 감액 제안임을 확인했어요"
              selected={reduction}
              onPress={() => setReduction(!reduction)}
            />
          )}
          <Txt style={s.small}>
            날짜·금액은 전송할 때 다시 검사해요. 감액은 양쪽 재서명 이후에만
            적용돼요.
          </Txt>
        </Card>
        <Field
          label="사유와 메시지"
          multiline
          value={reason}
          onChangeText={setReason}
        />
        <Row label="답 기다리는 기한" value="48시간" />
        <Note>
          상대가 수락하고 두 사람이 다시 서명하기 전에는 원래 약속을 유지해요.
        </Note>
        <Button
          title={people[opposite(role)] + "님께 제안 보내기"}
          onPress={() =>
            event("amend", {
              terms: {
                ...currentTerms(c),
                memo: reason,
                schedule: rows.map((r) => ({
                  ...r,
                  amount: /^\d+$/.test(r.amount) ? Number(r.amount) : NaN,
                })),
              },
              reason,
              allowReduction: reduction,
            })
          }
        />
      </Page>
    );
  if (page === "decline")
    return (
      <Page title="거절 이유 알려 주기" back={back}>
        <Title description="이유는 선택이에요. 거절해도 원래 약속은 그대로 유지돼요.">
          어떤 점이 어려운지{"\n"}알려 주세요
        </Title>
        {[
          "회차가 늘어나는 게 번거로워요",
          "날짜가 너무 멀어요",
          "먼저 보내는 금액이 적어요",
          "기타",
        ].map((item) => (
          <Choice
            key={item}
            label={item}
            selected={decline === item}
            onPress={() => setDecline(item)}
          />
        ))}
        <Field
          label="상대에게 남길 말"
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <Button
          title="거절 보내기"
          onPress={() =>
            event("decline", {
              reason: [decline, message].filter(Boolean).join(" · "),
            })
          }
        />
        <Button
          secondary
          title="역제안으로 바꾸기"
          onPress={() => open("changeEditor")}
        />
      </Page>
    );
  if (!c.change)
    return (
      <Page title="변경 협의" back={back}>
        <Note>
          {c.lastDecline
            ? "변경안이 거절됐어요. " + c.lastDecline.reason
            : "진행 중인 변경안이 없어요."}
        </Note>
        <Button title="약속으로 돌아가기" onPress={() => open("detail")} />
        <Button
          secondary
          title="새 변경안 제안"
          onPress={() => open("changeEditor")}
        />
      </Page>
    );
  return (
    <Page title="변경 요청" back={back} subtitle={people[role] + "의 화면"}>
      <Title
        description={c.change.reason || "회차별 변경 내용을 확인해 주세요."}
      >
        {people[c.change.from]}님이{"\n"}약속 변경을 요청했어요
      </Title>
      <Card title="회차별 변경 전·후">
        <View style={s.diffRow}>
          <Txt style={s.diffCell}>회차</Txt>
          <Txt style={s.diffCell}>지금</Txt>
          <Txt style={s.diffCell}>바뀐 뒤</Txt>
        </View>
        {c.change.terms.schedule.map((row) => {
          const prev = old.find((r) => r.id === row.id),
            same = prev && row.due === prev.due && row.amount === prev.amount;
          return (
            <View key={row.id} style={s.diffRow}>
              <Txt style={[s.diffCell, s.strong]}>{row.number}회차</Txt>
              <View style={s.diffCell}>
                <Txt style={s.small}>{prev?.due ?? "없음"}</Txt>
                {prev && <Txt style={s.small}>{won(prev.amount)}</Txt>}
              </View>
              <View style={s.diffCell}>
                <Txt style={same ? s.small : s.changeValue}>
                  {same ? "변경 없음" : row.due}
                </Txt>
                {!same && <Txt style={s.changeValue}>{won(row.amount)}</Txt>}
              </View>
            </View>
          );
        })}
        <Row label="변경 후 약정 총액" value={won(c.change.terms.amount)} />
        <Row
          label="답변 기한"
          value={new Date(c.change.expiresAt).toLocaleString("ko-KR")}
        />
      </Card>
      <Note>
        수락은 변경 내용에 대한 동의예요. 두 사람이 새 원문에 재서명해야 장부와
        캘린더가 바뀌어요.
      </Note>
      {c.change.stage === "signing" ? (
        <Button
          title="변경 합의서 읽고 재서명"
          onPress={() =>
            open(c.change.signed[role] ? "certificate" : "reviewDocument")
          }
        />
      ) : c.change.from === role ? (
        <Badge>상대 답 기다리는 중</Badge>
      ) : (
        <>
          <Button title="수락 · 재서명으로" onPress={() => event("accept")} />
          <Button
            secondary
            title="역제안"
            onPress={() => open("changeEditor")}
          />
          <Link onPress={() => open("decline")}>거절</Link>
        </>
      )}
      <Link onPress={() => open("changeHistory")}>주고받은 변경 기록</Link>
    </Page>
  );
}
export function ChangeHistory({ contract: c, back }) {
  return (
    <Page title="변경 협의 기록" back={back}>
      {c.changeHistory.length ? (
        c.changeHistory.map((item, i) => (
          <Card key={i} title={i + 1 + "차 · " + people[item.from]}>
            <Txt>{item.reason || "사유 없음"}</Txt>
            <Txt style={s.small}>
              {new Date(item.at).toLocaleString("ko-KR")}
            </Txt>
            {item.terms.schedule.map((r) => (
              <Row
                key={r.id}
                label={r.number + "회차 · " + r.due}
                value={won(r.amount)}
              />
            ))}
          </Card>
        ))
      ) : (
        <Txt>아직 주고받은 변경안이 없어요.</Txt>
      )}
    </Page>
  );
}
