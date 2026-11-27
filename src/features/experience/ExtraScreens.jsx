import { useState } from "react";
import { Pressable, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import {
  accounts,
  balance,
  currentTerms,
  opposite,
  people,
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
  Note,
  Page,
  Row,
  Schedule,
  Title,
  Toggle,
  Txt,
  won,
  s,
} from "./FlowKit";
export function CalendarScreen({ contracts, role, open, select, back }) {
  const [month, setMonth] = useState(() => calendarDay().slice(0, 7)),
    [selected, setSelected] = useState(null),
    date = new Date(month + "-01T00:00:00Z"),
    year = date.getUTCFullYear(),
    m = date.getUTCMonth(),
    days = new Date(Date.UTC(year, m + 1, 0)).getUTCDate(),
    offset = date.getUTCDay();
  const entries = contracts
    .filter((c) => ["repaying", "closed"].includes(c.phase))
    .flatMap((c) =>
      ledger(currentTerms(c), c.payments).map((r) => ({
        ...r,
        contract: c,
      })),
    )
    .filter((r) => r.due.startsWith(month));
  const move = (n) => {
    const d = new Date(Date.UTC(year, m + n, 1));
    setMonth(d.toISOString().slice(0, 7));
    setSelected(null);
  };
  return (
    <Page title="상환 캘린더" back={back}>
      <View style={s.sectionHeader}>
        <Button small secondary title="이전 달" onPress={() => move(-1)} />
        <Txt style={s.cardTitle}>
          {year}년 {m + 1}월
        </Txt>
        <Button small secondary title="다음 달" onPress={() => move(1)} />
      </View>
      <Card soft>
        <Row
          label={"이번 달 " + (role === "lender" ? "받을 돈" : "갚을 돈")}
          value={won(entries.reduce((n, r) => n + r.remaining, 0))}
        />
      </Card>
      <Card>
        <View style={s.calendarGrid}>
          {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
            <View key={day} style={s.calendarCell}>
              <Txt style={s.small}>{day}</Txt>
            </View>
          ))}
          {Array.from(
            {
              length: offset,
            },
            (_, i) => (
              <View key={"blank" + i} style={s.calendarCell} />
            ),
          )}
          {Array.from(
            {
              length: days,
            },
            (_, i) => {
              const day = month + "-" + String(i + 1).padStart(2, "0");
              return (
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={day}
                  key={day}
                  onPress={() => setSelected(selected === day ? null : day)}
                  style={[
                    s.calendarCell,
                    selected === day && s.calendarSelected,
                  ]}
                >
                  <Txt style={day === calendarDay() ? s.changeValue : s.text}>
                    {i + 1}
                  </Txt>
                  {entries.some((r) => r.due === day) && (
                    <View style={s.calendarDot} />
                  )}
                </Pressable>
              );
            },
          )}
        </View>
      </Card>
      {entries
        .filter((r) => !selected || r.due === selected)
        .map((r) => (
          <Pressable
            key={r.contract.identifier + r.id}
            accessibilityRole="button"
            onPress={() => select(r.contract.identifier)}
            style={s.contractCard}
          >
            <Row
              label={r.due + " · " + r.number + "회차"}
              value={r.remaining ? won(r.remaining) : "갚음"}
            />
            <Txt style={s.small}>
              {people[opposite(role)]} · {r.contract.identifier}
            </Txt>
          </Pressable>
        ))}
      {!entries.filter((r) => !selected || r.due === selected).length && (
        <Empty
          title="예정된 상환이 없어요"
          description="다른 날짜나 달의 일정을 확인해 보세요."
        />
      )}
    </Page>
  );
}
export function ReminderScreen({ contract: c, event, back }) {
  const [settings, setSettings] = useState(
    c.reminders ?? {
      days: [3, 1, 0],
      balance: true,
      payday: "25",
      evening: false,
    },
  );
  return (
    <Page
      title="상환 알림"
      back={back}
      subtitle="빌리는 사람에게만 보이는 내 설정"
    >
      <Title>언제 알려드릴까요?</Title>
      <Card>
        {[
          [7, "상환일 7일 전"],
          [3, "3일 전 · 09:00"],
          [1, "하루 전 · 09:00"],
          [0, "당일 아침 · 09:00"],
        ].map(([day, label]) => (
          <Toggle
            key={day}
            label={label}
            value={settings.days.includes(day)}
            onChange={(on) =>
              setSettings((s) => ({
                ...s,
                days: on ? [...s.days, day] : s.days.filter((d) => d !== day),
              }))
            }
          />
        ))}
        <Toggle
          label="당일 저녁 · 18:00"
          description="아직 안 갚았을 때만"
          value={settings.evening}
          onChange={(value) =>
            setSettings((s) => ({
              ...s,
              evening: value,
            }))
          }
        />
      </Card>
      <Card>
        <Toggle
          label="잔액 부족 미리 알림"
          description="잔액 조회 API는 연동 전이에요. 설정 선택만 저장해요."
          value={settings.balance}
          onChange={(value) =>
            setSettings((s) => ({
              ...s,
              balance: value,
            }))
          }
        />
      </Card>
      <Card title="내 월급날">
        {[
          ["25", "매월 25일"],
          ["10", "매월 10일"],
          ["last", "매월 말일"],
        ].map(([value, label]) => (
          <Choice
            key={value}
            label={label}
            selected={settings.payday === value}
            onPress={() =>
              setSettings((s) => ({
                ...s,
                payday: value,
              }))
            }
          />
        ))}
      </Card>
      <Note>
        대여자에게는 상환 결과만 보여요. 이 설정으로 실제 푸시나 자동이체를
        예약하지는 않아요.
      </Note>
      <Button
        title="저장"
        onPress={() =>
          event("reminderSettings", {
            settings,
          })
        }
      />
    </Page>
  );
}
export function OverdueScreen({ contract: c, role, open, event, back }) {
  const today = calendarDay(),
    late = ledger(currentTerms(c), c.payments).filter(
      (r) => r.remaining > 0 && r.due < today,
    ),
    amount = late.reduce((n, r) => n + r.remaining, 0),
    days = late.length
      ? Math.floor((Date.parse(today) - Date.parse(late[0].due)) / 86400000)
      : 0;
  return (
    <Page title={people[opposite(role)] + "님과의 약속"} back={back}>
      <Badge warning>연체 {days}일</Badge>
      <Title description={"남은 돈 전체 " + won(balance(c))}>
        {late.length
          ? `${late[0].number}회차 ${won(amount)}이\n아직 확인되지 않았어요`
          : "기한이 지난 회차가 없어요"}
      </Title>
      <Card title="회차별 현황">
        <Schedule rows={ledger(currentTerms(c), c.payments)} />
      </Card>
      <Card title="요청 기록">
        {c.events
          .filter((e) => e.type === "reminder" || e.text.includes("상환 요청"))
          .map((e, i) => (
            <Txt key={i} style={s.small}>
              {new Date(e.at).toLocaleString("ko-KR")} · {e.text}
            </Txt>
          ))}
        {!c.lastReminder && (
          <Txt style={s.small}>아직 직접 보낸 상환 요청이 없어요.</Txt>
        )}
      </Card>
      {role === "lender" ? (
        <>
          <Button
            title="상환 요청 보내기"
            disabled={!late.length || c.lastReminder === today}
            onPress={() => event("reminder")}
          />
          <Button
            secondary
            title="따로 받았으면 회차에 넣기"
            onPress={() => open("deposits")}
          />
          <Link onPress={() => open("evidence")}>증거 묶음 초안 확인</Link>
        </>
      ) : (
        <>
          <Button title="지금 갚기" onPress={() => open("payment")} />
          <Button
            secondary
            title="일정 바꾸기 제안"
            onPress={() => open("changeEditor")}
          />
        </>
      )}
      <Note>
        시안의 지연손해금 예시는 실제 청구액에 더하지 않았어요. 정산·알림 발송은
        확정 API에 맞춰 연동해요.
      </Note>
    </Page>
  );
}
export function EvidenceScreen({ contract: c, event, back, open }) {
  const [answer, setAnswer] = useState(c.evidence?.deposit ?? "모르겠어요"),
    [address, setAddress] = useState(c.evidence?.address ?? ""),
    [draft, setDraft] = useState(false),
    [saved, setSaved] = useState(false),
    late = ledger(currentTerms(c), c.payments).filter(
      (r) => r.remaining && r.due < calendarDay(),
    ),
    claim = late.reduce((n, r) => n + r.remaining, 0);
  return (
    <Page title="증거 묶음" back={back} subtitle="빌려준 사람 · 박도윤의 화면">
      <Badge>Agent 증거 정리 · 로컬 초안</Badge>
      <Title description="현재 약속의 원문·서명·원장·변경 기록에서 자료를 모아 보여줘요.">
        {people.borrower}님 건,{"\n"}증거를 한곳에 정리해요
      </Title>
      <Card title="확인할 기록">
        <Row label="대여 합의" value={c.proposals.length + "건의 협상 기록"} />
        <Row label="양쪽 서명" value={c.versions.length + "개 문서 버전"} />
        <Row
          label="금전 교부"
          value={c.fundedAt ? "모의 송금 기록 있음" : "기록 없음"}
        />
        <Row label="변경 협의" value={c.changeHistory.length + "건"} />
        <Link onPress={() => open("versions")}>서명 원본 보기</Link>
      </Card>
      <Card title="확인 1 · 미반영 입금">
        <Txt style={s.description}>
          현재 회차에 넣지 않은 입금이{" "}
          {c.deposits.filter((d) => !d.used).length}건 있어요. 상대가 보낸
          상환인지 확인했나요?
        </Txt>
        {["맞아요", "아니에요", "모르겠어요"].map((v) => (
          <Choice
            key={v}
            label={v}
            selected={answer === v}
            onPress={() => setAnswer(v)}
          />
        ))}
        <Link onPress={() => open("deposits")}>입금 내역에서 직접 확인</Link>
        <Txt style={s.small}>
          이 답변은 원장을 바꾸지 않아요. 실제 반영은 입금 확인 화면에서 해
          주세요.
        </Txt>
      </Card>
      <Card title="확인 2 · 상대방 주소">
        <Field
          label="초안에 적을 주소 (선택)"
          value={address}
          onChangeText={setAddress}
        />
        <Txt style={s.small}>
          입력은 현재 앱의 메모리에만 저장해요. 외부로 전송하지 않아요.
        </Txt>
      </Card>
      <Card title="기한이 지난 미납 원금">
        <Txt style={s.money}>{won(claim)}</Txt>
        <Txt style={s.small}>
          미래 회차 {won(balance(c) - claim)}은 이 금액에 포함하지 않았어요.
          지연손해금·청구 가능 여부는 확정하지 않아요.
        </Txt>
      </Card>
      <Button
        title="답 반영하고 묶음 만들기"
        onPress={() => {
          if (
            event(
              "evidence",
              {
                answers: {
                  deposit: answer,
                  address,
                },
              },
              false,
            )
          ) {
            setSaved(true);
            setDraft(true);
          }
        }}
      />
      {saved && <Note>이번 약속의 답변을 저장했어요.</Note>}
      <Link onPress={() => setDraft(!draft)}>
        내용증명 초안 {draft ? "닫기" : "보기"}
      </Link>
      {draft && (
        <Card title="내용증명 참고 초안">
          <Txt>
            수신인 {people.borrower}
            {"\n"}주소: {address || "[주소 확인 필요]"}
            {"\n\n"}문서번호 {c.identifier}에 관한 상환 기록을 확인해 주세요.
            기한이 지난 미납 원금은 {won(claim)}으로 표시됩니다. 이미 갚은
            내역이 있다면 함께 확인해 주세요.
          </Txt>
          <Txt style={s.small}>
            현재 데이터로 채운 시연 템플릿입니다. 실제 발송·법률 판단·AI 호출은
            수행하지 않아요.
          </Txt>
        </Card>
      )}
    </Page>
  );
}
export function VersionsScreen({ contract: c, back }) {
  const [expanded, setExpanded] = useState(null);
  return (
    <Page title="문서와 변경 이력" back={back}>
      <Txt style={s.small}>
        {c.identifier} · 확정 원문은 변경하지 않고 새 버전으로 남겨요.
      </Txt>
      {!c.versions.length && (
        <Empty
          title="아직 확정된 원문이 없어요"
          description="두 사람이 서명하면 원문과 서명을 함께 보관해요."
        />
      )}
      {[...c.versions].reverse().map((v) => (
        <Card
          key={v.number}
          title={
            "v" +
            v.number +
            " · " +
            (v.number === 1 ? "서명한 원본" : "변경 합의서")
          }
        >
          <Row label="약정 원금" value={won(v.terms.amount)} />
          <Row label="문서번호" value={c.identifier} />
          <Schedule rows={v.terms.schedule} />
          <Button
            secondary
            small
            title={
              expanded === v.number
                ? "원문 닫기"
                : "v" + v.number + " 서명 원문 열기"
            }
            onPress={() => setExpanded(expanded === v.number ? null : v.number)}
          />
          {expanded === v.number && (
            <>
              {v.document?.clauses.map(([title, text]) => (
                <View
                  key={title}
                  style={{
                    gap: 5,
                  }}
                >
                  <Txt style={s.strong}>{title}</Txt>
                  <Txt style={s.description}>{text}</Txt>
                </View>
              ))}
              {["lender", "borrower"].map((r) => (
                <View
                  key={r}
                  style={{
                    gap: 7,
                  }}
                >
                  <Txt style={s.strong}>{people[r]} 서명</Txt>
                  {v.marks?.[r]?.length ? (
                    <Svg
                      width="100%"
                      height={100}
                      viewBox={
                        "0 0 " + (v.markBoxes?.[r] ?? [320, 140]).join(" ")
                      }
                    >
                      {v.marks[r].map((d, i) => (
                        <Path
                          key={i}
                          d={d}
                          fill="none"
                          stroke="#101B38"
                          strokeWidth={2.6}
                        />
                      ))}
                    </Svg>
                  ) : (
                    <Txt style={s.small}>시연 샘플 기록 · 서명 이미지 없음</Txt>
                  )}
                  <Txt style={s.small}>
                    {v.signed[r]
                      ? new Date(v.signed[r]).toLocaleString("ko-KR")
                      : "서명 대기"}
                  </Txt>
                </View>
              ))}
            </>
          )}
        </Card>
      ))}
    </Page>
  );
}
export function AuditScreen({ contract: c, back }) {
  return (
    <Page title="진행 기록" back={back}>
      <Title description="한 문서번호에 연결된 실제 시연 이벤트를 보여줘요.">
        누가, 언제,{"\n"}무엇을 했는지
      </Title>
      <Card>
        <Row label="문서번호" value={c.identifier} />
        <Row
          label="체결 방식"
          value={c.channel === "remote" ? "원격 초대" : "대면 QR"}
        />
        <Row label="적용 버전" value={"v" + c.versions.length} />
      </Card>
      <View style={s.timeline}>
        {c.events.map((e, i) => (
          <View key={i} style={s.timelineItem}>
            <Txt style={s.small}>
              {new Date(e.at).toLocaleString("ko-KR")} · {people[e.role]}
            </Txt>
            <Txt style={s.strong}>{e.text}</Txt>
          </View>
        ))}
      </View>
      <Note>
        실제 IP·기기·본인인증·해시·서버 시점확인 값은 연동 후 제공해요. 시연에서
        임의로 생성하지 않아요.
      </Note>
    </Page>
  );
}
export function ProfileScreen({ role, profile, open, back }) {
  return (
    <Page title="내 정보" back={back}>
      <Title>{people[role]}님</Title>
      <Card title="본인·계좌 정보">
        <Row label="이름" value={people[role]} />
        <Row
          label="휴대폰"
          value={role === "lender" ? "010-****-2280" : "010-****-5531"}
        />
        <Row
          label="연결 계좌"
          value={
            profile.ready
              ? profile.account
                ? "모의저축은행 3021-**-77104"
                : accounts[role]
              : "연결 전"
          }
        />
        <Badge>
          {profile.ready ? "시연 본인확인 완료" : "시연 본인확인 전"}
        </Badge>
      </Card>
      <Link onPress={() => open("history")}>내 약속과 서명 기록</Link>
      <Link onPress={() => open("onboarding")}>
        본인확인·계좌 연결 다시 보기
      </Link>
      <Link onPress={() => open("demo")}>시연 설정</Link>
    </Page>
  );
}
