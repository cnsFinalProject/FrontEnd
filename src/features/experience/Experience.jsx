import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  BackHandler,
  Image,
  Platform,
  Pressable,
  ScrollView,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { NotoSansKR_400Regular } from "@expo-google-fonts/noto-sans-kr/400Regular";
import { NotoSansKR_500Medium } from "@expo-google-fonts/noto-sans-kr/500Medium";
import { NotoSansKR_700Bold } from "@expo-google-fonts/noto-sans-kr/700Bold";
import { colors } from "../../ui/colors";
import {
  accounts,
  balance,
  currentTerms,
  demoContract,
  emptyContract,
  opposite,
  people,
  updateContract,
} from "../../domain/workflow";
import { ledger } from "../../domain/schedule";
import ScreenCatalog from "../../navigation/ScreenCatalog";
import { screens } from "../../navigation/screens";
import { previewDestination } from "../../navigation/catalog";
import HomeScreen, { HistoryScreen, InboxScreen } from "./HomeScreen";
import { ConnectionScreen, MethodScreen, Onboarding } from "./ConnectionFlow";
import NegotiationFlow, { StopScreen } from "./NegotiationFlow";
import SigningFlow from "./SigningFlow";
import {
  ContractDetail,
  DepositFlow,
  FundingFlow,
  PaymentFlow,
  ReceiptScreen,
} from "./RepaymentFlow";
import AmendmentFlow, { ChangeHistory } from "./AmendmentFlow";
import {
  AuditScreen,
  CalendarScreen,
  EvidenceScreen,
  OverdueScreen,
  ProfileScreen,
  ReminderScreen,
  VersionsScreen,
} from "./ExtraScreens";
import {
  Badge,
  Button,
  Card,
  Icon,
  Link,
  Note,
  Page,
  Title,
  Txt,
  won,
  s,
} from "./FlowKit";
const landing = (c, role) => {
  if (c.phase === "empty") return "home";
  if (c.phase === "cancelled") return "ended";
  if (c.phase === "pairing") return "connection";
  if (c.phase === "negotiation") return "negotiation";
  if (c.phase === "signing") return c.signed[role] ? "certificate" : "safety";
  if (c.phase === "signed") return "funding";
  if (c.change?.stage === "signing")
    return c.change.signed[role] ? "certificate" : "reviewDocument";
  if (c.change) return "changeReview";
  return "detail";
};
function App() {
  const { width } = useWindowDimensions(),
    [fonts, error] = useFonts({
      NotoSansKR_400Regular,
      NotoSansKR_500Medium,
      NotoSansKR_700Bold,
    });
  const [role, setRole] = useState("lender"),
    [contracts, setContracts] = useState(() => [demoContract()]),
    [selected, setSelected] = useState("BB-DEMO-REPAY"),
    [history, setHistory] = useState([
      {
        name: "home",
      },
    ]),
    [profiles, setProfiles] = useState({
      lender: {
        ready: true,
        account: 0,
      },
      borrower: {
        ready: true,
        account: 0,
      },
    }),
    [notice, setNotice] = useState(""),
    [scrollEnabled, setScrollEnabled] = useState(true),
    [reads, setReads] = useState({}),
    [readAt, setReadAt] = useState({
      lender: "",
      borrower: "",
    });
  const state = useRef({
    contracts,
    selected,
  });
  state.current = {
    contracts,
    selected,
  };
  const route = history.at(-1),
    c =
      contracts.find((item) => item.identifier === selected) ?? emptyContract();
  const admin =
    Platform.OS === "web" &&
    typeof location !== "undefined" &&
    new URLSearchParams(location.search).get("preview") === "admin";
  const denied = {
    payment: "borrower",
    report: "borrower",
    reminders: "borrower",
    deposits: "lender",
    evidence: "lender",
  };
  function open(name, params = {}, replace = false) {
    if (denied[name] && denied[name] !== role) {
      setNotice(
        "이 기능은 " +
          (denied[name] === "lender" ? "빌려준" : "빌린") +
          " 계정에서 확인해 주세요.",
      );
      return;
    }
    setNotice("");
    setScrollEnabled(true);
    setHistory((old) =>
      replace
        ? [
            {
              name,
              params,
            },
          ]
        : [
            ...old,
            {
              name,
              params,
            },
          ],
    );
  }
  function back() {
    setNotice("");
    setScrollEnabled(true);
    if (history.length > 1) {
      setHistory((old) => old.slice(0, -1));
      return true;
    }
    if (route.name !== "home") {
      open("home", {}, true);
      return true;
    }
    return false;
  }
  useEffect(() => {
    const sub = BackHandler.addEventListener("hardwareBackPress", back);
    return () => sub.remove();
  }, [history]);
  function switchRole(next = opposite(role), destination) {
    setRole(next);
    setNotice("");
    setScrollEnabled(true);
    const current =
      state.current.contracts.find(
        (item) => item.identifier === state.current.selected,
      ) ?? emptyContract();
    setHistory([
      {
        name:
          destination ??
          (profiles[next].ready ? landing(current, next) : "onboarding"),
      },
    ]);
  }
  function select(id, destination) {
    const item = state.current.contracts.find((item) => item.identifier === id);
    if (!item) return;
    state.current.selected = id;
    setSelected(id);
    open(destination ?? landing(item, role));
  }
  function event(type, values = {}, navigate = true) {
    try {
      const current = state.current.contracts.find(
        (item) => item.identifier === state.current.selected,
      );
      if (!current) throw new Error("먼저 약속을 선택해 주세요.");
      const next = updateContract(current, role, {
        type,
        ...values,
        at: new Date().toISOString(),
      });
      const list = state.current.contracts.map((item) =>
        item.identifier === current.identifier ? next : item,
      );
      state.current = {
        ...state.current,
        contracts: list,
      };
      setContracts(list);
      if (!navigate) return true;
      const destination = {
        connect: landing(next, role),
        offer: "negotiation",
        renegotiate: "negotiation",
        agree: "safety",
        fund: "funded",
        pay: "paymentDone",
        recordDeposit: "depositDone",
        report: "reportDone",
        amend: "changeReview",
        accept: "reviewDocument",
        decline: "changeDeclined",
        cancel: "ended",
        reverseDeposit: "detail",
        reminderSettings: "detail",
      }[type];
      if (type === "sign")
        open(
          current.change && !next.change ? "changeDone" : "certificate",
          {},
          true,
        );
      else if (destination) open(destination, {}, true);
      else if (type === "reminder")
        setNotice(
          "상환 요청을 시연 기록에 남겼어요. 상대 계정의 알림함에서도 확인할 수 있어요.",
        );
      else if (type === "rejectReport") open("detail");
      return true;
    } catch (err) {
      setNotice(err.message);
      return false;
    }
  }
  function start(channel) {
    const item = updateContract(emptyContract(), role, {
      type: "start",
      channel,
      id:
        "BB-" +
        Date.now().toString(36).toUpperCase() +
        Math.random().toString(36).slice(2, 4).toUpperCase(),
      at: new Date().toISOString(),
    });
    item.accounts = Object.fromEntries(
      ["lender", "borrower"].map((r) => [
        r,
        profiles[r].account ? "모의저축은행 3021-**-77104" : accounts[r],
      ]),
    );
    const list = [item, ...state.current.contracts];
    state.current = {
      contracts: list,
      selected: item.identifier,
    };
    setContracts(list);
    setSelected(item.identifier);
    open("connection");
  }
  function loadDemo(kind) {
    const item = demoContract(kind),
      list = [
        item,
        ...state.current.contracts.filter(
          (c) => c.identifier !== item.identifier,
        ),
      ];
    state.current = {
      contracts: list,
      selected: item.identifier,
    };
    setContracts(list);
    setSelected(item.identifier);
    open("home", {}, true);
  }
  const key = c.identifier + ":" + role + ":" + c.termsVersion,
    read = Boolean(reads[key]);
  const common = {
    contract: c,
    role,
    event,
    open,
    back,
    switchRole,
    notice: setNotice,
    page: route.name,
  };
  function content() {
    if (admin) {
      const Component = screens.ADM.component;
      return (
        <Component
          ui={{
            scale: Math.min(width / 1440, 1),
            act: () => {},
            fields: {},
            updateField: () => {},
          }}
        />
      );
    }
    if (route.name === "home")
      return (
        <HomeScreen
          contracts={contracts}
          role={role}
          open={open}
          select={select}
          create={() => open(profiles[role].ready ? "method" : "onboarding")}
        />
      );
    if (route.name === "inbox")
      return (
        <InboxScreen
          contracts={contracts}
          role={role}
          select={select}
          back={back}
          readAt={readAt[role]}
          markRead={() =>
            setReadAt((old) => ({
              ...old,
              [role]: new Date().toISOString(),
            }))
          }
        />
      );
    if (route.name === "history")
      return (
        <HistoryScreen contracts={contracts} select={select} back={back} />
      );
    if (route.name === "profile")
      return (
        <ProfileScreen
          role={role}
          profile={profiles[role]}
          open={open}
          back={back}
        />
      );
    if (["onboarding", "account"].includes(route.name))
      return (
        <Onboarding
          key={route.name + role}
          {...common}
          complete={(account) => {
            setProfiles((old) => ({
              ...old,
              [role]: {
                ready: true,
                account,
              },
            }));
            open("home", {}, true);
          }}
        />
      );
    if (route.name === "method")
      return <MethodScreen {...common} start={start} />;
    if (route.name === "connection") return <ConnectionScreen {...common} />;
    if (["negotiation", "editor"].includes(route.name))
      return (
        <NegotiationFlow
          key={c.identifier + role + route.name + c.termsVersion}
          {...common}
        />
      );
    if (route.name === "stop") return <StopScreen {...common} />;
    if (
      [
        "safety",
        "reviewDocument",
        "original",
        "signature",
        "certificate",
      ].includes(route.name)
    )
      return (
        <SigningFlow
          key={role + route.name + c.termsVersion}
          {...common}
          read={read}
          markRead={() =>
            setReads((old) => ({
              ...old,
              [key]: true,
            }))
          }
          setScrollEnabled={setScrollEnabled}
        />
      );
    if (route.name === "funding") return <FundingFlow {...common} />;
    if (route.name === "detail") return <ContractDetail {...common} />;
    if (["payment", "report"].includes(route.name))
      return <PaymentFlow key={c.identifier + route.name + role} {...common} />;
    if (route.name === "deposits") return <DepositFlow {...common} />;
    if (route.name === "receipts") return <ReceiptScreen {...common} />;
    if (["changeEditor", "changeReview", "decline"].includes(route.name))
      return (
        <AmendmentFlow key={route.name + role + c.termsVersion} {...common} />
      );
    if (route.name === "changeHistory") return <ChangeHistory {...common} />;
    if (route.name === "calendar")
      return (
        <CalendarScreen
          contracts={contracts}
          role={role}
          select={select}
          open={open}
          back={back}
        />
      );
    if (route.name === "reminders") return <ReminderScreen {...common} />;
    if (route.name === "overdue") return <OverdueScreen {...common} />;
    if (route.name === "evidence") return <EvidenceScreen {...common} />;
    if (route.name === "versions") return <VersionsScreen {...common} />;
    if (route.name === "audit") return <AuditScreen {...common} />;
    if (route.name === "catalog")
      return (
        <ScreenCatalog
          role={role}
          select={(id) =>
            open("preview", {
              id,
            })
          }
        />
      );
    if (route.name === "preview") {
      const info = screens[route.params.id];
      if (!info) return null;
      const Component = info.component;
      return (
        <View>
          <Note>원본 정적 시안 · 실제 입력한 약속과 별도로 표시해요.</Note>
          <Component
            ui={{
              scale: Math.min(width / info.width, 1),
              act: (action) => {
                if (action === "back") {
                  back();
                  return;
                }
                const next = screens[action]
                  ? action
                  : previewDestination(action, role);
                if (next && screens[next])
                  open("preview", {
                    id: next,
                  });
                else
                  setNotice(
                    "정적 시안이에요. 홈에서 실제 시연 흐름을 진행해 주세요.",
                  );
              },
              labels: {},
              styles: {},
              fields: {
                recipient: people.borrower,
                phone: "01012345531",
              },
              updateField: () => {},
            }}
          />
        </View>
      );
    }
    if (route.name === "demo")
      return (
        <Page title="시연 설정" back={back}>
          <Title description="이 앱은 한 기기 안에서 두 계정이 상태를 공유하는 시연이에요. 새로고침하면 초기화돼요.">
            화면 흐름을{"\n"}차례대로 확인해요
          </Title>
          <Card title="시나리오 열기">
            <Button
              title="상환 중 · 1회차를 갚은 약속"
              onPress={() => loadDemo("repay")}
            />
            <Button
              secondary
              title="연체 · 기한이 8일 지난 약속"
              onPress={() => loadDemo("overdue")}
            />
            <Button
              secondary
              title="완납 · 모든 회차를 갚은 약속"
              onPress={() => loadDemo("closed")}
            />
          </Card>
          <Button
            secondary
            title="새 차용증 작성하기"
            onPress={() => open("method")}
          />
          <Button
            secondary
            title="본인확인부터 보기"
            onPress={() => open("onboarding")}
          />
          <Button
            secondary
            title="원본 화면 목록"
            onPress={() => open("catalog")}
          />
          <Note>
            인증·카메라·BLE·외부 발송·은행 거래·서버 보관은 실제 연동 전이에요.
          </Note>
        </Page>
      );
    const messages = {
      funded: [
        "대여 송금 완료",
        "약속한 돈을 보냈어요",
        "대여 실행 기록과 상환 원장이 두 계정에 함께 반영됐어요.",
      ],
      paymentDone: [
        "상환 완료",
        c.phase === "closed" ? "모든 회차를 갚았어요" : "상환이 반영됐어요",
        "남은 원금 " +
          won(balance(c)) +
          " · 같은 영수증을 두 계정에서 볼 수 있어요.",
      ],
      depositDone: [
        "외부 입금 반영",
        "선택한 입금을\n회차에 넣었어요",
        "미납 금액과 기한은 원장에서 확인해 주세요.",
      ],
      reportDone: [
        "알림 완료",
        "박도윤님에게 알렸어요",
        "확인 전까지 상환 금액과 기한은 그대로예요.",
      ],
      changeDone: [
        "변경 합의 완료",
        "두 사람이 서명한\n새 일정이 적용됐어요",
        "원장·캘린더는 새 일정으로 표시하고 이전 원문도 보관해요.",
      ],
      changeDeclined: [
        "변경 요청 거절",
        "기존 약속을 유지해요",
        c.lastDecline?.reason,
      ],
      ended: [
        "협상 종료",
        "이번 협상이 끝났어요",
        "이 약속은 종료 상태로 남아요. 새 약속에서 다시 시작할 수 있어요.",
      ],
    };
    const result = messages[route.name];
    if (result)
      return (
        <Page title={result[0]} back={() => open("home", {}, true)}>
          <View style={s.bigCheck}>
            <Icon name="check" color={colors.action} size={30} />
          </View>
          <Title description={result[2]}>{result[1]}</Title>
          {route.name !== "ended" && (
            <>
              <Card title="약속 기록">
                <Txt style={s.small}>
                  {c.identifier} · v{c.versions.length}
                </Txt>
                <Txt style={s.cardTitle}>남은 금액 {won(balance(c))}</Txt>
              </Card>
              <Button
                title="약속 상세로"
                onPress={() => open("detail", {}, true)}
              />
              <Button
                secondary
                title="상대 계정에서 확인"
                onPress={() => switchRole()}
              />
              {["paymentDone", "depositDone"].includes(route.name) && (
                <Link onPress={() => open("receipts")}>영수증 보기</Link>
              )}
            </>
          )}
          <Link onPress={() => open("home", {}, true)}>홈으로</Link>
        </Page>
      );
    return (
      <Page>
        <Button title="홈으로" onPress={() => open("home", {}, true)} />
      </Page>
    );
  }
  if (!fonts && !error) return <ActivityIndicator style={s.loading} />;
  return (
    <SafeAreaView style={s.root}>
      <View style={s.demoBar}>
        <Txt style={s.demoText}>두 계정 로컬 시연 · 실제 금융 거래 없음</Txt>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="시연 설정"
          onPress={() => open("demo")}
          style={s.demoButton}
        >
          <Txt style={s.demoText}>시연 설정</Txt>
        </Pressable>
      </View>
      {!admin && (
        <View style={s.accountBar}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="바로바로 홈"
            onPress={() => open("home", {}, true)}
          >
            <Image
              source={require("../../../assets/brand/baroborrow.png")}
              style={s.logo}
            />
          </Pressable>
          <Txt style={s.brand}>바로바로</Txt>
          <View style={s.account}>
            {["lender", "borrower"].map((r) => (
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={people[r] + " 계정으로 전환"}
                accessibilityState={{
                  selected: r === role,
                }}
                key={r}
                onPress={() => r !== role && switchRole(r)}
                style={[s.accountChip, r === role && s.accountSelected]}
              >
                <Txt
                  style={[s.accountText, r === role && s.accountSelectedText]}
                >
                  {people[r]}
                </Txt>
              </Pressable>
            ))}
          </View>
        </View>
      )}
      {!!notice && (
        <View accessibilityRole="alert" style={s.notice}>
          <Txt style={s.noticeText}>{notice}</Txt>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="안내 닫기"
            onPress={() => setNotice("")}
          >
            <Txt style={s.small}>닫기</Txt>
          </Pressable>
        </View>
      )}
      <ScrollView
        key={role + route.name + selected + JSON.stringify(route.params)}
        style={s.scroll}
        scrollEnabled={scrollEnabled}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={s.scrollContent}
      >
        {content()}
      </ScrollView>
      {!admin &&
        ["home", "inbox", "profile", "history", "calendar"].includes(
          route.name,
        ) && (
          <View style={s.bottomNav}>
            {[
              ["home", "home", "홈"],
              ["inbox", "bell", "알림"],
              ["profile", "user", "내 정보"],
            ].map(([name, icon, title]) => (
              <Pressable
                key={name}
                accessibilityRole="tab"
                accessibilityState={{
                  selected: route.name === name,
                }}
                onPress={() => open(name, {}, true)}
                style={s.tab}
              >
                <Icon
                  name={icon}
                  size={21}
                  color={route.name === name ? colors.action : colors.muted}
                />
                <Txt style={[s.tabText, route.name === name && s.activeTab]}>
                  {title}
                </Txt>
              </Pressable>
            ))}
          </View>
        )}
    </SafeAreaView>
  );
}
export default function Experience() {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}
