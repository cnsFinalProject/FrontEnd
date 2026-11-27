import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './LenderSafety.styles';
import Graphic0 from '../../../assets/wire/3e46b.svg';
import Graphic1 from '../../../assets/wire/84cc6.svg';
import Graphic2 from '../../../assets/wire/a6136.svg';

export default function LenderSafety({ ui }) {
  return (
    <Frame width={390} height={1240} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box3, ui.styles["176:3"]]} />
      <View pointerEvents="none" style={[styles.box4, ui.styles["176:4"]]} />
      <View pointerEvents="none" style={[styles.art5, ui.styles["176:5-img"]]}><Graphic2 /></View>
      <Text numberOfLines={1} style={[styles.text7, ui.styles["176:7"]]}>{ui.labels["176:7"] ?? "서명 전 확인"}</Text>
      <View pointerEvents="none" style={[styles.box8, ui.styles["176:8"]]} />
      <View pointerEvents="none" style={[styles.box9, ui.styles["176:9"]]} />
      <View pointerEvents="none" style={[styles.art10, ui.styles["176:10-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text12, ui.styles["176:12"]]}>{ui.labels["176:12"] ?? "1 연결"}</Text>
      <View pointerEvents="none" style={[styles.box13, ui.styles["176:13"]]} />
      <View pointerEvents="none" style={[styles.art14, ui.styles["176:14-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text16, ui.styles["176:16"]]}>{ui.labels["176:16"] ?? "2 협상"}</Text>
      <View pointerEvents="none" style={[styles.box17, ui.styles["176:17"]]} />
      <Text numberOfLines={1} style={[styles.text18, ui.styles["176:18"]]}>{ui.labels["176:18"] ?? "3 서명"}</Text>
      <View pointerEvents="none" style={[styles.box19, ui.styles["176:19"]]} />
      <Text numberOfLines={1} style={[styles.text20, ui.styles["176:20"]]}>{ui.labels["176:20"] ?? "4 송금"}</Text>
      <Text numberOfLines={1} style={[styles.text21, ui.styles["176:21"]]}>{ui.labels["176:21"] ?? "서명하기 전에"}</Text>
      <Text numberOfLines={1} style={[styles.text22, ui.styles["176:22"]]}>{ui.labels["176:22"] ?? "세 가지만 물어볼게요"}</Text>
      <Text numberOfLines={1} style={[styles.text23, ui.styles["176:23"]]}>{ui.labels["176:23"] ?? "이하린님과"}</Text>
      <Text numberOfLines={1} style={[styles.text24, ui.styles["176:24"]]}>{ui.labels["176:24"] ?? "처음 맺는 약속"}</Text>
      <Text numberOfLines={1} style={[styles.text25, ui.styles["176:25"]]}>{ui.labels["176:25"] ?? "이라 나와요. 답은 나만 보고, 상대에게"}</Text>
      <Text numberOfLines={1} style={[styles.text26, ui.styles["176:26"]]}>{ui.labels["176:26"] ?? "보이지 않아요."}</Text>
      <View pointerEvents="none" style={[styles.box27, ui.styles["176:27"]]} />
      <Text numberOfLines={1} style={[styles.text28, ui.styles["176:28"]]}>{ui.labels["176:28"] ?? "앱이 자동으로 확인했어요"}</Text>
      <View pointerEvents="none" style={[styles.box29, ui.styles["176:29"]]} />
      <View pointerEvents="none" style={[styles.art30, ui.styles["176:30-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text32, ui.styles["176:32"]]}>{ui.labels["176:32"] ?? "두 사람 모두 만 19세 이상"}</Text>
      <Text numberOfLines={1} style={[styles.text33, ui.styles["176:33"]]}>{ui.labels["176:33"] ?? "본인인증 생년월일 기준"}</Text>
      <View pointerEvents="none" style={[styles.box34, ui.styles["176:34"]]} />
      <View pointerEvents="none" style={[styles.art35, ui.styles["176:35-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text37, ui.styles["176:37"]]}>{ui.labels["176:37"] ?? "이자·지연손해금 연 20% 이하"}</Text>
      <Text numberOfLines={1} style={[styles.text38, ui.styles["176:38"]]}>{ui.labels["176:38"] ?? "무이자 · 늦으면 법정 연 5%"}</Text>
      <View pointerEvents="none" style={[styles.box39, ui.styles["176:39"]]} />
      <Text numberOfLines={1} style={[styles.text40, ui.styles["176:40"]]}>{ui.labels["176:40"] ?? "–"}</Text>
      <Text numberOfLines={1} style={[styles.text41, ui.styles["176:41"]]}>{ui.labels["176:41"] ?? "이자소득 신고 해당 없음"}</Text>
      <Text numberOfLines={1} style={[styles.text42, ui.styles["176:42"]]}>{ui.labels["176:42"] ?? "이자를 받으면 신고 대상일 수 있어요"}</Text>
      <View pointerEvents="none" style={[styles.box43, ui.styles["176:43"]]} />
      <View pointerEvents="none" style={[styles.box44, ui.styles["176:44"]]} />
      <Text numberOfLines={1} style={[styles.text45, ui.styles["176:45"]]}>{ui.labels["176:45"] ?? "누가 대신 빌려주라고 시켰나요?"}</Text>
      <View pointerEvents="none" style={[styles.box46, ui.styles["176:46"]]} />
      <Text numberOfLines={1} style={[styles.text47, ui.styles["176:47"]]}>{ui.labels["176:47"] ?? "네"}</Text>
      <View pointerEvents="none" style={[styles.box48, ui.styles["176:48"]]} />
      <Text numberOfLines={1} style={[styles.text49, ui.styles["176:49"]]}>{ui.labels["176:49"] ?? "아니요, 내 뜻이에요"}</Text>
      <View pointerEvents="none" style={[styles.box50, ui.styles["176:50"]]} />
      <Text numberOfLines={1} style={[styles.text51, ui.styles["176:51"]]}>{ui.labels["176:51"] ?? "빌려주면 수익을 준다는 말을 들었나요?"}</Text>
      <Text numberOfLines={1} style={[styles.text52, ui.styles["176:52"]]}>{ui.labels["176:52"] ?? "\"불려서 갚을게\", \"투자금이야\" 같은 말"}</Text>
      <View pointerEvents="none" style={[styles.box53, ui.styles["176:53"]]} />
      <Text numberOfLines={1} style={[styles.text54, ui.styles["176:54"]]}>{ui.labels["176:54"] ?? "네"}</Text>
      <View pointerEvents="none" style={[styles.box55, ui.styles["176:55"]]} />
      <Text numberOfLines={1} style={[styles.text56, ui.styles["176:56"]]}>{ui.labels["176:56"] ?? "아니요"}</Text>
      <Text numberOfLines={1} style={[styles.text57, ui.styles["176:57"]]}>{ui.labels["176:57"] ?? "대출받거나 빌린 돈으로 빌려주나요?"}</Text>
      <View pointerEvents="none" style={[styles.box58, ui.styles["176:58"]]} />
      <Text numberOfLines={1} style={[styles.text59, ui.styles["176:59"]]}>{ui.labels["176:59"] ?? "네"}</Text>
      <View pointerEvents="none" style={[styles.box60, ui.styles["176:60"]]} />
      <Text numberOfLines={1} style={[styles.text61, ui.styles["176:61"]]}>{ui.labels["176:61"] ?? "아니요"}</Text>
      <View pointerEvents="none" style={[styles.box62, ui.styles["176:62"]]} />
      <Text numberOfLines={1} style={[styles.text63, ui.styles["176:63"]]}>{ui.labels["176:63"] ?? "\"네\"라고 답하면"}</Text>
      <Text numberOfLines={1} style={[styles.text64, ui.styles["176:64"]]}>{ui.labels["176:64"] ?? "서명을 잠깐 멈추고 도움받을 곳을 알려줘요."}</Text>
      <Text numberOfLines={1} style={[styles.text65, ui.styles["176:65"]]}>{ui.labels["176:65"] ?? "경찰 112 · 금융감독원 1332 · 약속은 기록 없이 취소돼요"}</Text>
      <View pointerEvents="none" style={[styles.box66, ui.styles["176:66"]]} />
      <View pointerEvents="none" style={[styles.box67, ui.styles["176:67"]]} />
      <Text numberOfLines={1} style={[styles.text68, ui.styles["176:68"]]}>{ui.labels["176:68"] ?? "1"}</Text>
      <Text numberOfLines={1} style={[styles.text69, ui.styles["176:69"]]}>{ui.labels["176:69"] ?? "송금 전까지는"}</Text>
      <Text numberOfLines={1} style={[styles.text70, ui.styles["176:70"]]}>{ui.labels["176:70"] ?? "둘 중 누구나 취소할 수 있어요."}</Text>
      <View pointerEvents="none" style={[styles.box71, ui.styles["176:71"]]} />
      <Text numberOfLines={1} style={[styles.text72, ui.styles["176:72"]]}>{ui.labels["176:72"] ?? "2"}</Text>
      <Text numberOfLines={1} style={[styles.text73, ui.styles["176:73"]]}>{ui.labels["176:73"] ?? "300만 원 이상"}</Text>
      <Text numberOfLines={1} style={[styles.text74, ui.styles["176:74"]]}>{ui.labels["176:74"] ?? "이면 서명 후 24시간 뒤에 송금돼요."}</Text>
      <Text numberOfLines={1} style={[styles.text75, ui.styles["176:75"]]}>{ui.labels["176:75"] ?? "그 사이 취소할 수 있어요."}</Text>
      <View pointerEvents="none" style={[styles.box76, ui.styles["176:76"]]} />
      <Text numberOfLines={1} style={[styles.text77, ui.styles["176:77"]]}>{ui.labels["176:77"] ?? "3"}</Text>
      <Text numberOfLines={1} style={[styles.text78, ui.styles["176:78"]]}>{ui.labels["176:78"] ?? "이하린님 화면에도"}</Text>
      <Text numberOfLines={1} style={[styles.text79, ui.styles["176:79"]]}>{ui.labels["176:79"] ?? "빌리는 쪽 질문"}</Text>
      <Text numberOfLines={1} style={[styles.text80, ui.styles["176:80"]]}>{ui.labels["176:80"] ?? "이 따로 떠요."}</Text>
      <View pointerEvents="none" style={[styles.box81, ui.styles["176:81"]]} />
      <View pointerEvents="none" style={[styles.box82, ui.styles["176:82"]]} />
      <View pointerEvents="none" style={[styles.box83, ui.styles["176:83"]]} />
      <Text numberOfLines={1} style={[styles.text84, ui.styles["176:84"]]}>{ui.labels["176:84"] ?? "확인했어요 · 서명하기"}</Text>
      <Text numberOfLines={1} style={[styles.text85, ui.styles["176:85"]]}>{ui.labels["176:85"] ?? "약속 취소"}</Text>
      <TouchTarget label={ui.labels["176:47"] ?? "네"} action="risk" style={styles.taptext47} ui={ui} />
      <TouchTarget label={ui.labels["176:49"] ?? "아니요, 내 뜻이에요"} action="safe1" style={styles.taptext49} ui={ui} />
      <TouchTarget label={ui.labels["176:54"] ?? "네"} action="risk" style={styles.taptext54} ui={ui} />
      <TouchTarget label={ui.labels["176:56"] ?? "아니요"} action="safe2" style={styles.taptext56} ui={ui} />
      <TouchTarget label={ui.labels["176:59"] ?? "네"} action="risk" style={styles.taptext59} ui={ui} />
      <TouchTarget label={ui.labels["176:61"] ?? "아니요"} action="safe3" style={styles.taptext61} ui={ui} />
      <TouchTarget label={ui.labels["176:84"] ?? "확인했어요 · 서명하기"} action="safeNext" style={styles.taptext84} ui={ui} />
      <TouchTarget label={ui.labels["176:85"] ?? "약속 취소"} action="StopSheet" style={styles.taptext85} ui={ui} />
    </Frame>
  );
}
