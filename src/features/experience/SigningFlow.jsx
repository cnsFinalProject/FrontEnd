import { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import {
  currentTerms,
  opposite,
  people,
  originalDocument,
} from "../../domain/workflow";
import { colors } from "../../ui/colors";
import {
  Badge,
  Button,
  Card,
  Choice,
  Icon,
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
export default function SigningFlow({
  contract: c,
  role,
  page,
  open,
  event,
  back,
  switchRole,
  read,
  markRead,
  setScrollEnabled,
  notice,
}) {
  const change = c.change?.stage === "signing",
    target = change ? c.change : c,
    terms = change ? c.change.terms : currentTerms(c),
    doc =
      target.draftDocument ??
      c.versions.at(-1)?.document ??
      originalDocument(terms),
    signed = target.signed;
  const [answers, setAnswers] = useState({}),
    [bottom, setBottom] = useState(false),
    [strokes, setStrokes] = useState([]),
    [accepted, setAccepted] = useState(false),
    [markBox, setMarkBox] = useState([320, 140]);
  const sign = () => {
    if (!read) {
      notice("원문을 끝까지 확인해 주세요.");
      return;
    }
    if (!accepted) {
      notice("같은 원문에 서명하는 데 동의해 주세요.");
      return;
    }
    event("sign", {
      strokes,
      markBox,
      termsVersion: c.termsVersion,
    });
  };
  if (page === "safety") {
    const questions =
      role === "lender"
        ? [
            "누가 대신 빌려주라고 시켰나요?",
            "빌려주면 수익을 준다는 말을 들었나요?",
            "대출받거나 빌린 돈으로 빌려주나요?",
          ]
        : [
            "누가 대신 빌리라고 시켰나요?",
            "받은 돈을 다른 사람에게 보내라는 말을 들었나요?",
            "이 일정대로 갚을 수 있나요?",
          ];
    return (
      <Page title="서명 전 확인" step={3} back={back}>
        <Title description="답은 상대 계정에 보이지 않아요. 조건과 상황을 다시 확인해 주세요.">
          서명하기 전에{"\n"}세 가지만 물어볼게요
        </Title>
        <Card title="합의한 조건">
          <Row label="원금" value={won(terms.amount)} />
          <Row label="상환" value={terms.count + "회 · 무이자"} />
          <Row label="첫 상환일" value={terms.due} />
        </Card>
        {questions.map((q, i) => (
          <Card key={q} title={q}>
            <Choice
              label={
                role === "borrower" && i === 2
                  ? "네, 갚을 수 있어요"
                  : "아니요, 내 뜻이에요"
              }
              selected={answers[i] === true}
              onPress={() =>
                setAnswers((a) => ({
                  ...a,
                  [i]: true,
                }))
              }
            />
            <Choice
              label={
                role === "borrower" && i === 2
                  ? "일정을 다시 정하고 싶어요"
                  : "네 · 잠깐 멈출게요"
              }
              selected={answers[i] === false}
              onPress={() =>
                setAnswers((a) => ({
                  ...a,
                  [i]: false,
                }))
              }
            />
          </Card>
        ))}
        {Object.values(answers).some((a) => a === false) && (
          <Note warning>
            진행을 잠시 멈추고 조건이나 상황을 다시 확인해 주세요. 상대에게 답변
            내용은 공개하지 않아요.
          </Note>
        )}
        <Button
          title="확인했어요 · 차용증 확인"
          disabled={
            Object.keys(answers).length !== 3 ||
            Object.values(answers).some((a) => !a)
          }
          onPress={() => open("reviewDocument")}
        />
        <Button
          secondary
          title="다시 협상하기"
          onPress={() => open("editor")}
        />
        <Link onPress={() => open("stop")}>약속 취소</Link>
      </Page>
    );
  }
  if (page === "reviewDocument")
    return (
      <Page
        title={change ? "변경 합의서 확인" : "차용증 확인·서명"}
        step={3}
        back={back}
      >
        <Title description="두 계정에서 같은 조건·문서번호를 확인해요. 각자 원문을 읽고 서명해 주세요.">
          협상으로 합의한 조건
        </Title>
        <Card title="금전 차용 약정서 (초안)">
          <Txt style={s.money}>{won(terms.amount)}</Txt>
          <Row label="빌려주는 사람" value={people.lender} />
          <Row label="빌리는 사람" value={people.borrower} />
          <Row label="이자" value="없음 · 연 0%" />
          <Row
            label="갚는 방식"
            value={terms.count === 1 ? "한 번에 갚기" : terms.count + "회 분할"}
          />
          <Row
            label="체결 방식"
            value={c.channel === "remote" ? "원격 초대 시연" : "대면 QR 시연"}
          />
          <Schedule rows={terms.schedule} />
        </Card>
        <Card title="두 사람의 서명">
          {["lender", "borrower"].map((r) => (
            <Row
              key={r}
              label={people[r] + (r === role ? " (나)" : "")}
              value={signed[r] ? "서명 완료" : "서명 대기"}
            />
          ))}
        </Card>
        <Button title="원문 읽고 서명하기" onPress={() => open("original")} />
        {!change && <Link onPress={() => open("editor")}>다시 협상하기</Link>}
      </Page>
    );
  if (page === "original")
    return (
      <Page title="차용증 원문" back={back}>
        <Badge>① 원문 읽기 · v{c.versions.length + 1}</Badge>
        <Txt style={s.small}>
          {c.identifier} · 조건 버전 {c.termsVersion}
        </Txt>
        <ScrollView
          nestedScrollEnabled
          style={{
            height: 370,
            borderRadius: 14,
            borderWidth: 1,
            borderColor: colors.line,
            backgroundColor: colors.surface,
          }}
          contentContainerStyle={{
            padding: 18,
            gap: 18,
          }}
          onScroll={(e) => {
            const { layoutMeasurement, contentOffset, contentSize } =
              e.nativeEvent;
            if (
              layoutMeasurement.height + contentOffset.y >=
              contentSize.height - 20
            )
              setBottom(true);
          }}
          scrollEventThrottle={32}
        >
          <Title>차 용 증</Title>
          <Txt style={s.description}>금전소비대차 약정 · 로컬 시연 원문</Txt>
          {doc.clauses.map(([title, text]) => (
            <View
              key={title}
              style={{
                gap: 6,
              }}
            >
              <Txt style={s.strong}>{title}</Txt>
              <Txt style={s.description}>{text}</Txt>
            </View>
          ))}
          <Schedule rows={doc.terms.schedule} />
          <Note>
            실제 본인인증·전자서명·서버 PDF·해시 검증은 연동 전입니다.
          </Note>
          <Txt style={s.small}>원문 끝 · {c.identifier}</Txt>
        </ScrollView>
        <Txt style={s.small}>원문 영역의 끝까지 내려야 다음 버튼이 켜져요.</Txt>
        <Button
          title="끝까지 읽었어요 · 서명하기"
          disabled={!bottom}
          onPress={() => {
            markRead();
            open("signature");
          }}
        />
        {!change && (
          <Link onPress={() => open("editor")}>
            고칠 곳이 있어요 · 다시 협상
          </Link>
        )}
      </Page>
    );
  if (page === "signature")
    return (
      <Page title="손글씨 서명" back={back}>
        <Badge>② 서명 · 시연용</Badge>
        <Title description="방금 읽은 동일한 원문 버전에 직접 서명해 주세요.">
          {people[role]}님의 서명
        </Title>
        <Card>
          <Row label="문서번호" value={c.identifier} />
          <Row
            label="원문"
            value={"v" + (c.versions.length + 1) + " · " + won(terms.amount)}
          />
          <View
            testID="signature-pad"
            accessibilityLabel="손글씨 서명 칸"
            style={{
              height: 160,
              backgroundColor: colors.cream,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: colors.line,
              touchAction: "none",
            }}
            onLayout={(e) =>
              setMarkBox([
                e.nativeEvent.layout.width,
                e.nativeEvent.layout.height,
              ])
            }
            onStartShouldSetResponder={() => true}
            onMoveShouldSetResponder={() => true}
            onResponderGrant={(e) => {
              setScrollEnabled(false);
              setStrokes((old) => [
                ...old,
                `M ${Math.round(e.nativeEvent.locationX)} ${Math.round(e.nativeEvent.locationY)}`,
              ]);
            }}
            onResponderMove={(e) => {
              const x = Math.round(e.nativeEvent.locationX),
                y = Math.round(e.nativeEvent.locationY);
              setStrokes((old) =>
                old.length
                  ? [...old.slice(0, -1), old.at(-1) + ` L ${x} ${y}`]
                  : old,
              );
            }}
            onResponderRelease={() => setScrollEnabled(true)}
            onResponderTerminate={() => setScrollEnabled(true)}
          >
            <View
              pointerEvents="none"
              style={{
                position: "absolute",
                inset: 0,
              }}
            >
              <Svg width="100%" height="100%">
                {strokes.map((d, i) => (
                  <Path
                    key={i}
                    d={d}
                    stroke={colors.ink}
                    strokeWidth={2.6}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ))}
              </Svg>
            </View>
          </View>
          <Button
            secondary
            small
            title="다시 쓰기"
            onPress={() => setStrokes([])}
          />
          <Choice
            label="이 원문을 읽고 서명에 동의해요"
            selected={accepted}
            onPress={() => setAccepted(!accepted)}
          />
        </Card>
        <Note>
          본인 재인증은 연동 전이에요. 이 버튼은 실제 인증서 서명이 아닌 로컬
          모의 서명을 기록해요.
        </Note>
        <Button title="모의 서명 완료" onPress={sign} />
      </Page>
    );
  const complete = signed.lender && signed.borrower;
  return (
    <Page title="체결 증명" back={back}>
      <View style={s.bigCheck}>
        <Icon
          name={complete ? "check" : "clock"}
          size={30}
          color={colors.action}
        />
      </View>
      <Title
        description={
          complete
            ? "동일 원문에 두 사람의 모의 서명을 기록했어요."
            : "내 서명은 기록됐어요. 상대의 서명이 끝나야 송금 단계가 열려요."
        }
      >
        {complete
          ? "두 사람 서명이\n끝났어요"
          : "상대의 서명을\n기다리고 있어요"}
      </Title>
      <Card title="차용증">
        <Row label="문서번호" value={c.identifier} />
        <Row
          label="버전"
          value={
            complete
              ? "v" + c.versions.length
              : "v" + (c.versions.length + 1) + " 초안"
          }
        />
        <Row label="약정 금액" value={won(terms.amount)} />
        {["lender", "borrower"].map((r) => (
          <Row
            key={r}
            label={people[r]}
            value={
              signed[r]
                ? new Date(signed[r]).toLocaleTimeString("ko-KR") + " 서명"
                : "서명 대기"
            }
          />
        ))}
      </Card>
      <Card title="증명 3요소">
        <Row label="1. 대여 합의" value="조건 합의 기록" />
        <Row
          label="2. 본인 서명"
          value={complete ? "양쪽 모의 서명" : "상대 서명 대기"}
        />
        <Row
          label="3. 금전 교부"
          value={c.fundedAt ? "모의 송금 완료" : "다음 단계 송금 대기"}
        />
      </Card>
      {complete ? (
        <>
          <Button
            title={role === "lender" ? "다음 · 돈 보내기" : "다음 · 돈 받기"}
            onPress={() => open("funding")}
          />
          <Button
            secondary
            title="서명 원본과 버전 보기"
            onPress={() => open("versions")}
          />
        </>
      ) : (
        <Button
          secondary
          title={people[opposite(role)] + " 계정에서 서명하기"}
          onPress={() => switchRole(opposite(role))}
        />
      )}
      <Link onPress={() => open("audit")}>진행 기록 보기</Link>
    </Page>
  );
}
