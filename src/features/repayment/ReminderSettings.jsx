import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './ReminderSettings.styles';
import Graphic0 from '../../../assets/wire/0d46b.svg';
import Graphic1 from '../../../assets/wire/23866.svg';
import Graphic2 from '../../../assets/wire/3d3af.svg';
import Graphic3 from '../../../assets/wire/4305f.svg';
import Graphic4 from '../../../assets/wire/49b0a.svg';
import Graphic5 from '../../../assets/wire/6601c.svg';
import Graphic6 from '../../../assets/wire/74736.svg';
import Graphic7 from '../../../assets/wire/7b10c.svg';
import Graphic8 from '../../../assets/wire/7fc9c.svg';
import Graphic9 from '../../../assets/wire/89d34.svg';
import Graphic10 from '../../../assets/wire/a6136.svg';
import Graphic11 from '../../../assets/wire/d7fd0.svg';

export default function ReminderSettings({ ui }) {
  return (
    <Frame width={390} height={844} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.art943, ui.styles["5:943-img"]]}><Graphic4 /></View>
      <View pointerEvents="none" style={[styles.art945, ui.styles["5:945-img"]]}><Graphic1 /></View>
      <View pointerEvents="none" style={[styles.art946, ui.styles["5:946-img"]]}><Graphic10 /></View>
      <Text numberOfLines={1} style={[styles.text948, ui.styles["5:948"]]}>{ui.labels["5:948"] ?? "상환 알림"}</Text>
      <Text numberOfLines={1} style={[styles.text949, ui.styles["5:949"]]}>{ui.labels["5:949"] ?? "빌리는 사람 · 이하린의 화면 · 박도윤님과의 약속"}</Text>
      <View pointerEvents="none" style={[styles.art950, ui.styles["5:950-img"]]}><Graphic5 /></View>
      <Text numberOfLines={1} style={[styles.text951, ui.styles["5:951"]]}>{ui.labels["5:951"] ?? "언제 알려드릴까요"}</Text>
      <View pointerEvents="none" style={[styles.art952, ui.styles["5:952-img"]]}><Graphic11 /></View>
      <Text numberOfLines={1} style={[styles.text953, ui.styles["5:953"]]}>{ui.labels["5:953"] ?? "상환일 7일 전"}</Text>
      <Text numberOfLines={1} style={[styles.text954, ui.styles["5:954"]]}>{ui.labels["5:954"] ?? "on"}</Text>
      <View pointerEvents="none" style={[styles.art955, ui.styles["5:955-img"]]}><Graphic11 /></View>
      <Text numberOfLines={1} style={[styles.text956, ui.styles["5:956"]]}>{ui.labels["5:956"] ?? "3일 전 · 09:00"}</Text>
      <Text numberOfLines={1} style={[styles.text957, ui.styles["5:957"]]}>{ui.labels["5:957"] ?? "on"}</Text>
      <View pointerEvents="none" style={[styles.art958, ui.styles["5:958-img"]]}><Graphic7 /></View>
      <Text numberOfLines={1} style={[styles.text959, ui.styles["5:959"]]}>{ui.labels["5:959"] ?? "하루 전 · 09:00"}</Text>
      <Text numberOfLines={1} style={[styles.text960, ui.styles["5:960"]]}>{ui.labels["5:960"] ?? "on"}</Text>
      <View pointerEvents="none" style={[styles.art961, ui.styles["5:961-img"]]}><Graphic6 /></View>
      <Text numberOfLines={1} style={[styles.text962, ui.styles["5:962"]]}>{ui.labels["5:962"] ?? "당일 아침 · 09:00"}</Text>
      <Text numberOfLines={1} style={[styles.text963, ui.styles["5:963"]]}>{ui.labels["5:963"] ?? "on"}</Text>
      <Text numberOfLines={1} style={[styles.text964, ui.styles["5:964"]]}>{ui.labels["5:964"] ?? "당일 저녁 · 18:00"}</Text>
      <Text numberOfLines={1} style={[styles.text965, ui.styles["5:965"]]}>{ui.labels["5:965"] ?? "아직 안 갚았을 때만"}</Text>
      <Text numberOfLines={1} style={[styles.text966, ui.styles["5:966"]]}>{ui.labels["5:966"] ?? "on"}</Text>
      <View pointerEvents="none" style={[styles.art967, ui.styles["5:967-img"]]}><Graphic9 /></View>
      <Text numberOfLines={1} style={[styles.text968, ui.styles["5:968"]]}>{ui.labels["5:968"] ?? "잔액 부족 미리 알림"}</Text>
      <Text numberOfLines={1} style={[styles.text969, ui.styles["5:969"]]}>{ui.labels["5:969"] ?? "하루 전에 연결 계좌 잔액을 조회해서 모자라면 알려줘"}</Text>
      <Text numberOfLines={1} style={[styles.text970, ui.styles["5:970"]]}>{ui.labels["5:970"] ?? "요. 상대에게는 보이지 않아요."}</Text>
      <Text numberOfLines={1} style={[styles.text971, ui.styles["5:971"]]}>{ui.labels["5:971"] ?? "on"}</Text>
      <View pointerEvents="none" style={[styles.art972, ui.styles["5:972-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text973, ui.styles["5:973"]]}>{ui.labels["5:973"] ?? "내 월급날"}</Text>
      <Text numberOfLines={1} style={[styles.text974, ui.styles["5:974"]]}>{ui.labels["5:974"] ?? "새 약속을 맺을 때 상환일로 추천해요"}</Text>
      <View pointerEvents="none" style={[styles.art975, ui.styles["5:975-img"]]}><Graphic2 /></View>
      <View pointerEvents="none" style={[styles.art976, ui.styles["5:976-img"]]}><Graphic3 /></View>
      <Text numberOfLines={1} style={[styles.text977, ui.styles["5:977"]]}>{ui.labels["5:977"] ?? "빌려준 박도윤님에게는"}</Text>
      <Text numberOfLines={1} style={[styles.text978, ui.styles["5:978"]]}>{ui.labels["5:978"] ?? "갚았는지 결과만"}</Text>
      <Text numberOfLines={1} style={[styles.text979, ui.styles["5:979"]]}>{ui.labels["5:979"] ?? "알려요. 미리 알림"}</Text>
      <Text numberOfLines={1} style={[styles.text980, ui.styles["5:980"]]}>{ui.labels["5:980"] ?? "과 잔액 정보는 나에게만 가요."}</Text>
      <View pointerEvents="none" style={[styles.art981, ui.styles["5:981-img"]]}><Graphic8 /></View>
      <Text numberOfLines={1} style={[styles.text982, ui.styles["5:982"]]}>{ui.labels["5:982"] ?? "저장"}</Text>
      <TouchTarget label={ui.labels["5:982"] ?? "저장"} action="saveSettings" style={styles.taptext982} ui={ui} />
    </Frame>
  );
}
