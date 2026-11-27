import { useEffect, useState } from "react";
import { View } from "react-native";
import { accounts, opposite, people } from "../../domain/workflow";
import {
  Badge,
  Button,
  Card,
  Choice,
  Field,
  Icon,
  Link,
  MockQr,
  Note,
  Page,
  Row,
  Title,
  Txt,
  s,
} from "./FlowKit";
export function Onboarding({ page, role, open, complete, back }) {
  const [consent, setConsent] = useState(false),
    [privacy, setPrivacy] = useState(false),
    [account, setAccount] = useState(0);
  return (
    <Page title={page === "onboarding" ? "시작하기" : "계좌 연결"} back={back}>
      <Title description="본인확인과 계좌 연결을 체험하는 시연 단계예요.">
        {page === "onboarding"
          ? "안전한 약속의 시작,\n나를 확인해요"
          : "내 이름의 계좌를\n연결해 주세요"}
      </Title>
      {page === "onboarding" ? (
        <>
          <Card title="본인확인 정보">
            <Row label="이름" value={people[role]} />
            <Row
              label="휴대폰"
              value={role === "lender" ? "010-****-2280" : "010-****-5531"}
            />
            <Badge>시연용 인증 정보</Badge>
          </Card>
          <Choice
            label="[필수] 서비스 이용약관 동의"
            selected={consent}
            onPress={() => setConsent(!consent)}
          />
          <Choice
            label="[필수] 개인정보 처리 동의"
            selected={privacy}
            onPress={() => setPrivacy(!privacy)}
          />
          <Button
            title="본인확인하고 계속"
            disabled={!consent || !privacy}
            onPress={() => open("account")}
          />
        </>
      ) : (
        <>
          <Card title="조회한 내 계좌">
            <Choice
              label={accounts[role]}
              description={"예금주 " + people[role] + " · 명의 일치"}
              selected={account === 0}
              onPress={() => setAccount(0)}
            />
            <Choice
              label="모의저축은행 3021-**-77104"
              description={"예금주 " + people[role] + " · 명의 일치"}
              selected={account === 1}
              onPress={() => setAccount(1)}
            />
          </Card>
          <Note>실제 은행 계좌를 조회하거나 인증 정보를 전송하지 않아요.</Note>
          <Button
            title="이 계좌로 시작하기"
            onPress={() => complete(account)}
          />
        </>
      )}
    </Page>
  );
}
export function MethodScreen({ role, switchRole, start, back }) {
  return (
    <Page title="차용증 쓰기" step={1} back={back}>
      <View style={s.buttonRow}>
        {["lender", "borrower"].map((r) => (
          <View key={r} style={s.buttonCell}>
            <Button
              title={r === "lender" ? "나는 빌려줘요" : "나는 빌려요"}
              secondary={r !== role}
              onPress={() => switchRole(r, "method")}
            />
          </View>
        ))}
      </View>
      <Title description="직접 만나거나 초대 링크로, 같은 약속을 함께 확인해요.">
        상대와 지금{"\n"}같이 있나요?
      </Title>
      <Card>
        <Icon name="doc" />
        <Link onPress={() => start("face")}>만나서 쓰기</Link>
        <Txt style={s.description}>
          QR로 상대를 연결하고 서로의 정보를 확인해요. 근접 확인 기능은 연동
          전이에요.
        </Txt>
        <Badge>대면 연결</Badge>
      </Card>
      <Card>
        <Icon name="link" />
        <Link onPress={() => start("remote")}>떨어져서 쓰기</Link>
        <Txt style={s.description}>
          한 사람에게 초대 요청을 보내고, 상대 계정이 열어 조건 협상과 서명을
          이어가요.
        </Txt>
        <Badge>원격 초대 · 24시간 시연</Badge>
      </Card>
    </Page>
  );
}
export function ConnectionScreen({
  contract: c,
  role,
  event,
  back,
  notice,
  switchRole,
}) {
  const [now, setNow] = useState(Date.now()),
    [recipient, setRecipient] = useState(people.borrower),
    [phone, setPhone] = useState("01012345531"),
    [channel, setChannel] = useState("카카오톡");
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const peer = opposite(role),
    seconds = Math.max(0, Math.floor((Date.parse(c.expiresAt) - now) / 1000)),
    expired = seconds === 0,
    remote = c.channel === "remote";
  const send = () => {
    if (
      recipient.trim() !== people.borrower ||
      phone.replace(/\D/g, "") !== "01012345531"
    ) {
      notice("시연 수신자는 이하린 · 010-1234-5531이에요.");
      return;
    }
    event("invite");
  };
  return (
    <Page
      title={remote ? "서명 요청" : "만나서 연결"}
      step={1}
      back={back}
      subtitle={
        (role === "lender" ? "빌려주는 사람" : "빌리는 사람") +
        " · " +
        people[role]
      }
    >
      {expired ? (
        <>
          <Title description="서명 전 연결을 새로 만들면 상대 확인부터 다시 진행해요.">
            연결 시간이 지났어요
          </Title>
          <Button
            title={remote ? "새 초대 만들기" : "새 QR 띄우기"}
            onPress={() => event("renew")}
          />
        </>
      ) : (
        <>
          {remote && role === "lender" && !c.invited ? (
            <>
              <Title description="요청받은 시연 계정에서만 조건을 확인할 수 있어요.">
                누구에게 보낼까요?
              </Title>
              <Field
                label="받는 사람 이름 (실명)"
                value={recipient}
                onChangeText={setRecipient}
              />
              <Field
                label="휴대폰 번호"
                value={phone}
                numeric
                onChangeText={setPhone}
              />
              <Card title="보내는 방법">
                {["카카오톡", "문자"].map((item) => (
                  <Choice
                    key={item}
                    label={item}
                    selected={channel === item}
                    onPress={() => setChannel(item)}
                  />
                ))}
              </Card>
              <Row label="링크 유효 시간" value="24시간" />
              <Button title="서명 요청 보내기" onPress={send} />
            </>
          ) : (
            <>
              <Title
                description={
                  c.peers[role]
                    ? people[peer] +
                      "님이 상대를 확인하면 조건을 작성할 수 있어요."
                    : "실명과 가린 정보를 보고 약속할 상대가 맞는지 확인해 주세요."
                }
              >
                {c.peers[role]
                  ? "상대의 확인을\n기다리고 있어요"
                  : remote
                    ? role === "borrower"
                      ? "박도윤님의\n서명 요청이 도착했어요"
                      : "초대 요청을 보냈어요"
                    : role === "lender"
                      ? "상대가 이 QR을\n찍게 해 주세요"
                      : "상대 화면의 QR을\n확인해 주세요"}
              </Title>
              {!remote && (
                <>
                  <MockQr />
                  <Txt
                    style={[
                      s.small,
                      {
                        textAlign: "center",
                      },
                    ]}
                  >
                    연결 세션 {c.identifier.slice(-6)} ·{" "}
                    {Math.floor(seconds / 60)}:
                    {String(seconds % 60).padStart(2, "0")} 남음
                  </Txt>
                </>
              )}
              {remote && (
                <Note>
                  외부 링크를 실제로 발송하지 않았어요. 상단에서 상대 계정으로
                  바꿔 초대를 확인할 수 있어요.
                </Note>
              )}
              {!remote || c.invited ? (
                <>
                  <Card title={people[peer] + "님과 연결됐어요"}>
                    <Row label="이름" value={people[peer]} />
                    <Row
                      label="생년월일"
                      value={peer === "lender" ? "1999.**.**" : "2000.**.**"}
                    />
                    <Row
                      label="휴대폰"
                      value={
                        peer === "lender" ? "010-****-2280" : "010-****-5531"
                      }
                    />
                    <Row
                      label="상대 확인"
                      value={c.peers[peer] ? "확인 완료" : "기다리는 중"}
                    />
                  </Card>
                  {!c.peers[role] && (
                    <Button
                      title="맞아요 · 상대 확인"
                      onPress={() => event("connect")}
                    />
                  )}
                  <Button
                    secondary
                    title={people[peer] + " 계정으로 확인하기"}
                    onPress={() => switchRole(peer)}
                  />
                </>
              ) : (
                <Note>박도윤 계정에서 먼저 초대를 보내 주세요.</Note>
              )}
            </>
          )}
        </>
      )}
      <Button
        secondary
        title="아니에요 · 연결 종료"
        onPress={() => event("cancel")}
      />
      <Note>
        실제 카메라·블루투스·본인인증 대신 두 계정의 연결 순서를 체험해요.
      </Note>
    </Page>
  );
}
