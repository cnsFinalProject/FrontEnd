import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './PaymentOrder.styles';
import Graphic0 from '../../../assets/wire/89055.svg';
import Graphic1 from '../../../assets/wire/dce50.svg';
import Graphic2 from '../../../assets/wire/fc3a6.svg';

export default function PaymentOrder({ ui }) {
  return (
    <Frame width={390} height={844} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box219, ui.styles["118:219"]]} />
      <View pointerEvents="none" style={[styles.box220, ui.styles["118:220"]]} />
      <View pointerEvents="none" style={[styles.art221, ui.styles["118:221-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text223, ui.styles["118:223"]]}>{ui.labels["118:223"] ?? "지급명령"}</Text>
      <View pointerEvents="none" style={[styles.box224, ui.styles["118:224"]]} />
      <Text style={[styles.text225, ui.styles["118:225"]]}>{ui.labels["118:225"] ?? "지급명령은 법원에\n서류로 신청하는 절차예요"}</Text>
      <Text numberOfLines={1} style={[styles.text226, ui.styles["118:226"]]}>{ui.labels["118:226"] ?? "상대가 2주 안에 이의를 내지 않으면 확정돼요"}</Text>
      <View pointerEvents="none" style={[styles.box227, ui.styles["118:227"]]} />
      <Text numberOfLines={1} style={[styles.text228, ui.styles["118:228"]]}>{ui.labels["118:228"] ?? "필요한 것"}</Text>
      <View pointerEvents="none" style={[styles.art229, ui.styles["118:229-img"]]}><Graphic2 /></View>
      <Text numberOfLines={1} style={[styles.text230, ui.styles["118:230"]]}>{ui.labels["118:230"] ?? "1"}</Text>
      <Text numberOfLines={1} style={[styles.text231, ui.styles["118:231"]]}>{ui.labels["118:231"] ?? "증거 묶음 PDF"}</Text>
      <Text numberOfLines={1} style={[styles.text232, ui.styles["118:232"]]}>{ui.labels["118:232"] ?? "준비됐어요"}</Text>
      <View pointerEvents="none" style={[styles.art233, ui.styles["118:233-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text234, ui.styles["118:234"]]}>{ui.labels["118:234"] ?? "2"}</Text>
      <Text numberOfLines={1} style={[styles.text235, ui.styles["118:235"]]}>{ui.labels["118:235"] ?? "상대방 이름 · 주소"}</Text>
      <Text numberOfLines={1} style={[styles.text236, ui.styles["118:236"]]}>{ui.labels["118:236"] ?? "주소는 직접 확인해야 해요"}</Text>
      <View pointerEvents="none" style={[styles.art237, ui.styles["118:237-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text238, ui.styles["118:238"]]}>{ui.labels["118:238"] ?? "3"}</Text>
      <Text numberOfLines={1} style={[styles.text239, ui.styles["118:239"]]}>{ui.labels["118:239"] ?? "청구 금액"}</Text>
      <Text style={[styles.text240, ui.styles["118:240"]]}>{ui.labels["118:240"] ?? "미납 20,000원 또는 남은 돈 120,000원 (약정서 특약 확인)"}</Text>
      <View pointerEvents="none" style={[styles.box241, ui.styles["118:241"]]} />
      <Text numberOfLines={1} style={[styles.text242, ui.styles["118:242"]]}>{ui.labels["118:242"] ?? "알아 둘 것"}</Text>
      <Text numberOfLines={1} style={[styles.text243, ui.styles["118:243"]]}>{ui.labels["118:243"] ?? "상대가 이의를 내면 일반 소송으로 넘어가요."}</Text>
      <Text numberOfLines={1} style={[styles.text244, ui.styles["118:244"]]}>{ui.labels["118:244"] ?? "신청 비용(인지대·송달료)은 법원에 내요."}</Text>
      <View pointerEvents="none" style={[styles.box245, ui.styles["118:245"]]} />
      <Text style={[styles.text246, ui.styles["118:246"]]}>{ui.labels["118:246"] ?? "신청은 법원 전자소송 사이트에서 직접 해요. NOD가 대신 접수하지 않아요."}</Text>
      <View pointerEvents="none" style={[styles.box247, ui.styles["118:247"]]} />
      <View pointerEvents="none" style={[styles.box248, ui.styles["118:248"]]} />
      <View pointerEvents="none" style={[styles.box249, ui.styles["118:249"]]} />
      <Text numberOfLines={1} style={[styles.text250, ui.styles["118:250"]]}>{ui.labels["118:250"] ?? "변호사·법률 상담"}</Text>
      <View pointerEvents="none" style={[styles.box251, ui.styles["118:251"]]} />
      <Text numberOfLines={1} style={[styles.text252, ui.styles["118:252"]]}>{ui.labels["118:252"] ?? "전자소송으로 이동"}</Text>
      <TouchTarget label={ui.labels["118:250"] ?? "변호사·법률 상담"} action="S37" style={styles.taptext250} ui={ui} />
      <TouchTarget label={ui.labels["118:252"] ?? "전자소송으로 이동"} action="external" style={styles.taptext252} ui={ui} />
    </Frame>
  );
}
