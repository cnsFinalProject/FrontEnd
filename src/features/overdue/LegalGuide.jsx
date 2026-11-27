import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './LegalGuide.styles';
import Graphic0 from '../../../assets/wire/89055.svg';
import Graphic1 from '../../../assets/wire/dce50.svg';
import Graphic2 from '../../../assets/wire/fc3a6.svg';
import Graphic3 from '../../../assets/wire/ff94a.svg';

export default function LegalGuide({ ui }) {
  return (
    <Frame width={390} height={885} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box61, ui.styles["118:61"]]} />
      <View pointerEvents="none" style={[styles.box62, ui.styles["118:62"]]} />
      <View pointerEvents="none" style={[styles.art63, ui.styles["118:63-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text65, ui.styles["118:65"]]}>{ui.labels["118:65"] ?? "법적 절차 안내"}</Text>
      <View pointerEvents="none" style={[styles.box66, ui.styles["118:66"]]} />
      <View pointerEvents="none" style={[styles.box67, ui.styles["118:67"]]} />
      <Text numberOfLines={1} style={[styles.text68, ui.styles["118:68"]]}>{ui.labels["118:68"] ?? "연체 12일"}</Text>
      <Text style={[styles.text69, ui.styles["118:69"]]}>{ui.labels["118:69"] ?? "받지 못한 돈,\n이런 순서로 진행할 수 있어요"}</Text>
      <Text numberOfLines={1} style={[styles.text70, ui.styles["118:70"]]}>{ui.labels["118:70"] ?? "최민재님 · 2회차 20,000원 미납 · 남은 돈 120,000원"}</Text>
      <View pointerEvents="none" style={[styles.box71, ui.styles["118:71"]]} />
      <Text numberOfLines={1} style={[styles.text72, ui.styles["118:72"]]}>{ui.labels["118:72"] ?? "진행 순서"}</Text>
      <View pointerEvents="none" style={[styles.art73, ui.styles["118:73-img"]]}><Graphic2 /></View>
      <Text numberOfLines={1} style={[styles.text74, ui.styles["118:74"]]}>{ui.labels["118:74"] ?? "1"}</Text>
      <Text numberOfLines={1} style={[styles.text75, ui.styles["118:75"]]}>{ui.labels["118:75"] ?? "상환 요청 보내기"}</Text>
      <Text numberOfLines={1} style={[styles.text76, ui.styles["118:76"]]}>{ui.labels["118:76"] ?? "2회 보냈고 상대가 읽었어요 · 완료"}</Text>
      <View pointerEvents="none" style={[styles.art77, ui.styles["118:77-img"]]}><Graphic3 /></View>
      <Text numberOfLines={1} style={[styles.text78, ui.styles["118:78"]]}>{ui.labels["118:78"] ?? "2"}</Text>
      <Text numberOfLines={1} style={[styles.text79, ui.styles["118:79"]]}>{ui.labels["118:79"] ?? "내용증명 보내기"}</Text>
      <Text numberOfLines={1} style={[styles.text80, ui.styles["118:80"]]}>{ui.labels["118:80"] ?? "갚으라고 요구한 사실을 우체국 기록으로 남겨요"}</Text>
      <View pointerEvents="none" style={[styles.art81, ui.styles["118:81-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text82, ui.styles["118:82"]]}>{ui.labels["118:82"] ?? "3"}</Text>
      <Text numberOfLines={1} style={[styles.text83, ui.styles["118:83"]]}>{ui.labels["118:83"] ?? "지급명령 신청"}</Text>
      <Text numberOfLines={1} style={[styles.text84, ui.styles["118:84"]]}>{ui.labels["118:84"] ?? "법원에 서류로 신청하는 절차예요"}</Text>
      <View pointerEvents="none" style={[styles.art85, ui.styles["118:85-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text86, ui.styles["118:86"]]}>{ui.labels["118:86"] ?? "4"}</Text>
      <Text numberOfLines={1} style={[styles.text87, ui.styles["118:87"]]}>{ui.labels["118:87"] ?? "소송 · 변호사 상담"}</Text>
      <Text style={[styles.text88, ui.styles["118:88"]]}>{ui.labels["118:88"] ?? "상대가 이의를 내거나 혼자 하기 어려울 때 전문가와 상의해요"}</Text>
      <View pointerEvents="none" style={[styles.box89, ui.styles["118:89"]]} />
      <Text numberOfLines={1} style={[styles.text90, ui.styles["118:90"]]}>{ui.labels["118:90"] ?? "지금 가진 기록"}</Text>
      <Text numberOfLines={1} style={[styles.text91, ui.styles["118:91"]]}>{ui.labels["118:91"] ?? "약정서"}</Text>
      <Text numberOfLines={1} style={[styles.text92, ui.styles["118:92"]]}>{ui.labels["118:92"] ?? "L-20260802-0017"}</Text>
      <Text numberOfLines={1} style={[styles.text93, ui.styles["118:93"]]}>{ui.labels["118:93"] ?? "체결 증명"}</Text>
      <Text numberOfLines={1} style={[styles.text94, ui.styles["118:94"]]}>{ui.labels["118:94"] ?? "합의·서명·교부"}</Text>
      <Text numberOfLines={1} style={[styles.text95, ui.styles["118:95"]]}>{ui.labels["118:95"] ?? "상환 요청"}</Text>
      <Text numberOfLines={1} style={[styles.text96, ui.styles["118:96"]]}>{ui.labels["118:96"] ?? "2회 · 읽음"}</Text>
      <View pointerEvents="none" style={[styles.box97, ui.styles["118:97"]]} />
      <Text style={[styles.text98, ui.styles["118:98"]]}>{ui.labels["118:98"] ?? "NOD는 법률 자문을 하지 않아요. 절차를 안내하고, 법정에서 증명하기 쉬운 형태로 기록을 묶어 드려요."}</Text>
      <View pointerEvents="none" style={[styles.box99, ui.styles["118:99"]]} />
      <View pointerEvents="none" style={[styles.box100, ui.styles["118:100"]]} />
      <View pointerEvents="none" style={[styles.box101, ui.styles["118:101"]]} />
      <Text numberOfLines={1} style={[styles.text102, ui.styles["118:102"]]}>{ui.labels["118:102"] ?? "증거 묶음 준비하기"}</Text>
      <TouchTarget label={ui.labels["118:83"] ?? "지급명령 신청"} action="S39" style={styles.taptext83} ui={ui} />
      <TouchTarget label={ui.labels["118:87"] ?? "소송 · 변호사 상담"} action="S37" style={styles.taptext87} ui={ui} />
      <TouchTarget label={ui.labels["118:102"] ?? "증거 묶음 준비하기"} action="S35" style={styles.taptext102} ui={ui} />
    </Frame>
  );
}
