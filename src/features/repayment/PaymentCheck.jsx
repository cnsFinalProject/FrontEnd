import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './PaymentCheck.styles';
import Graphic0 from '../../../assets/wire/009bc.svg';
import Graphic1 from '../../../assets/wire/2164d.svg';
import Graphic2 from '../../../assets/wire/3fbff.svg';
import Graphic3 from '../../../assets/wire/49b0a.svg';
import Graphic4 from '../../../assets/wire/74736.svg';
import Graphic5 from '../../../assets/wire/7dacc.svg';
import Graphic6 from '../../../assets/wire/7fc9c.svg';
import Graphic7 from '../../../assets/wire/95a3d.svg';
import Graphic8 from '../../../assets/wire/97a27.svg';
import Graphic9 from '../../../assets/wire/af37f.svg';
import Graphic10 from '../../../assets/wire/b983c.svg';
import Graphic11 from '../../../assets/wire/c96dc.svg';

export default function PaymentCheck({ ui }) {
  return (
    <Frame width={390} height={844} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.art1105, ui.styles["5:1105-img"]]}><Graphic3 /></View>
      <View pointerEvents="none" style={[styles.art1107, ui.styles["5:1107-img"]]}><Graphic9 /></View>
      <View pointerEvents="none" style={[styles.art1108, ui.styles["5:1108-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text1109, ui.styles["5:1109"]]}>{ui.labels["5:1109"] ?? "NOD"}</Text>
      <Text numberOfLines={1} style={[styles.text1110, ui.styles["5:1110"]]}>{ui.labels["5:1110"] ?? "이하린님이 1회차를 갚았어요"}</Text>
      <Text numberOfLines={1} style={[styles.text1111, ui.styles["5:1111"]]}>{ui.labels["5:1111"] ?? "100,000원이 들어왔어요 · 방금"}</Text>
      <Text numberOfLines={1} style={[styles.text1112, ui.styles["5:1112"]]}>{ui.labels["5:1112"] ?? "빌려주는 사람 · 박도윤의 화면"}</Text>
      <View pointerEvents="none" style={[styles.art1113, ui.styles["5:1113-img"]]}><Graphic11 /></View>
      <View pointerEvents="none" style={[styles.art1114, ui.styles["5:1114-img"]]}><Graphic0 /></View>
      <View pointerEvents="none" style={[styles.art1115, ui.styles["5:1115-img"]]}><Graphic5 /></View>
      <Text numberOfLines={1} style={[styles.text1117, ui.styles["5:1117"]]}>{ui.labels["5:1117"] ?? "1회차 100,000원 확인됐어요"}</Text>
      <Text numberOfLines={1} style={[styles.text1118, ui.styles["5:1118"]]}>{ui.labels["5:1118"] ?? "2027.01.31 14:07 · NOD 송금 · 거래번호 T-20270131-0193"}</Text>
      <View pointerEvents="none" style={[styles.art1119, ui.styles["5:1119-img"]]}><Graphic2 /></View>
      <Text numberOfLines={1} style={[styles.text1120, ui.styles["5:1120"]]}>{ui.labels["5:1120"] ?? "충당 내역"}</Text>
      <Text numberOfLines={1} style={[styles.text1121, ui.styles["5:1121"]]}>{ui.labels["5:1121"] ?? "이자"}</Text>
      <Text numberOfLines={1} style={[styles.text1122, ui.styles["5:1122"]]}>{ui.labels["5:1122"] ?? "0원"}</Text>
      <Text numberOfLines={1} style={[styles.text1123, ui.styles["5:1123"]]}>{ui.labels["5:1123"] ?? "원금"}</Text>
      <Text numberOfLines={1} style={[styles.text1124, ui.styles["5:1124"]]}>{ui.labels["5:1124"] ?? "100,000원"}</Text>
      <View pointerEvents="none" style={[styles.art1125, ui.styles["5:1125-img"]]}><Graphic4 /></View>
      <Text numberOfLines={1} style={[styles.text1126, ui.styles["5:1126"]]}>{ui.labels["5:1126"] ?? "남은 돈"}</Text>
      <Text numberOfLines={1} style={[styles.text1127, ui.styles["5:1127"]]}>{ui.labels["5:1127"] ?? "200,000원"}</Text>
      <View pointerEvents="none" style={[styles.art1128, ui.styles["5:1128-img"]]}><Graphic7 /></View>
      <Text numberOfLines={1} style={[styles.text1129, ui.styles["5:1129"]]}>{ui.labels["5:1129"] ?? "앱 밖에서 들어온 입금"}</Text>
      <Text numberOfLines={1} style={[styles.text1130, ui.styles["5:1130"]]}>{ui.labels["5:1130"] ?? "이하린 이름으로 80,000원이 따로 들어왔어요. 2회차"}</Text>
      <Text numberOfLines={1} style={[styles.text1131, ui.styles["5:1131"]]}>{ui.labels["5:1131"] ?? "상환으로 기록할까요?"}</Text>
      <Text numberOfLines={1} style={[styles.text1132, ui.styles["5:1132"]]}>{ui.labels["5:1132"] ?? "다른 은행 앱으로 보낸 돈은 거래내역 조회로 찾아요 · 2회차"}</Text>
      <Text numberOfLines={1} style={[styles.text1133, ui.styles["5:1133"]]}>{ui.labels["5:1133"] ?? "20,000원 남음"}</Text>
      <View pointerEvents="none" style={[styles.art1134, ui.styles["5:1134-img"]]}><Graphic8 /></View>
      <Text numberOfLines={1} style={[styles.text1135, ui.styles["5:1135"]]}>{ui.labels["5:1135"] ?? "다른 입금이에요"}</Text>
      <View pointerEvents="none" style={[styles.art1136, ui.styles["5:1136-img"]]}><Graphic10 /></View>
      <Text numberOfLines={1} style={[styles.text1137, ui.styles["5:1137"]]}>{ui.labels["5:1137"] ?? "2회차 상환으로 기록"}</Text>
      <View pointerEvents="none" style={[styles.art1138, ui.styles["5:1138-img"]]}><Graphic6 /></View>
      <Text numberOfLines={1} style={[styles.text1139, ui.styles["5:1139"]]}>{ui.labels["5:1139"] ?? "영수증 · 남은 일정 보기"}</Text>
      <TouchTarget label={ui.labels["5:1135"] ?? "다른 입금이에요"} action="S28" style={styles.taptext1135} ui={ui} />
      <TouchTarget label={ui.labels["5:1137"] ?? "2회차 상환으로 기록"} action="S28" style={styles.taptext1137} ui={ui} />
      <TouchTarget label={ui.labels["5:1139"] ?? "영수증 · 남은 일정 보기"} action="S18" style={styles.taptext1139} ui={ui} />
    </Frame>
  );
}
