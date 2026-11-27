import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './ShowQr.styles';
import Graphic0 from '../../../assets/wire/42c6a.svg';
import Graphic1 from '../../../assets/wire/44c13.svg';
import Graphic2 from '../../../assets/wire/4f239.svg';
import Graphic3 from '../../../assets/wire/740d6.svg';
import Graphic4 from '../../../assets/wire/86b4b.svg';
import Graphic5 from '../../../assets/wire/8fa08.svg';
import Graphic6 from '../../../assets/wire/975f9.svg';
import Graphic7 from '../../../assets/wire/9ab6c.svg';
import Graphic8 from '../../../assets/wire/a1b6f.svg';
import Graphic9 from '../../../assets/wire/b928e.svg';
import Graphic10 from '../../../assets/wire/c125d.svg';
import Graphic11 from '../../../assets/wire/d2c64.svg';
import Graphic12 from '../../../assets/wire/ea14e.svg';

export default function ShowQr({ ui }) {
  return (
    <Frame width={390} height={844} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.art2215, ui.styles["5:2215-img"]]}><Graphic4 /></View>
      <View pointerEvents="none" style={[styles.art2217, ui.styles["5:2217-img"]]}><Graphic12 /></View>
      <Text numberOfLines={1} style={[styles.text2219, ui.styles["5:2219"]]}>{ui.labels["5:2219"] ?? "만나서 연결"}</Text>
      <View pointerEvents="none" style={[styles.art2220, ui.styles["5:2220-img"]]}><Graphic6 /></View>
      <Text numberOfLines={1} style={[styles.text2221, ui.styles["5:2221"]]}>{ui.labels["5:2221"] ?? "1 연결"}</Text>
      <View pointerEvents="none" style={[styles.art2222, ui.styles["5:2222-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text2223, ui.styles["5:2223"]]}>{ui.labels["5:2223"] ?? "2 협상"}</Text>
      <View pointerEvents="none" style={[styles.art2224, ui.styles["5:2224-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text2225, ui.styles["5:2225"]]}>{ui.labels["5:2225"] ?? "3 서명"}</Text>
      <View pointerEvents="none" style={[styles.art2226, ui.styles["5:2226-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text2227, ui.styles["5:2227"]]}>{ui.labels["5:2227"] ?? "4 송금"}</Text>
      <Text numberOfLines={1} style={[styles.text2228, ui.styles["5:2228"]]}>{ui.labels["5:2228"] ?? "빌려주는 사람 · 박도윤의 화면"}</Text>
      <Text numberOfLines={1} style={[styles.text2229, ui.styles["5:2229"]]}>{ui.labels["5:2229"] ?? "상대가 이 QR을"}</Text>
      <Text numberOfLines={1} style={[styles.text2230, ui.styles["5:2230"]]}>{ui.labels["5:2230"] ?? "카메라로 찍게 해 주세요"}</Text>
      <View pointerEvents="none" style={[styles.art2231, ui.styles["5:2231-img"]]}><Graphic2 /></View>
      <View pointerEvents="none" style={[styles.art2232, ui.styles["5:2232-img"]]}><Graphic8 /></View>
      <View pointerEvents="none" style={[styles.art2239, ui.styles["5:2239-img"]]}><Graphic11 /></View>
      <Text numberOfLines={1} style={[styles.text2242, ui.styles["5:2242"]]}>{ui.labels["5:2242"] ?? "5초마다 바뀌어요 · 일회용"}</Text>
      <View pointerEvents="none" style={[styles.art2243, ui.styles["5:2243-img"]]}><Graphic9 /></View>
      <Text numberOfLines={1} style={[styles.text2245, ui.styles["5:2245"]]}>{ui.labels["5:2245"] ?? "블루투스로 같은 번호를 보내는 중"}</Text>
      <View pointerEvents="none" style={[styles.art2246, ui.styles["5:2246-img"]]}><Graphic5 /></View>
      <View pointerEvents="none" style={[styles.art2247, ui.styles["5:2247-img"]]}><Graphic3 /></View>
      <View pointerEvents="none" style={[styles.art2248, ui.styles["5:2248-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text2250, ui.styles["5:2250"]]}>{ui.labels["5:2250"] ?? "이하린님과 연결됐어요"}</Text>
      <Text numberOfLines={1} style={[styles.text2251, ui.styles["5:2251"]]}>{ui.labels["5:2251"] ?? "QR 스캔 + 블루투스 신호 기준 통과 · 18:40:02"}</Text>
      <View pointerEvents="none" style={[styles.art2252, ui.styles["5:2252-img"]]}><Graphic10 /></View>
      <Text numberOfLines={1} style={[styles.text2255, ui.styles["5:2255"]]}>{ui.labels["5:2255"] ?? "캡처해서 보낸 QR은 이미 바뀌어 있어요. 스캔 번호·신호"}</Text>
      <Text numberOfLines={1} style={[styles.text2256, ui.styles["5:2256"]]}>{ui.labels["5:2256"] ?? "세기·시각이"}</Text>
      <Text numberOfLines={1} style={[styles.text2257, ui.styles["5:2257"]]}>{ui.labels["5:2257"] ?? "근접 확인 기록"}</Text>
      <Text numberOfLines={1} style={[styles.text2258, ui.styles["5:2258"]]}>{ui.labels["5:2258"] ?? "으로 남아요."}</Text>
      <View pointerEvents="none" style={[styles.art2259, ui.styles["5:2259-img"]]}><Graphic7 /></View>
      <Text numberOfLines={1} style={[styles.text2260, ui.styles["5:2260"]]}>{ui.labels["5:2260"] ?? "떨어져 있다면 · 링크로 보내기"}</Text>
      <TouchTarget label={ui.labels["5:2250"] ?? "이하린님과 연결됐어요"} action="connected" style={styles.taptext2250} ui={ui} />
      <TouchTarget label={ui.labels["5:2260"] ?? "떨어져 있다면 · 링크로 보내기"} action="remote" style={styles.taptext2260} ui={ui} />
    </Frame>
  );
}
