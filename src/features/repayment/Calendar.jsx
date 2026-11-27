import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './Calendar.styles';
import Graphic0 from '../../../assets/wire/164f0.svg';
import Graphic1 from '../../../assets/wire/1f89d.svg';
import Graphic2 from '../../../assets/wire/23866.svg';
import Graphic3 from '../../../assets/wire/3412d.svg';
import Graphic4 from '../../../assets/wire/49b0a.svg';
import Graphic5 from '../../../assets/wire/923f5.svg';
import Graphic6 from '../../../assets/wire/a6136.svg';
import Graphic7 from '../../../assets/wire/b0b4f.svg';
import Graphic8 from '../../../assets/wire/b9345.svg';
import Graphic9 from '../../../assets/wire/c171d.svg';
import Graphic10 from '../../../assets/wire/e6f30.svg';
import Graphic11 from '../../../assets/wire/facbe.svg';
import Graphic12 from '../../../assets/wire/fd10b.svg';

export default function Calendar({ ui }) {
  return (
    <Frame width={390} height={844} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.art983, ui.styles["5:983-img"]]}><Graphic4 /></View>
      <View pointerEvents="none" style={[styles.art985, ui.styles["5:985-img"]]}><Graphic2 /></View>
      <View pointerEvents="none" style={[styles.art986, ui.styles["5:986-img"]]}><Graphic6 /></View>
      <Text numberOfLines={1} style={[styles.text988, ui.styles["5:988"]]}>{ui.labels["5:988"] ?? "상환 캘린더"}</Text>
      <Text numberOfLines={1} style={[styles.text989, ui.styles["5:989"]]}>{ui.labels["5:989"] ?? "알림 설정"}</Text>
      <View pointerEvents="none" style={[styles.art990, ui.styles["5:990-img"]]}><Graphic7 /></View>
      <Text numberOfLines={1} style={[styles.text991, ui.styles["5:991"]]}>{ui.labels["5:991"] ?? "‹"}</Text>
      <Text numberOfLines={1} style={[styles.text992, ui.styles["5:992"]]}>{ui.labels["5:992"] ?? "2026년 12월"}</Text>
      <Text numberOfLines={1} style={[styles.text993, ui.styles["5:993"]]}>{ui.labels["5:993"] ?? "›"}</Text>
      <View pointerEvents="none" style={[styles.art994, ui.styles["5:994-img"]]}><Graphic12 /></View>
      <Text numberOfLines={1} style={[styles.text995, ui.styles["5:995"]]}>{ui.labels["5:995"] ?? "이번 달 받을 돈"}</Text>
      <Text numberOfLines={1} style={[styles.text996, ui.styles["5:996"]]}>{ui.labels["5:996"] ?? "50,000원"}</Text>
      <View pointerEvents="none" style={[styles.art997, ui.styles["5:997-img"]]}><Graphic11 /></View>
      <Text numberOfLines={1} style={[styles.text998, ui.styles["5:998"]]}>{ui.labels["5:998"] ?? "이번 달 갚을 돈"}</Text>
      <Text numberOfLines={1} style={[styles.text999, ui.styles["5:999"]]}>{ui.labels["5:999"] ?? "50,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text1000, ui.styles["5:1000"]]}>{ui.labels["5:1000"] ?? "일"}</Text>
      <Text numberOfLines={1} style={[styles.text1001, ui.styles["5:1001"]]}>{ui.labels["5:1001"] ?? "월"}</Text>
      <Text numberOfLines={1} style={[styles.text1002, ui.styles["5:1002"]]}>{ui.labels["5:1002"] ?? "화"}</Text>
      <Text numberOfLines={1} style={[styles.text1003, ui.styles["5:1003"]]}>{ui.labels["5:1003"] ?? "수"}</Text>
      <Text numberOfLines={1} style={[styles.text1004, ui.styles["5:1004"]]}>{ui.labels["5:1004"] ?? "목"}</Text>
      <Text numberOfLines={1} style={[styles.text1005, ui.styles["5:1005"]]}>{ui.labels["5:1005"] ?? "금"}</Text>
      <Text numberOfLines={1} style={[styles.text1006, ui.styles["5:1006"]]}>{ui.labels["5:1006"] ?? "토"}</Text>
      <Text numberOfLines={1} style={[styles.text1007, ui.styles["5:1007"]]}>{ui.labels["5:1007"] ?? "1"}</Text>
      <Text numberOfLines={1} style={[styles.text1008, ui.styles["5:1008"]]}>{ui.labels["5:1008"] ?? "2"}</Text>
      <Text numberOfLines={1} style={[styles.text1009, ui.styles["5:1009"]]}>{ui.labels["5:1009"] ?? "3"}</Text>
      <Text numberOfLines={1} style={[styles.text1010, ui.styles["5:1010"]]}>{ui.labels["5:1010"] ?? "4"}</Text>
      <Text numberOfLines={1} style={[styles.text1011, ui.styles["5:1011"]]}>{ui.labels["5:1011"] ?? "5"}</Text>
      <Text numberOfLines={1} style={[styles.text1012, ui.styles["5:1012"]]}>{ui.labels["5:1012"] ?? "6"}</Text>
      <View pointerEvents="none" style={[styles.art1013, ui.styles["5:1013-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text1014, ui.styles["5:1014"]]}>{ui.labels["5:1014"] ?? "7"}</Text>
      <View pointerEvents="none" style={[styles.art1015, ui.styles["5:1015-img"]]}><Graphic5 /></View>
      <Text numberOfLines={1} style={[styles.text1016, ui.styles["5:1016"]]}>{ui.labels["5:1016"] ?? "8"}</Text>
      <Text numberOfLines={1} style={[styles.text1017, ui.styles["5:1017"]]}>{ui.labels["5:1017"] ?? "9"}</Text>
      <View pointerEvents="none" style={[styles.art1018, ui.styles["5:1018-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text1019, ui.styles["5:1019"]]}>{ui.labels["5:1019"] ?? "10"}</Text>
      <View pointerEvents="none" style={[styles.art1020, ui.styles["5:1020-img"]]}><Graphic10 /></View>
      <Text numberOfLines={1} style={[styles.text1021, ui.styles["5:1021"]]}>{ui.labels["5:1021"] ?? "11"}</Text>
      <Text numberOfLines={1} style={[styles.text1022, ui.styles["5:1022"]]}>{ui.labels["5:1022"] ?? "12"}</Text>
      <Text numberOfLines={1} style={[styles.text1023, ui.styles["5:1023"]]}>{ui.labels["5:1023"] ?? "13"}</Text>
      <Text numberOfLines={1} style={[styles.text1024, ui.styles["5:1024"]]}>{ui.labels["5:1024"] ?? "14"}</Text>
      <Text numberOfLines={1} style={[styles.text1025, ui.styles["5:1025"]]}>{ui.labels["5:1025"] ?? "15"}</Text>
      <Text numberOfLines={1} style={[styles.text1026, ui.styles["5:1026"]]}>{ui.labels["5:1026"] ?? "16"}</Text>
      <Text numberOfLines={1} style={[styles.text1027, ui.styles["5:1027"]]}>{ui.labels["5:1027"] ?? "17"}</Text>
      <Text numberOfLines={1} style={[styles.text1028, ui.styles["5:1028"]]}>{ui.labels["5:1028"] ?? "18"}</Text>
      <Text numberOfLines={1} style={[styles.text1029, ui.styles["5:1029"]]}>{ui.labels["5:1029"] ?? "19"}</Text>
      <Text numberOfLines={1} style={[styles.text1030, ui.styles["5:1030"]]}>{ui.labels["5:1030"] ?? "20"}</Text>
      <Text numberOfLines={1} style={[styles.text1031, ui.styles["5:1031"]]}>{ui.labels["5:1031"] ?? "21"}</Text>
      <Text numberOfLines={1} style={[styles.text1032, ui.styles["5:1032"]]}>{ui.labels["5:1032"] ?? "22"}</Text>
      <Text numberOfLines={1} style={[styles.text1033, ui.styles["5:1033"]]}>{ui.labels["5:1033"] ?? "23"}</Text>
      <Text numberOfLines={1} style={[styles.text1034, ui.styles["5:1034"]]}>{ui.labels["5:1034"] ?? "24"}</Text>
      <Text numberOfLines={1} style={[styles.text1035, ui.styles["5:1035"]]}>{ui.labels["5:1035"] ?? "25"}</Text>
      <Text numberOfLines={1} style={[styles.text1036, ui.styles["5:1036"]]}>{ui.labels["5:1036"] ?? "월급"}</Text>
      <Text numberOfLines={1} style={[styles.text1037, ui.styles["5:1037"]]}>{ui.labels["5:1037"] ?? "26"}</Text>
      <Text numberOfLines={1} style={[styles.text1038, ui.styles["5:1038"]]}>{ui.labels["5:1038"] ?? "27"}</Text>
      <Text numberOfLines={1} style={[styles.text1039, ui.styles["5:1039"]]}>{ui.labels["5:1039"] ?? "28"}</Text>
      <Text numberOfLines={1} style={[styles.text1040, ui.styles["5:1040"]]}>{ui.labels["5:1040"] ?? "29"}</Text>
      <Text numberOfLines={1} style={[styles.text1041, ui.styles["5:1041"]]}>{ui.labels["5:1041"] ?? "30"}</Text>
      <Text numberOfLines={1} style={[styles.text1042, ui.styles["5:1042"]]}>{ui.labels["5:1042"] ?? "31"}</Text>
      <View pointerEvents="none" style={[styles.art1043, ui.styles["5:1043-img"]]}><Graphic9 /></View>
      <View pointerEvents="none" style={[styles.art1044, ui.styles["5:1044-img"]]}><Graphic3 /></View>
      <Text numberOfLines={1} style={[styles.text1045, ui.styles["5:1045"]]}>{ui.labels["5:1045"] ?? "12.07"}</Text>
      <Text numberOfLines={1} style={[styles.text1046, ui.styles["5:1046"]]}>{ui.labels["5:1046"] ?? "월"}</Text>
      <Text numberOfLines={1} style={[styles.text1047, ui.styles["5:1047"]]}>{ui.labels["5:1047"] ?? "최민재 · 3회차 받기"}</Text>
      <Text numberOfLines={1} style={[styles.text1048, ui.styles["5:1048"]]}>{ui.labels["5:1048"] ?? "2회차 미납 20,000원도 함께 확인"}</Text>
      <Text numberOfLines={1} style={[styles.text1049, ui.styles["5:1049"]]}>{ui.labels["5:1049"] ?? "+50,000"}</Text>
      <View pointerEvents="none" style={[styles.art1050, ui.styles["5:1050-img"]]}><Graphic8 /></View>
      <Text numberOfLines={1} style={[styles.text1051, ui.styles["5:1051"]]}>{ui.labels["5:1051"] ?? "12.10"}</Text>
      <Text numberOfLines={1} style={[styles.text1052, ui.styles["5:1052"]]}>{ui.labels["5:1052"] ?? "목"}</Text>
      <Text numberOfLines={1} style={[styles.text1053, ui.styles["5:1053"]]}>{ui.labels["5:1053"] ?? "정유나 · 한 번에 갚기"}</Text>
      <Text numberOfLines={1} style={[styles.text1054, ui.styles["5:1054"]]}>{ui.labels["5:1054"] ?? "D-21 · 알림 D-3, D-1, 당일"}</Text>
      <Text numberOfLines={1} style={[styles.text1055, ui.styles["5:1055"]]}>{ui.labels["5:1055"] ?? "−50,000"}</Text>
      <Text numberOfLines={1} style={[styles.text1056, ui.styles["5:1056"]]}>{ui.labels["5:1056"] ?? "12.25"}</Text>
      <Text numberOfLines={1} style={[styles.text1057, ui.styles["5:1057"]]}>{ui.labels["5:1057"] ?? "금"}</Text>
      <Text numberOfLines={1} style={[styles.text1058, ui.styles["5:1058"]]}>{ui.labels["5:1058"] ?? "내 월급날"}</Text>
      <Text numberOfLines={1} style={[styles.text1059, ui.styles["5:1059"]]}>{ui.labels["5:1059"] ?? "새 약속에서 상환일 추천에 써요"}</Text>
      <Text numberOfLines={1} style={[styles.text1060, ui.styles["5:1060"]]}>{ui.labels["5:1060"] ?? "박도윤의 화면 · 받을 돈과 갚을 돈을 한 달에"}</Text>
      <TouchTarget label={ui.labels["5:989"] ?? "알림 설정"} action="settings" style={styles.taptext989} ui={ui} />
      <TouchTarget label={ui.labels["5:1047"] ?? "최민재 · 3회차 받기"} action="S31" style={styles.taptext1047} ui={ui} />
      <TouchTarget label={ui.labels["5:1053"] ?? "정유나 · 한 번에 갚기"} action="otherLoan" style={styles.taptext1053} ui={ui} />
    </Frame>
  );
}
