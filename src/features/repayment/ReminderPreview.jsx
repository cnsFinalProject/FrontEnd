import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './ReminderPreview.styles';
import Graphic0 from '../../../assets/wire/14eca.svg';
import Graphic1 from '../../../assets/wire/27e73.svg';
import Graphic2 from '../../../assets/wire/2843f.svg';
import Graphic3 from '../../../assets/wire/5b31a.svg';
import Graphic4 from '../../../assets/wire/6c2d3.svg';
import Graphic5 from '../../../assets/wire/8bd21.svg';
import Graphic6 from '../../../assets/wire/c5d4e.svg';

export default function ReminderPreview({ ui }) {
  return (
    <Frame width={390} height={844} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.art913, ui.styles["5:913-img"]]}><Graphic3 /></View>
      <Text numberOfLines={1} style={[styles.text915, ui.styles["5:915"]]}>{ui.labels["5:915"] ?? "2월 27일 토요일"}</Text>
      <Text numberOfLines={1} style={[styles.text916, ui.styles["5:916"]]}>{ui.labels["5:916"] ?? "9:00"}</Text>
      <View pointerEvents="none" style={[styles.art917, ui.styles["5:917-img"]]}><Graphic5 /></View>
      <View pointerEvents="none" style={[styles.art918, ui.styles["5:918-img"]]}><Graphic6 /></View>
      <Text numberOfLines={1} style={[styles.text919, ui.styles["5:919"]]}>{ui.labels["5:919"] ?? "NOD"}</Text>
      <Text numberOfLines={1} style={[styles.text920, ui.styles["5:920"]]}>{ui.labels["5:920"] ?? "NOD"}</Text>
      <Text numberOfLines={1} style={[styles.text921, ui.styles["5:921"]]}>{ui.labels["5:921"] ?? "지금"}</Text>
      <Text numberOfLines={1} style={[styles.text922, ui.styles["5:922"]]}>{ui.labels["5:922"] ?? "내일은 2회차 갚는 날이에요"}</Text>
      <Text numberOfLines={1} style={[styles.text923, ui.styles["5:923"]]}>{ui.labels["5:923"] ?? "박도윤님께 100,000원 · 02.28(일)"}</Text>
      <Text numberOfLines={1} style={[styles.text924, ui.styles["5:924"]]}>{ui.labels["5:924"] ?? "휴일이어도 NOD 송금은 바로 돼요."}</Text>
      <View pointerEvents="none" style={[styles.art925, ui.styles["5:925-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text926, ui.styles["5:926"]]}>{ui.labels["5:926"] ?? "약속 보기"}</Text>
      <View pointerEvents="none" style={[styles.art927, ui.styles["5:927-img"]]}><Graphic4 /></View>
      <Text numberOfLines={1} style={[styles.text928, ui.styles["5:928"]]}>{ui.labels["5:928"] ?? "지금 갚기"}</Text>
      <View pointerEvents="none" style={[styles.art929, ui.styles["5:929-img"]]}><Graphic1 /></View>
      <View pointerEvents="none" style={[styles.art930, ui.styles["5:930-img"]]}><Graphic6 /></View>
      <Text numberOfLines={1} style={[styles.text931, ui.styles["5:931"]]}>{ui.labels["5:931"] ?? "NOD"}</Text>
      <Text numberOfLines={1} style={[styles.text932, ui.styles["5:932"]]}>{ui.labels["5:932"] ?? "NOD"}</Text>
      <Text numberOfLines={1} style={[styles.text933, ui.styles["5:933"]]}>{ui.labels["5:933"] ?? "지금"}</Text>
      <Text numberOfLines={1} style={[styles.text934, ui.styles["5:934"]]}>{ui.labels["5:934"] ?? "잔액이 28,000원 모자라요"}</Text>
      <Text numberOfLines={1} style={[styles.text935, ui.styles["5:935"]]}>{ui.labels["5:935"] ?? "모의은행 220-***-118204 잔액 72,000원."}</Text>
      <Text numberOfLines={1} style={[styles.text936, ui.styles["5:936"]]}>{ui.labels["5:936"] ?? "나만 보는 알림이에요. 박도윤님에게는 가지 않아요."}</Text>
      <Text numberOfLines={1} style={[styles.text937, ui.styles["5:937"]]}>{ui.labels["5:937"] ?? "앱에서 갚는 방법 보기 ›"}</Text>
      <View pointerEvents="none" style={[styles.art938, ui.styles["5:938-img"]]}><Graphic2 /></View>
      <Text numberOfLines={1} style={[styles.text939, ui.styles["5:939"]]}>{ui.labels["5:939"] ?? "NOD · 2월 25일 09:00"}</Text>
      <Text numberOfLines={1} style={[styles.text940, ui.styles["5:940"]]}>{ui.labels["5:940"] ?? "D-3"}</Text>
      <Text numberOfLines={1} style={[styles.text941, ui.styles["5:941"]]}>{ui.labels["5:941"] ?? "2회차까지 3일 남았어요 · 100,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text942, ui.styles["5:942"]]}>{ui.labels["5:942"] ?? "빌리는 사람 · 이하린의 잠금화면"}</Text>
      <TouchTarget label={ui.labels["5:928"] ?? "지금 갚기"} action="S29" style={styles.taptext928} ui={ui} />
    </Frame>
  );
}
