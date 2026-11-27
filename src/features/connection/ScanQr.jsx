import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './ScanQr.styles';
import Graphic0 from '../../../assets/wire/149f4.svg';
import Graphic1 from '../../../assets/wire/3b661.svg';
import Graphic2 from '../../../assets/wire/4bc42.svg';
import Graphic3 from '../../../assets/wire/50c33.svg';
import Graphic4 from '../../../assets/wire/52daa.svg';
import Graphic5 from '../../../assets/wire/5e5ef.svg';
import Graphic6 from '../../../assets/wire/7c93d.svg';
import Graphic7 from '../../../assets/wire/86016.svg';
import Graphic8 from '../../../assets/wire/94500.svg';
import Graphic9 from '../../../assets/wire/a29b5.svg';
import Graphic10 from '../../../assets/wire/b7282.svg';
import Graphic11 from '../../../assets/wire/d34b6.svg';
import Graphic12 from '../../../assets/wire/fdfe7.svg';

export default function ScanQr({ ui }) {
  return (
    <Frame width={390} height={844} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.art2182, ui.styles["5:2182-img"]]}><Graphic2 /></View>
      <View pointerEvents="none" style={[styles.art2184, ui.styles["5:2184-img"]]}><Graphic3 /></View>
      <Text numberOfLines={1} style={[styles.text2186, ui.styles["5:2186"]]}>{ui.labels["5:2186"] ?? "차용증 받기"}</Text>
      <Text numberOfLines={1} style={[styles.text2187, ui.styles["5:2187"]]}>{ui.labels["5:2187"] ?? "빌리는 사람 · 이하린의 화면"}</Text>
      <Text numberOfLines={1} style={[styles.text2188, ui.styles["5:2188"]]}>{ui.labels["5:2188"] ?? "상대 화면의 QR을"}</Text>
      <Text numberOfLines={1} style={[styles.text2189, ui.styles["5:2189"]]}>{ui.labels["5:2189"] ?? "네모 안에 맞춰 주세요"}</Text>
      <View pointerEvents="none" style={[styles.art2190, ui.styles["5:2190-img"]]}><Graphic12 /></View>
      <View pointerEvents="none" style={[styles.art2191, ui.styles["5:2191-img"]]}><Graphic7 /></View>
      <View pointerEvents="none" style={[styles.art2192, ui.styles["5:2192-img"]]}><Graphic5 /></View>
      <View pointerEvents="none" style={[styles.art2194, ui.styles["5:2194-img"]]}><Graphic10 /></View>
      <View pointerEvents="none" style={[styles.art2195, ui.styles["5:2195-img"]]}><Graphic4 /></View>
      <View pointerEvents="none" style={[styles.art2196, ui.styles["5:2196-img"]]}><Graphic8 /></View>
      <View pointerEvents="none" style={[styles.art2197, ui.styles["5:2197-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text2199, ui.styles["5:2199"]]}>{ui.labels["5:2199"] ?? "QR 확인"}</Text>
      <Text numberOfLines={1} style={[styles.text2200, ui.styles["5:2200"]]}>{ui.labels["5:2200"] ?? "· 박도윤님의 일회용 번호"}</Text>
      <View pointerEvents="none" style={[styles.art2201, ui.styles["5:2201-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text2202, ui.styles["5:2202"]]}>{ui.labels["5:2202"] ?? "블루투스 신호"}</Text>
      <Text numberOfLines={1} style={[styles.text2203, ui.styles["5:2203"]]}>{ui.labels["5:2203"] ?? "· 조금 더 가까이 대 주세요"}</Text>
      <View pointerEvents="none" style={[styles.art2204, ui.styles["5:2204-img"]]}><Graphic9 /></View>
      <View pointerEvents="none" style={[styles.art2205, ui.styles["5:2205-img"]]}><Graphic9 /></View>
      <View pointerEvents="none" style={[styles.art2206, ui.styles["5:2206-img"]]}><Graphic9 /></View>
      <View pointerEvents="none" style={[styles.art2207, ui.styles["5:2207-img"]]}><Graphic6 /></View>
      <View pointerEvents="none" style={[styles.art2208, ui.styles["5:2208-img"]]}><Graphic6 /></View>
      <Text numberOfLines={1} style={[styles.text2209, ui.styles["5:2209"]]}>{ui.labels["5:2209"] ?? "기준: 두 폰을 거의 맞댄 거리 (팀 실측으로 정할 값)"}</Text>
      <Text numberOfLines={1} style={[styles.text2210, ui.styles["5:2210"]]}>{ui.labels["5:2210"] ?? "QR에서 읽은 번호를 보내는 폰의 신호만 찾아요. 신호가 기준을"}</Text>
      <Text numberOfLines={1} style={[styles.text2211, ui.styles["5:2211"]]}>{ui.labels["5:2211"] ?? "넘어야 다음 단계로 가요."}</Text>
      <View pointerEvents="none" style={[styles.art2212, ui.styles["5:2212-img"]]}><Graphic11 /></View>
      <Text numberOfLines={1} style={[styles.text2213, ui.styles["5:2213"]]}>{ui.labels["5:2213"] ?? "연결되면 조건 확인으로"}</Text>
      <Text numberOfLines={1} style={[styles.text2214, ui.styles["5:2214"]]}>{ui.labels["5:2214"] ?? "여러 번 실패하면 링크(원격) 방식으로 바꿀 수 있어요"}</Text>
      <TouchTarget label={ui.labels["5:2213"] ?? "연결되면 조건 확인으로"} action="connected" style={styles.taptext2213} ui={ui} />
      <TouchTarget label={ui.labels["5:2214"] ?? "여러 번 실패하면 링크(원격) 방식으로 바꿀 수 있어요"} action="remote" style={styles.taptext2214} ui={ui} />
    </Frame>
  );
}
