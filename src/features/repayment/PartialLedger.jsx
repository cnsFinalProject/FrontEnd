import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './PartialLedger.styles';
import Graphic0 from '../../../assets/wire/0ea18.svg';
import Graphic1 from '../../../assets/wire/a6136.svg';
import Graphic2 from '../../../assets/wire/bc12b.svg';

export default function PartialLedger({ ui }) {
  return (
    <Frame width={390} height={900} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box2, ui.styles["246:2"]]} />
      <View pointerEvents="none" style={[styles.box3, ui.styles["246:3"]]} />
      <View pointerEvents="none" style={[styles.box4, ui.styles["246:4"]]} />
      <Text numberOfLines={1} style={[styles.text5, ui.styles["246:5"]]}>{ui.labels["246:5"] ?? "NOD"}</Text>
      <Text numberOfLines={1} style={[styles.text6, ui.styles["246:6"]]}>{ui.labels["246:6"] ?? "박도윤님이 80,000원을 2회차에 넣었어요"}</Text>
      <Text numberOfLines={1} style={[styles.text7, ui.styles["246:7"]]}>{ui.labels["246:7"] ?? "02.26 19:30 · 남은 20,000원은 앱으로 갚을 수 있어요"}</Text>
      <View pointerEvents="none" style={[styles.box8, ui.styles["246:8"]]} />
      <View pointerEvents="none" style={[styles.art9, ui.styles["246:9-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text11, ui.styles["246:11"]]}>{ui.labels["246:11"] ?? "박도윤님과의 약속"}</Text>
      <View pointerEvents="none" style={[styles.art12, ui.styles["246:12-img"]]}><Graphic0 /></View>
      <View pointerEvents="none" style={[styles.box14, ui.styles["246:14"]]} />
      <Text numberOfLines={1} style={[styles.text15, ui.styles["246:15"]]}>{ui.labels["246:15"] ?? "빌리는 사람 · 이하린의 화면 · 갚을 돈"}</Text>
      <Text numberOfLines={1} style={[styles.text16, ui.styles["246:16"]]}>{ui.labels["246:16"] ?? "120,000원 남음"}</Text>
      <View pointerEvents="none" style={[styles.box17, ui.styles["246:17"]]} />
      <View pointerEvents="none" style={[styles.box18, ui.styles["246:18"]]} />
      <Text numberOfLines={1} style={[styles.text19, ui.styles["246:19"]]}>{ui.labels["246:19"] ?? "300,000원 중 180,000원 갚음"}</Text>
      <Text numberOfLines={1} style={[styles.text20, ui.styles["246:20"]]}>{ui.labels["246:20"] ?? "무이자 · 3회"}</Text>
      <View pointerEvents="none" style={[styles.box21, ui.styles["246:21"]]} />
      <Text numberOfLines={1} style={[styles.text22, ui.styles["246:22"]]}>{ui.labels["246:22"] ?? "다음 상환"}</Text>
      <Text numberOfLines={1} style={[styles.text23, ui.styles["246:23"]]}>{ui.labels["246:23"] ?? "02.28 · 20,000원 남음"}</Text>
      <Text numberOfLines={1} style={[styles.text24, ui.styles["246:24"]]}>{ui.labels["246:24"] ?? "D-2"}</Text>
      <Text numberOfLines={1} style={[styles.text25, ui.styles["246:25"]]}>{ui.labels["246:25"] ?? "알림"}</Text>
      <View pointerEvents="none" style={[styles.box26, ui.styles["246:26"]]} />
      <View pointerEvents="none" style={[styles.art27, ui.styles["246:27-img"]]}><Graphic2 /></View>
      <View pointerEvents="none" style={[styles.box30, ui.styles["246:30"]]} />
      <Text numberOfLines={1} style={[styles.text31, ui.styles["246:31"]]}>{ui.labels["246:31"] ?? "박도윤 · 모의은행 110-***-482910"}</Text>
      <Text numberOfLines={1} style={[styles.text32, ui.styles["246:32"]]}>{ui.labels["246:32"] ?? "약정서 계좌"}</Text>
      <View pointerEvents="none" style={[styles.box33, ui.styles["246:33"]]} />
      <View pointerEvents="none" style={[styles.box34, ui.styles["246:34"]]} />
      <View pointerEvents="none" style={[styles.box35, ui.styles["246:35"]]} />
      <Text numberOfLines={1} style={[styles.text36, ui.styles["246:36"]]}>{ui.labels["246:36"] ?? "대여 실행"}</Text>
      <Text numberOfLines={1} style={[styles.text37, ui.styles["246:37"]]}>{ui.labels["246:37"] ?? "2026.11.19 18:45"}</Text>
      <Text numberOfLines={1} style={[styles.text38, ui.styles["246:38"]]}>{ui.labels["246:38"] ?? "+300,000"}</Text>
      <View pointerEvents="none" style={[styles.box39, ui.styles["246:39"]]} />
      <View pointerEvents="none" style={[styles.box40, ui.styles["246:40"]]} />
      <Text numberOfLines={1} style={[styles.text41, ui.styles["246:41"]]}>{ui.labels["246:41"] ?? "1회차"}</Text>
      <Text numberOfLines={1} style={[styles.text42, ui.styles["246:42"]]}>{ui.labels["246:42"] ?? "2027.01.31 · NOD 송금 · 영수증"}</Text>
      <View pointerEvents="none" style={[styles.box43, ui.styles["246:43"]]} />
      <Text numberOfLines={1} style={[styles.text44, ui.styles["246:44"]]}>{ui.labels["246:44"] ?? "확인됨 ›"}</Text>
      <View pointerEvents="none" style={[styles.box45, ui.styles["246:45"]]} />
      <View pointerEvents="none" style={[styles.box46, ui.styles["246:46"]]} />
      <Text numberOfLines={1} style={[styles.text47, ui.styles["246:47"]]}>{ui.labels["246:47"] ?? "2회차 · 02.28 기한"}</Text>
      <Text numberOfLines={1} style={[styles.text48, ui.styles["246:48"]]}>{ui.labels["246:48"] ?? "02.26 입금 80,000원 · 박도윤님이 넣음 ·"}</Text>
      <Text numberOfLines={1} style={[styles.text49, ui.styles["246:49"]]}>{ui.labels["246:49"] ?? "20,000원 남음"}</Text>
      <View pointerEvents="none" style={[styles.box50, ui.styles["246:50"]]} />
      <Text numberOfLines={1} style={[styles.text51, ui.styles["246:51"]]}>{ui.labels["246:51"] ?? "일부 납"}</Text>
      <Text numberOfLines={1} style={[styles.text52, ui.styles["246:52"]]}>{ui.labels["246:52"] ?? "부"}</Text>
      <View pointerEvents="none" style={[styles.box53, ui.styles["246:53"]]} />
      <Text numberOfLines={1} style={[styles.text54, ui.styles["246:54"]]}>{ui.labels["246:54"] ?? "3회차"}</Text>
      <Text numberOfLines={1} style={[styles.text55, ui.styles["246:55"]]}>{ui.labels["246:55"] ?? "2027.03.31 · 100,000원"}</Text>
      <View pointerEvents="none" style={[styles.box56, ui.styles["246:56"]]} />
      <Text numberOfLines={1} style={[styles.text57, ui.styles["246:57"]]}>{ui.labels["246:57"] ?? "예정"}</Text>
      <View pointerEvents="none" style={[styles.box58, ui.styles["246:58"]]} />
      <Text numberOfLines={1} style={[styles.text59, ui.styles["246:59"]]}>{ui.labels["246:59"] ?? "약정서"}</Text>
      <View pointerEvents="none" style={[styles.box60, ui.styles["246:60"]]} />
      <Text numberOfLines={1} style={[styles.text61, ui.styles["246:61"]]}>{ui.labels["246:61"] ?? "변경 요청"}</Text>
      <View pointerEvents="none" style={[styles.box62, ui.styles["246:62"]]} />
      <Text numberOfLines={1} style={[styles.text63, ui.styles["246:63"]]}>{ui.labels["246:63"] ?? "증거 기록"}</Text>
      <View pointerEvents="none" style={[styles.box64, ui.styles["246:64"]]} />
      <Text numberOfLines={1} style={[styles.text65, ui.styles["246:65"]]}>{ui.labels["246:65"] ?? "2회차 남은 20,000원 갚기"}</Text>
      <TouchTarget label={ui.labels["246:25"] ?? "알림"} action="S20" style={styles.taptext25} ui={ui} />
      <TouchTarget label={ui.labels["246:44"] ?? "확인됨 ›"} action="S18" style={styles.taptext44} ui={ui} />
      <TouchTarget label={ui.labels["246:59"] ?? "약정서"} action="document" style={styles.taptext59} ui={ui} />
      <TouchTarget label={ui.labels["246:61"] ?? "변경 요청"} action="S22" style={styles.taptext61} ui={ui} />
      <TouchTarget label={ui.labels["246:63"] ?? "증거 기록"} action="records" style={styles.taptext63} ui={ui} />
      <TouchTarget label={ui.labels["246:65"] ?? "2회차 남은 20,000원 갚기"} action="S29" style={styles.taptext65} ui={ui} />
    </Frame>
  );
}
