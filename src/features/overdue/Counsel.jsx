import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './Counsel.styles';
import Graphic0 from '../../../assets/wire/89055.svg';

export default function Counsel({ ui }) {
  return (
    <Frame width={390} height={844} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box156, ui.styles["118:156"]]} />
      <View pointerEvents="none" style={[styles.box157, ui.styles["118:157"]]} />
      <View pointerEvents="none" style={[styles.art158, ui.styles["118:158-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text160, ui.styles["118:160"]]}>{ui.labels["118:160"] ?? "법률 상담"}</Text>
      <View pointerEvents="none" style={[styles.box161, ui.styles["118:161"]]} />
      <Text numberOfLines={1} style={[styles.text162, ui.styles["118:162"]]}>{ui.labels["118:162"] ?? "상담받을 곳을 골라요"}</Text>
      <Text numberOfLines={1} style={[styles.text163, ui.styles["118:163"]]}>{ui.labels["118:163"] ?? "2회차 20,000원 미납 · 남은 돈 120,000원"}</Text>
      <View pointerEvents="none" style={[styles.box164, ui.styles["118:164"]]} />
      <Text numberOfLines={1} style={[styles.text165, ui.styles["118:165"]]}>{ui.labels["118:165"] ?? "대한법률구조공단"}</Text>
      <View pointerEvents="none" style={[styles.box166, ui.styles["118:166"]]} />
      <Text numberOfLines={1} style={[styles.text167, ui.styles["118:167"]]}>{ui.labels["118:167"] ?? "공공"}</Text>
      <Text numberOfLines={1} style={[styles.text168, ui.styles["118:168"]]}>{ui.labels["118:168"] ?? "무료 법률 상담 · 전화 132 또는 방문 예약"}</Text>
      <Text numberOfLines={1} style={[styles.text169, ui.styles["118:169"]]}>{ui.labels["118:169"] ?? "›"}</Text>
      <View pointerEvents="none" style={[styles.box170, ui.styles["118:170"]]} />
      <Text numberOfLines={1} style={[styles.text171, ui.styles["118:171"]]}>{ui.labels["118:171"] ?? "지방변호사회 상담"}</Text>
      <View pointerEvents="none" style={[styles.box172, ui.styles["118:172"]]} />
      <Text numberOfLines={1} style={[styles.text173, ui.styles["118:173"]]}>{ui.labels["118:173"] ?? "변호사회"}</Text>
      <Text numberOfLines={1} style={[styles.text174, ui.styles["118:174"]]}>{ui.labels["118:174"] ?? "지역 변호사회가 운영하는 상담 창구예요."}</Text>
      <Text numberOfLines={1} style={[styles.text175, ui.styles["118:175"]]}>{ui.labels["118:175"] ?? "›"}</Text>
      <View pointerEvents="none" style={[styles.box176, ui.styles["118:176"]]} />
      <Text numberOfLines={1} style={[styles.text177, ui.styles["118:177"]]}>{ui.labels["118:177"] ?? "제휴 변호사 연결"}</Text>
      <View pointerEvents="none" style={[styles.box178, ui.styles["118:178"]]} />
      <Text numberOfLines={1} style={[styles.text179, ui.styles["118:179"]]}>{ui.labels["118:179"] ?? "예정"}</Text>
      <Text style={[styles.text180, ui.styles["118:180"]]}>{ui.labels["118:180"] ?? "준비 중이에요. 제휴가 정해지면 동의를 받고 증거 묶음을 전달해요."}</Text>
      <View pointerEvents="none" style={[styles.box181, ui.styles["118:181"]]} />
      <Text style={[styles.text182, ui.styles["118:182"]]}>{ui.labels["118:182"] ?? "NOD는 변호사를 소개하고 대가를 받지 않아요. 상담·수임 비용은 상담처에서 직접 확인하세요."}</Text>
      <View pointerEvents="none" style={[styles.box183, ui.styles["118:183"]]} />
      <View pointerEvents="none" style={[styles.box184, ui.styles["118:184"]]} />
      <View pointerEvents="none" style={[styles.box185, ui.styles["118:185"]]} />
      <Text numberOfLines={1} style={[styles.text186, ui.styles["118:186"]]}>{ui.labels["118:186"] ?? "이곳으로 상담 준비하기"}</Text>
      <TouchTarget label={ui.labels["118:165"] ?? "대한법률구조공단"} action="S38" style={styles.taptext165} ui={ui} />
      <TouchTarget label={ui.labels["118:171"] ?? "지방변호사회 상담"} action="S38" style={styles.taptext171} ui={ui} />
      <TouchTarget label={ui.labels["118:186"] ?? "이곳으로 상담 준비하기"} action="S38" style={styles.taptext186} ui={ui} />
    </Frame>
  );
}
