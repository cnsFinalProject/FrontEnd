import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './ChooseProcedure.styles';
import Graphic0 from '../../../assets/wire/89055.svg';

export default function ChooseProcedure({ ui }) {
  return (
    <Frame width={390} height={844} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box135, ui.styles["118:135"]]} />
      <View pointerEvents="none" style={[styles.box136, ui.styles["118:136"]]} />
      <View pointerEvents="none" style={[styles.art137, ui.styles["118:137-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text139, ui.styles["118:139"]]}>{ui.labels["118:139"] ?? "진행 방법"}</Text>
      <View pointerEvents="none" style={[styles.box140, ui.styles["118:140"]]} />
      <Text numberOfLines={1} style={[styles.text141, ui.styles["118:141"]]}>{ui.labels["118:141"] ?? "어떤 방법으로 진행할까요?"}</Text>
      <Text numberOfLines={1} style={[styles.text142, ui.styles["118:142"]]}>{ui.labels["118:142"] ?? "하나를 고르면 필요한 것을 알려 드려요"}</Text>
      <View pointerEvents="none" style={[styles.box143, ui.styles["118:143"]]} />
      <Text numberOfLines={1} style={[styles.text144, ui.styles["118:144"]]}>{ui.labels["118:144"] ?? "내용증명 보내기"}</Text>
      <Text style={[styles.text145, ui.styles["118:145"]]}>{ui.labels["118:145"] ?? "서식은 채워 드려요. 보내는 건 우체국에서 직접 해요."}</Text>
      <Text numberOfLines={1} style={[styles.text146, ui.styles["118:146"]]}>{ui.labels["118:146"] ?? "›"}</Text>
      <View pointerEvents="none" style={[styles.box147, ui.styles["118:147"]]} />
      <Text numberOfLines={1} style={[styles.text148, ui.styles["118:148"]]}>{ui.labels["118:148"] ?? "지급명령 직접 신청"}</Text>
      <Text numberOfLines={1} style={[styles.text149, ui.styles["118:149"]]}>{ui.labels["118:149"] ?? "법원 전자소송에서 직접 신청해요."}</Text>
      <Text numberOfLines={1} style={[styles.text150, ui.styles["118:150"]]}>{ui.labels["118:150"] ?? "›"}</Text>
      <View pointerEvents="none" style={[styles.box151, ui.styles["118:151"]]} />
      <Text numberOfLines={1} style={[styles.text152, ui.styles["118:152"]]}>{ui.labels["118:152"] ?? "변호사·법률 상담 받기"}</Text>
      <Text numberOfLines={1} style={[styles.text153, ui.styles["118:153"]]}>{ui.labels["118:153"] ?? "혼자 하기 어렵다면 상담부터 받아요."}</Text>
      <Text numberOfLines={1} style={[styles.text154, ui.styles["118:154"]]}>{ui.labels["118:154"] ?? "›"}</Text>
      <Text numberOfLines={1} style={[styles.text155, ui.styles["118:155"]]}>{ui.labels["118:155"] ?? "고른다고 바로 접수되지 않아요. 상대방에게 알림도 가지 않아요."}</Text>
      <TouchTarget label={ui.labels["118:144"] ?? "내용증명 보내기"} action="records" style={styles.taptext144} ui={ui} />
      <TouchTarget label={ui.labels["118:148"] ?? "지급명령 직접 신청"} action="S39" style={styles.taptext148} ui={ui} />
      <TouchTarget label={ui.labels["118:152"] ?? "변호사·법률 상담 받기"} action="S37" style={styles.taptext152} ui={ui} />
    </Frame>
  );
}
