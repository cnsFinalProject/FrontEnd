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
  Empty,
  Icon,
  Link,
  Page,
  Row,
  Txt,
  won,
  s,
} from "./FlowKit";
export default function HomeScreen({ contracts, role, open, select, create }) {
  const active = contracts.filter(
      (c) => !["closed", "cancelled"].includes(c.phase),
    ),
    total = active
      .filter((c) => c.phase === "repaying")
      .reduce((n, c) => n + balance(c), 0);
  return (
    <Page>
      <View style={s.sectionHeader}>
        <Txt style={s.cardTitle}>{people[role]}님의 약속</Txt>
        <View style={s.buttonRow}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="알림함"
            onPress={() => open("inbox")}
            style={s.iconButton}
          >
            <Icon name="bell" />
          </Pressable>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="상환 캘린더"
            onPress={() => open("calendar")}
            style={s.iconButton}
          >
            <Icon name="calendar" />
          </Pressable>
        </View>
      </View>
      <View style={s.totals}>
        {["받을 돈", "갚을 돈"].map((label, i) => (
          <View key={label} style={s.totalCard}>
            <Txt style={s.small}>{label}</Txt>
            <Txt style={s.totalNumber}>
              {won((role === "lender") === (i === 0) ? total : 0)}
            </Txt>
            <Txt style={s.small}>
              약속 {(role === "lender") === (i === 0) ? active.length : 0}건
            </Txt>
          </View>
        ))}
      </View>
      <View style={s.sectionHeader}>
        <Txt style={s.cardTitle}>내 약속</Txt>
        <Link onPress={() => open("history")}>완납 포함 보기</Link>
      </View>
      {!active.length && (
        <Empty
          title="아직 약속이 없어요"
          description="차용증을 쓰면 상대 확인부터 갚는 날까지 한곳에서 챙길 수 있어요."
        />
      )}
      {active.map((c) => {
        const t = currentTerms(c),
          rows = ledger(t, c.payments),
          next = rows.find((r) => r.remaining > 0),
          status = statusOf(c),
          remaining = balance(c),
          paid = 1 - remaining / t.amount;
        return (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={
              people[opposite(role)] + "님과의 약속 " + status
            }
            key={c.identifier}
            onPress={() => select(c.identifier)}
            style={s.contractCard}
          >
            <View style={s.contractHead}>
              <Txt style={s.strong}>
                {people[opposite(role)]} ·{" "}
                {role === "lender" ? "빌려줌" : "빌림"}
              </Txt>
              <Badge warning={status === "연체"}>{status}</Badge>
            </View>
            <Txt style={s.totalNumber}>
              {won(c.phase === "repaying" ? remaining : t.amount)}
              {c.phase === "repaying" ? " 남음" : ""}
            </Txt>
            {c.phase === "repaying" && (
              <>
                <View style={s.progressTrack}>
                  <View
                    style={[
                      s.progressFill,
                      {
                        width: Math.max(0, Math.min(100, paid * 100)) + "%",
                      },
                    ]}
                  />
                </View>
                <Txt style={s.small}>
                  {next?.number}/{rows.length}회차 · {won(next?.remaining)} ·{" "}
                  {next?.due}
                  {next?.due < calendarDay() ? " · 기한 지남" : ""}
                </Txt>
              </>
            )}
            {c.phase === "negotiation" && (
              <Txt style={s.small}>
                {c.turn === role
                  ? "받은 조건을 확인해 주세요"
                  : "상대의 답을 기다려요"}{" "}
                · {c.proposals.length}차 제안
              </Txt>
            )}
            {c.phase === "signing" && (
              <Txt style={s.small}>
                {c.signed[role]
                  ? "내 서명 완료 · 상대 서명 대기"
                  : "조건 합의됨 · 원문을 읽고 서명해 주세요"}
              </Txt>
            )}
            {role === "borrower" && c.phase === "repaying" && !c.change && (
              <Button
                secondary
                title="지금 갚기"
                onPress={() => select(c.identifier, "payment")}
              />
            )}
            {role === "lender" && status === "연체" && (
              <Link onPress={() => select(c.identifier, "evidence")}>
                증거 묶음 초안 준비
              </Link>
            )}
          </Pressable>
        );
      })}
      <Button title="차용증 쓰기" icon="doc" onPress={create} />
    </Page>
  );
}
export function InboxScreen({
  contracts,
  role,
  select,
  back,
  readAt,
  markRead,
}) {
  const items = contracts
    .flatMap((c) =>
      c.events.map((e, i) => ({
        c,
        e,
        id: c.identifier + "-" + i,
      })),
    )
    .filter(({ e }) => !(e.type === "reminderSettings" && e.role !== role))
    .sort((a, b) => b.e.at.localeCompare(a.e.at));
  return (
    <Page title="알림함" back={back}>
      <View style={s.sectionHeader}>
        <Txt style={s.cardTitle}>약속의 새 소식</Txt>
        <Link onPress={markRead}>모두 읽음</Link>
      </View>
      {!items.length && (
        <Empty
          title="아직 알림이 없어요"
          description="조건 제안과 서명, 상환 소식을 여기서 확인해요."
        />
      )}
      {items.map(({ c, e, id }) => (
        <Pressable
          accessibilityRole="button"
          key={id}
          onPress={() => select(c.identifier)}
          style={s.contractCard}
        >
          <View style={s.contractHead}>
            <Txt style={s.strong}>
              {people[e.role]} · {e.text}
            </Txt>
            {e.at > readAt && <Badge>새 소식</Badge>}
          </View>
          <Txt style={s.small}>{new Date(e.at).toLocaleString("ko-KR")}</Txt>
          <Txt style={s.small}>{c.identifier}</Txt>
        </Pressable>
      ))}
    </Page>
  );
}
export function HistoryScreen({ contracts, select, back }) {
  return (
    <Page title="모든 약속" back={back}>
      {!contracts.length && <Empty title="보관된 약속이 없어요" />}
      {contracts.map((c) => (
        <Pressable
          key={c.identifier}
          accessibilityRole="button"
          onPress={() => select(c.identifier)}
          style={s.contractCard}
        >
          <Row label={c.identifier} value={statusOf(c)} />
          <Txt style={s.totalNumber}>{won(currentTerms(c).amount)}</Txt>
          <Txt style={s.small}>
            문서 v{c.versions.length} · 남은 금액 {won(balance(c))}
          </Txt>
        </Pressable>
      ))}
    </Page>
  );
}
