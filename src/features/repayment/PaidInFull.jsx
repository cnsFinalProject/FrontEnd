import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './PaidInFull.styles';
import Graphic0 from '../../../assets/wire/0d487.svg';
import Graphic1 from '../../../assets/wire/25919.svg';
import Graphic2 from '../../../assets/wire/7fc9c.svg';
import Graphic3 from '../../../assets/wire/93663.svg';
import Graphic4 from '../../../assets/wire/9526a.svg';
import Graphic5 from '../../../assets/wire/f87ef.svg';

export default function PaidInFull({ ui }) {
  return (
    <Frame width={390} height={844} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.art444, ui.styles["5:444-img"]]}><Graphic5 /></View>
      <View pointerEvents="none" style={[styles.art446, ui.styles["5:446-img"]]}><Graphic4 /></View>
      <View pointerEvents="none" style={[styles.art447, ui.styles["5:447-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text449, ui.styles["5:449"]]}>{ui.labels["5:449"] ?? "모두 갚았어요"}</Text>
      <Text numberOfLines={1} style={[styles.text450, ui.styles["5:450"]]}>{ui.labels["5:450"] ?? "이하린님과의 약속 300,000원이"}</Text>
      <Text numberOfLines={1} style={[styles.text451, ui.styles["5:451"]]}>{ui.labels["5:451"] ?? "2027.03.31에 끝났어요."}</Text>
      <View pointerEvents="none" style={[styles.art452, ui.styles["5:452-img"]]}><Graphic3 /></View>
      <Text numberOfLines={1} style={[styles.text453, ui.styles["5:453"]]}>{ui.labels["5:453"] ?? "완납 확인서"}</Text>
      <Text numberOfLines={1} style={[styles.text454, ui.styles["5:454"]]}>{ui.labels["5:454"] ?? "L-20261119-0042"}</Text>
      <Text numberOfLines={1} style={[styles.text455, ui.styles["5:455"]]}>{ui.labels["5:455"] ?? "빌려준 사람"}</Text>
      <Text numberOfLines={1} style={[styles.text456, ui.styles["5:456"]]}>{ui.labels["5:456"] ?? "박도윤"}</Text>
      <Text numberOfLines={1} style={[styles.text457, ui.styles["5:457"]]}>{ui.labels["5:457"] ?? "빌린 사람"}</Text>
      <Text numberOfLines={1} style={[styles.text458, ui.styles["5:458"]]}>{ui.labels["5:458"] ?? "이하린"}</Text>
      <Text numberOfLines={1} style={[styles.text459, ui.styles["5:459"]]}>{ui.labels["5:459"] ?? "원금 · 이자"}</Text>
      <Text numberOfLines={1} style={[styles.text460, ui.styles["5:460"]]}>{ui.labels["5:460"] ?? "300,000원 · 0원"}</Text>
      <Text numberOfLines={1} style={[styles.text461, ui.styles["5:461"]]}>{ui.labels["5:461"] ?? "상환 내역"}</Text>
      <Text numberOfLines={1} style={[styles.text462, ui.styles["5:462"]]}>{ui.labels["5:462"] ?? "3회 · 모두 NOD 송금"}</Text>
      <Text numberOfLines={1} style={[styles.text463, ui.styles["5:463"]]}>{ui.labels["5:463"] ?? "기간"}</Text>
      <Text numberOfLines={1} style={[styles.text464, ui.styles["5:464"]]}>{ui.labels["5:464"] ?? "2026.11.19 ~ 2027.03.31"}</Text>
      <View pointerEvents="none" style={[styles.art465, ui.styles["5:465-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text466, ui.styles["5:466"]]}>{ui.labels["5:466"] ?? "양쪽 모두에게 같은 확인서가 발급돼요. 약속 기록은 보관"}</Text>
      <Text numberOfLines={1} style={[styles.text467, ui.styles["5:467"]]}>{ui.labels["5:467"] ?? "함에 남아요."}</Text>
      <View pointerEvents="none" style={[styles.art468, ui.styles["5:468-img"]]}><Graphic2 /></View>
      <Text numberOfLines={1} style={[styles.text469, ui.styles["5:469"]]}>{ui.labels["5:469"] ?? "완납 확인서 PDF 받기"}</Text>
      <Text numberOfLines={1} style={[styles.text470, ui.styles["5:470"]]}>{ui.labels["5:470"] ?? "홈으로"}</Text>
      <TouchTarget label={ui.labels["5:469"] ?? "완납 확인서 PDF 받기"} action="records" style={styles.taptext469} ui={ui} />
      <TouchTarget label={ui.labels["5:470"] ?? "홈으로"} action="home" style={styles.taptext470} ui={ui} />
    </Frame>
  );
}
