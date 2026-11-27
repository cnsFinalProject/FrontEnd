import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './DeclineReason.styles';
import Graphic0 from '../../../assets/wire/0146b.svg';
import Graphic1 from '../../../assets/wire/144ad.svg';
import Graphic2 from '../../../assets/wire/1523e.svg';
import Graphic3 from '../../../assets/wire/225d4.svg';
import Graphic4 from '../../../assets/wire/40860.svg';
import Graphic5 from '../../../assets/wire/7be8b.svg';
import Graphic6 from '../../../assets/wire/9ec32.svg';
import Graphic7 from '../../../assets/wire/b1eea.svg';
import Graphic8 from '../../../assets/wire/c8e2c.svg';
import Graphic9 from '../../../assets/wire/e3138.svg';
import Graphic10 from '../../../assets/wire/e4319.svg';
import Graphic11 from '../../../assets/wire/ecc45.svg';
import Graphic12 from '../../../assets/wire/f61bf.svg';

export default function DeclineReason({ ui }) {
  return (
    <Frame width={390} height={844} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.art122, ui.styles["71:122-img"]]}><Graphic6 /></View>
      <Text numberOfLines={1} style={[styles.text124, ui.styles["71:124"]]}>{ui.labels["71:124"] ?? "변경 요청"}</Text>
      <Text numberOfLines={1} style={[styles.text125, ui.styles["71:125"]]}>{ui.labels["71:125"] ?? "빌려주는 사람 · 박도윤의 화면"}</Text>
      <Text numberOfLines={1} style={[styles.text126, ui.styles["71:126"]]}>{ui.labels["71:126"] ?? "이하린님이 2회차를"}</Text>
      <Text numberOfLines={1} style={[styles.text127, ui.styles["71:127"]]}>{ui.labels["71:127"] ?? "나눠서 갚겠다고 요청했어요"}</Text>
      <View pointerEvents="none" style={[styles.art128, ui.styles["71:128-img"]]}><Graphic9 /></View>
      <View pointerEvents="none" style={[styles.art129, ui.styles["71:129-img"]]}><Graphic0 /></View>
      <View pointerEvents="none" style={[styles.art130, ui.styles["71:130-img"]]}><Graphic10 /></View>
      <Text numberOfLines={1} style={[styles.text131, ui.styles["71:131"]]}>{ui.labels["71:131"] ?? "어떤 점이 어려운지 알려 주세요"}</Text>
      <Text numberOfLines={1} style={[styles.text132, ui.styles["71:132"]]}>{ui.labels["71:132"] ?? "이유를 알면 이하린님이 다시 조정하기 쉬워요 · 선택"}</Text>
      <View pointerEvents="none" style={[styles.art133, ui.styles["71:133-img"]]}><Graphic11 /></View>
      <Text numberOfLines={1} style={[styles.text134, ui.styles["71:134"]]}>{ui.labels["71:134"] ?? "회차가 늘어나는 게 번거로워요"}</Text>
      <View pointerEvents="none" style={[styles.art135, ui.styles["71:135-img"]]}><Graphic8 /></View>
      <Text numberOfLines={1} style={[styles.text136, ui.styles["71:136"]]}>{ui.labels["71:136"] ?? "날짜가 너무 멀어요"}</Text>
      <View pointerEvents="none" style={[styles.art137, ui.styles["71:137-img"]]}><Graphic12 /></View>
      <Text numberOfLines={1} style={[styles.text138, ui.styles["71:138"]]}>{ui.labels["71:138"] ?? "먼저 보내는 금액이 적어요"}</Text>
      <View pointerEvents="none" style={[styles.art139, ui.styles["71:139-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text140, ui.styles["71:140"]]}>{ui.labels["71:140"] ?? "기타"}</Text>
      <View pointerEvents="none" style={[styles.art141, ui.styles["71:141-img"]]}><Graphic5 /></View>
      <Text numberOfLines={1} style={[styles.text142, ui.styles["71:142"]]}>{ui.labels["71:142"] ?? "28,000원 따로 받는 건 번거로워. 3회차 때 같이 보내 줘."}</Text>
      <View pointerEvents="none" style={[styles.art143, ui.styles["71:143-img"]]}><Graphic3 /></View>
      <Text numberOfLines={1} style={[styles.text144, ui.styles["71:144"]]}>{ui.labels["71:144"] ?? "원하는 조건을 직접 정해 주고 싶다면"}</Text>
      <Text numberOfLines={1} style={[styles.text145, ui.styles["71:145"]]}>{ui.labels["71:145"] ?? "역제안으로 바꾸기 ›"}</Text>
      <View pointerEvents="none" style={[styles.art146, ui.styles["71:146-img"]]}><Graphic2 /></View>
      <Text numberOfLines={1} style={[styles.text147, ui.styles["71:147"]]}>{ui.labels["71:147"] ?? "거절해도"}</Text>
      <Text numberOfLines={1} style={[styles.text148, ui.styles["71:148"]]}>{ui.labels["71:148"] ?? "원래 약속은 그대로"}</Text>
      <Text numberOfLines={1} style={[styles.text149, ui.styles["71:149"]]}>{ui.labels["71:149"] ?? "예요. 이하린님은 협의 기한(02.27)"}</Text>
      <Text numberOfLines={1} style={[styles.text150, ui.styles["71:150"]]}>{ui.labels["71:150"] ?? "안에 조건을 바꿔 다시 제안할 수 있어요."}</Text>
      <View pointerEvents="none" style={[styles.art151, ui.styles["71:151-img"]]}><Graphic7 /></View>
      <Text numberOfLines={1} style={[styles.text152, ui.styles["71:152"]]}>{ui.labels["71:152"] ?? "취소"}</Text>
      <View pointerEvents="none" style={[styles.art153, ui.styles["71:153-img"]]}><Graphic4 /></View>
      <Text numberOfLines={1} style={[styles.text154, ui.styles["71:154"]]}>{ui.labels["71:154"] ?? "거절 보내기"}</Text>
      <TouchTarget label={ui.labels["71:145"] ?? "역제안으로 바꾸기 ›"} action="editChange" style={styles.taptext145} ui={ui} />
      <TouchTarget label={ui.labels["71:152"] ?? "취소"} action="back" style={styles.taptext152} ui={ui} />
      <TouchTarget label={ui.labels["71:154"] ?? "거절 보내기"} action="rejectChange" style={styles.taptext154} ui={ui} />
    </Frame>
  );
}
