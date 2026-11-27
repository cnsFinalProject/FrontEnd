import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './LenderOverdue.styles';
import Graphic0 from '../../../assets/wire/a6136.svg';

export default function LenderOverdue({ ui }) {
  return (
    <Frame width={390} height={1060} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box2, ui.styles["225:2"]]} />
      <View pointerEvents="none" style={[styles.box3, ui.styles["225:3"]]} />
      <View pointerEvents="none" style={[styles.art5, ui.styles["225:5-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text7, ui.styles["225:7"]]}>{ui.labels["225:7"] ?? "이하린님과의 약속"}</Text>
      <View pointerEvents="none" style={[styles.box8, ui.styles["225:8"]]} />
      <View pointerEvents="none" style={[styles.box9, ui.styles["225:9"]]} />
      <Text numberOfLines={1} style={[styles.text10, ui.styles["225:10"]]}>{ui.labels["225:10"] ?? "연체 2일"}</Text>
      <Text numberOfLines={1} style={[styles.text11, ui.styles["225:11"]]}>{ui.labels["225:11"] ?? "빌려준 사람 · 박도윤의 화면"}</Text>
      <Text style={[styles.text12, ui.styles["225:12"]]}>{ui.labels["225:12"] ?? "이하린님 2회차 100,000원이\n아직 안 들어왔어요"}</Text>
      <Text style={[styles.text13, ui.styles["225:13"]]}>{ui.labels["225:13"] ?? "기한 2027.02.28 · 남은 돈 200,000원\n이하린님에게도 같은 알림이 갔어요"}</Text>
      <View pointerEvents="none" style={[styles.box14, ui.styles["225:14"]]} />
      <Text numberOfLines={1} style={[styles.text15, ui.styles["225:15"]]}>{ui.labels["225:15"] ?? "회차"}</Text>
      <Text numberOfLines={1} style={[styles.text16, ui.styles["225:16"]]}>{ui.labels["225:16"] ?? "1회차 · 01.31"}</Text>
      <Text numberOfLines={1} style={[styles.text17, ui.styles["225:17"]]}>{ui.labels["225:17"] ?? "100,000원 확인됨"}</Text>
      <Text numberOfLines={1} style={[styles.text18, ui.styles["225:18"]]}>{ui.labels["225:18"] ?? "2회차 · 02.28"}</Text>
      <Text numberOfLines={1} style={[styles.text19, ui.styles["225:19"]]}>{ui.labels["225:19"] ?? "100,000원 미확인"}</Text>
      <Text numberOfLines={1} style={[styles.text20, ui.styles["225:20"]]}>{ui.labels["225:20"] ?? "3회차 · 03.31"}</Text>
      <Text numberOfLines={1} style={[styles.text21, ui.styles["225:21"]]}>{ui.labels["225:21"] ?? "100,000원 예정"}</Text>
      <View pointerEvents="none" style={[styles.box22, ui.styles["225:22"]]} />
      <Text numberOfLines={1} style={[styles.text23, ui.styles["225:23"]]}>{ui.labels["225:23"] ?? "NOD가 이하린님에게 보낸 알림"}</Text>
      <Text style={[styles.text24, ui.styles["225:24"]]}>{ui.labels["225:24"] ?? "02.25 09:00 · D-3 알림\n02.27 09:00 · 내일 갚는 날\n02.28 09:00 · 오늘 갚는 날\n03.01 09:00 · 아직 확인되지 않았어요"}</Text>
      <Text style={[styles.text25, ui.styles["225:25"]]}>{ui.labels["225:25"] ?? "보낸 시각은 원장에 남아요. 소송에서 ‘안 갚음’을 보여 주는 기록이 돼요."}</Text>
      <View pointerEvents="none" style={[styles.box26, ui.styles["225:26"]]} />
      <Text numberOfLines={1} style={[styles.text27, ui.styles["225:27"]]}>{ui.labels["225:27"] ?? "약정서 특약 · 기한이익 상실"}</Text>
      <Text style={[styles.text28, ui.styles["225:28"]]}>{ui.labels["225:28"] ?? "지금은 1번 늦었어요. 3회차까지 늦으면  2번 연달아  늦은 게 되어, 남은 돈을 한 번에 달라고 할 수 있어요."}</Text>
      <View pointerEvents="none" style={[styles.box29, ui.styles["225:29"]]} />
      <Text numberOfLines={1} style={[styles.text30, ui.styles["225:30"]]}>{ui.labels["225:30"] ?? "NOD 말고 따로 받았나요?"}</Text>
      <Text numberOfLines={1} style={[styles.text31, ui.styles["225:31"]]}>{ui.labels["225:31"] ?? "내 계좌 입금 내역에서 골라 2회차에 넣어요"}</Text>
      <Text numberOfLines={1} style={[styles.text32, ui.styles["225:32"]]}>{ui.labels["225:32"] ?? "›"}</Text>
      <Text numberOfLines={1} style={[styles.text33, ui.styles["225:33"]]}>{ui.labels["225:33"] ?? "연체 7일째가 되면 Agent가 증거 묶음 초안을 준비해요.  예시 보기"}</Text>
      <View pointerEvents="none" style={[styles.box34, ui.styles["225:34"]]} />
      <View pointerEvents="none" style={[styles.box35, ui.styles["225:35"]]} />
      <View pointerEvents="none" style={[styles.box36, ui.styles["225:36"]]} />
      <Text numberOfLines={1} style={[styles.text37, ui.styles["225:37"]]}>{ui.labels["225:37"] ?? "상환 요청 보내기"}</Text>
      <View pointerEvents="none" style={[styles.box38, ui.styles["225:38"]]} />
      <Text numberOfLines={1} style={[styles.text39, ui.styles["225:39"]]}>{ui.labels["225:39"] ?? "조금 더 기다리기"}</Text>
      <TouchTarget label={ui.labels["225:30"] ?? "NOD 말고 따로 받았나요?"} action="S28" style={styles.taptext30} ui={ui} />
      <TouchTarget label={ui.labels["225:33"] ?? "연체 7일째가 되면 Agent가 증거 묶음 초안을 준비해요.  예시 보기"} action="S35" style={styles.taptext33} ui={ui} />
      <TouchTarget label={ui.labels["225:37"] ?? "상환 요청 보내기"} action="remind" style={styles.taptext37} ui={ui} />
      <TouchTarget label={ui.labels["225:39"] ?? "조금 더 기다리기"} action="portfolio" style={styles.taptext39} ui={ui} />
    </Frame>
  );
}
