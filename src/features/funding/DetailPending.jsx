import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './DetailPending.styles';

export default function DetailPending({ ui }) {
  return (
    <Frame width={390} height={885} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box2, ui.styles["189:2"]]} />
      <View pointerEvents="none" style={[styles.box3, ui.styles["189:3"]]} />
      <Text numberOfLines={1} style={[styles.text4, ui.styles["189:4"]]}>{ui.labels["189:4"] ?? "‹"}</Text>
      <Text numberOfLines={1} style={[styles.text5, ui.styles["189:5"]]}>{ui.labels["189:5"] ?? "이하린님과의 약속"}</Text>
      <Text numberOfLines={1} style={[styles.text7, ui.styles["189:7"]]}>{ui.labels["189:7"] ?? "⋯"}</Text>
      <View pointerEvents="none" style={[styles.box9, ui.styles["189:9"]]} />
      <View pointerEvents="none" style={[styles.box11, ui.styles["189:11"]]} />
      <Text numberOfLines={1} style={[styles.text12, ui.styles["189:12"]]}>{ui.labels["189:12"] ?? "송금 대기"}</Text>
      <Text numberOfLines={1} style={[styles.text14, ui.styles["189:14"]]}>{ui.labels["189:14"] ?? "빌려주는 사람 · 박도윤"}</Text>
      <Text numberOfLines={1} style={[styles.text15, ui.styles["189:15"]]}>{ui.labels["189:15"] ?? "300,000원 보낼 차례예요"}</Text>
      <Text numberOfLines={1} style={[styles.text16, ui.styles["189:16"]]}>{ui.labels["189:16"] ?? "2026.11.19 서명 완료 · 무이자 · 3회 나눠 받기"}</Text>
      <View pointerEvents="none" style={[styles.box17, ui.styles["189:17"]]} />
      <Text numberOfLines={1} style={[styles.text19, ui.styles["189:19"]]}>{ui.labels["189:19"] ?? "지금 할 일"}</Text>
      <Text numberOfLines={1} style={[styles.text21, ui.styles["189:21"]]}>{ui.labels["189:21"] ?? "아직 돈을 보내지 않았어요"}</Text>
      <Text style={[styles.text22, ui.styles["189:22"]]}>{ui.labels["189:22"] ?? "앱으로 보내면 대여 실행이 바로 기록돼요. 다른 방법으로 이미 보냈다면 직접 체크해 주세요."}</Text>
      <View pointerEvents="none" style={[styles.box24, ui.styles["189:24"]]} />
      <Text numberOfLines={1} style={[styles.text25, ui.styles["189:25"]]}>{ui.labels["189:25"] ?? "다른 방법으로 보냈어요"}</Text>
      <View pointerEvents="none" style={[styles.box26, ui.styles["189:26"]]} />
      <Text numberOfLines={1} style={[styles.text28, ui.styles["189:28"]]}>{ui.labels["189:28"] ?? "상환 원장"}</Text>
      <Text numberOfLines={1} style={[styles.text30, ui.styles["189:30"]]}>{ui.labels["189:30"] ?? "영수증 ›"}</Text>
      <Text numberOfLines={1} style={[styles.text33, ui.styles["189:33"]]}>{ui.labels["189:33"] ?? "대여 실행"}</Text>
      <Text numberOfLines={1} style={[styles.text34, ui.styles["189:34"]]}>{ui.labels["189:34"] ?? "300,000원 · 서명 후 송금"}</Text>
      <View pointerEvents="none" style={[styles.box36, ui.styles["189:36"]]} />
      <Text numberOfLines={1} style={[styles.text37, ui.styles["189:37"]]}>{ui.labels["189:37"] ?? "예정"}</Text>
      <Text numberOfLines={1} style={[styles.text40, ui.styles["189:40"]]}>{ui.labels["189:40"] ?? "1회차"}</Text>
      <Text numberOfLines={1} style={[styles.text41, ui.styles["189:41"]]}>{ui.labels["189:41"] ?? "2027.01.31 · 100,000원"}</Text>
      <View pointerEvents="none" style={[styles.box43, ui.styles["189:43"]]} />
      <Text numberOfLines={1} style={[styles.text44, ui.styles["189:44"]]}>{ui.labels["189:44"] ?? "예정"}</Text>
      <Text numberOfLines={1} style={[styles.text47, ui.styles["189:47"]]}>{ui.labels["189:47"] ?? "2회차"}</Text>
      <Text numberOfLines={1} style={[styles.text48, ui.styles["189:48"]]}>{ui.labels["189:48"] ?? "2027.02.28 · 100,000원"}</Text>
      <View pointerEvents="none" style={[styles.box50, ui.styles["189:50"]]} />
      <Text numberOfLines={1} style={[styles.text51, ui.styles["189:51"]]}>{ui.labels["189:51"] ?? "예정"}</Text>
      <Text numberOfLines={1} style={[styles.text54, ui.styles["189:54"]]}>{ui.labels["189:54"] ?? "3회차"}</Text>
      <Text numberOfLines={1} style={[styles.text55, ui.styles["189:55"]]}>{ui.labels["189:55"] ?? "2027.03.31 · 100,000원"}</Text>
      <View pointerEvents="none" style={[styles.box57, ui.styles["189:57"]]} />
      <Text numberOfLines={1} style={[styles.text58, ui.styles["189:58"]]}>{ui.labels["189:58"] ?? "예정"}</Text>
      <View pointerEvents="none" style={[styles.box59, ui.styles["189:59"]]} />
      <Text numberOfLines={1} style={[styles.text61, ui.styles["189:61"]]}>{ui.labels["189:61"] ?? "약정서 원문"}</Text>
      <Text numberOfLines={1} style={[styles.text63, ui.styles["189:63"]]}>{ui.labels["189:63"] ?? "진행 기록"}</Text>
      <Text numberOfLines={1} style={[styles.text65, ui.styles["189:65"]]}>{ui.labels["189:65"] ?? "증거 묶음"}</Text>
      <View pointerEvents="none" style={[styles.box66, ui.styles["189:66"]]} />
      <View pointerEvents="none" style={[styles.box67, ui.styles["189:67"]]} />
      <Text numberOfLines={1} style={[styles.text68, ui.styles["189:68"]]}>{ui.labels["189:68"] ?? "300,000원 보내기"}</Text>
      <TouchTarget label={ui.labels["189:25"] ?? "다른 방법으로 보냈어요"} action="records" style={styles.taptext25} ui={ui} />
      <TouchTarget label={ui.labels["189:30"] ?? "영수증 ›"} action="S18" style={styles.taptext30} ui={ui} />
      <TouchTarget label={ui.labels["189:61"] ?? "약정서 원문"} action="document" style={styles.taptext61} ui={ui} />
      <TouchTarget label={ui.labels["189:63"] ?? "진행 기록"} action="records" style={styles.taptext63} ui={ui} />
      <TouchTarget label={ui.labels["189:65"] ?? "증거 묶음"} action="records" style={styles.taptext65} ui={ui} />
      <TouchTarget label={ui.labels["189:68"] ?? "300,000원 보내기"} action="transfer" style={styles.taptext68} ui={ui} />
    </Frame>
  );
}
