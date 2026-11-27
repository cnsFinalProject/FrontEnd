import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './Receipt.styles';
import Graphic0 from '../../../assets/wire/23866.svg';
import Graphic1 from '../../../assets/wire/2fcb6.svg';
import Graphic2 from '../../../assets/wire/48de2.svg';
import Graphic3 from '../../../assets/wire/49b0a.svg';
import Graphic4 from '../../../assets/wire/7b10c.svg';
import Graphic5 from '../../../assets/wire/a6136.svg';
import Graphic6 from '../../../assets/wire/c8d4e.svg';
import Graphic7 from '../../../assets/wire/de559.svg';
import Graphic8 from '../../../assets/wire/f5118.svg';

export default function Receipt({ ui }) {
  return (
    <Frame width={390} height={844} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.art1061, ui.styles["5:1061-img"]]}><Graphic3 /></View>
      <View pointerEvents="none" style={[styles.art1063, ui.styles["5:1063-img"]]}><Graphic0 /></View>
      <View pointerEvents="none" style={[styles.art1064, ui.styles["5:1064-img"]]}><Graphic5 /></View>
      <Text numberOfLines={1} style={[styles.text1066, ui.styles["5:1066"]]}>{ui.labels["5:1066"] ?? "상환 영수증"}</Text>
      <View pointerEvents="none" style={[styles.art1067, ui.styles["5:1067-img"]]}><Graphic7 /></View>
      <Text numberOfLines={1} style={[styles.text1068, ui.styles["5:1068"]]}>{ui.labels["5:1068"] ?? "1회차 상환"}</Text>
      <Text numberOfLines={1} style={[styles.text1069, ui.styles["5:1069"]]}>{ui.labels["5:1069"] ?? "R-20270131-0001"}</Text>
      <Text numberOfLines={1} style={[styles.text1070, ui.styles["5:1070"]]}>{ui.labels["5:1070"] ?? "100,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text1071, ui.styles["5:1071"]]}>{ui.labels["5:1071"] ?? "박도윤님이 이하린님에게서 받았음을 확인합니다."}</Text>
      <View pointerEvents="none" style={[styles.art1072, ui.styles["5:1072-img"]]}><Graphic6 /></View>
      <Text numberOfLines={1} style={[styles.text1073, ui.styles["5:1073"]]}>{ui.labels["5:1073"] ?? "충당 내역 · 지연손해금 → 이자 → 원금 순"}</Text>
      <Text numberOfLines={1} style={[styles.text1074, ui.styles["5:1074"]]}>{ui.labels["5:1074"] ?? "지연손해금"}</Text>
      <Text numberOfLines={1} style={[styles.text1075, ui.styles["5:1075"]]}>{ui.labels["5:1075"] ?? "0원"}</Text>
      <Text numberOfLines={1} style={[styles.text1076, ui.styles["5:1076"]]}>{ui.labels["5:1076"] ?? "이자"}</Text>
      <Text numberOfLines={1} style={[styles.text1077, ui.styles["5:1077"]]}>{ui.labels["5:1077"] ?? "0원"}</Text>
      <Text numberOfLines={1} style={[styles.text1078, ui.styles["5:1078"]]}>{ui.labels["5:1078"] ?? "원금"}</Text>
      <Text numberOfLines={1} style={[styles.text1079, ui.styles["5:1079"]]}>{ui.labels["5:1079"] ?? "100,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text1080, ui.styles["5:1080"]]}>{ui.labels["5:1080"] ?? "받은 시각"}</Text>
      <Text numberOfLines={1} style={[styles.text1081, ui.styles["5:1081"]]}>{ui.labels["5:1081"] ?? "2027.01.31 14:07:22"}</Text>
      <Text numberOfLines={1} style={[styles.text1082, ui.styles["5:1082"]]}>{ui.labels["5:1082"] ?? "보낸 계좌"}</Text>
      <Text numberOfLines={1} style={[styles.text1083, ui.styles["5:1083"]]}>{ui.labels["5:1083"] ?? "이하린 · 모의은행 220-***-118204"}</Text>
      <Text numberOfLines={1} style={[styles.text1084, ui.styles["5:1084"]]}>{ui.labels["5:1084"] ?? "받은 계좌"}</Text>
      <Text numberOfLines={1} style={[styles.text1085, ui.styles["5:1085"]]}>{ui.labels["5:1085"] ?? "박도윤 · 모의은행 110-***-482910"}</Text>
      <Text numberOfLines={1} style={[styles.text1086, ui.styles["5:1086"]]}>{ui.labels["5:1086"] ?? "거래번호"}</Text>
      <Text numberOfLines={1} style={[styles.text1087, ui.styles["5:1087"]]}>{ui.labels["5:1087"] ?? "T-20270131-0193"}</Text>
      <Text numberOfLines={1} style={[styles.text1088, ui.styles["5:1088"]]}>{ui.labels["5:1088"] ?? "약정서"}</Text>
      <Text numberOfLines={1} style={[styles.text1089, ui.styles["5:1089"]]}>{ui.labels["5:1089"] ?? "L-20261119-0042"}</Text>
      <Text numberOfLines={1} style={[styles.text1090, ui.styles["5:1090"]]}>{ui.labels["5:1090"] ?? "입금 확인 즉시 자동 발급 · 양쪽 보관함에 저장됨"}</Text>
      <View pointerEvents="none" style={[styles.art1091, ui.styles["5:1091-img"]]}><Graphic8 /></View>
      <Text numberOfLines={1} style={[styles.text1092, ui.styles["5:1092"]]}>{ui.labels["5:1092"] ?? "남은 일정"}</Text>
      <Text numberOfLines={1} style={[styles.text1093, ui.styles["5:1093"]]}>{ui.labels["5:1093"] ?? "남은 원금"}</Text>
      <Text numberOfLines={1} style={[styles.text1094, ui.styles["5:1094"]]}>{ui.labels["5:1094"] ?? "200,000원"}</Text>
      <View pointerEvents="none" style={[styles.art1095, ui.styles["5:1095-img"]]}><Graphic4 /></View>
      <Text numberOfLines={1} style={[styles.text1096, ui.styles["5:1096"]]}>{ui.labels["5:1096"] ?? "2회차 · 2027.02.28"}</Text>
      <Text numberOfLines={1} style={[styles.text1097, ui.styles["5:1097"]]}>{ui.labels["5:1097"] ?? "100,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text1098, ui.styles["5:1098"]]}>{ui.labels["5:1098"] ?? "3회차 · 2027.03.31"}</Text>
      <Text numberOfLines={1} style={[styles.text1099, ui.styles["5:1099"]]}>{ui.labels["5:1099"] ?? "100,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text1100, ui.styles["5:1100"]]}>{ui.labels["5:1100"] ?? "일부만 갚거나 미리 갚으면 남은 일정이 여기서 다시 계산돼요."}</Text>
      <View pointerEvents="none" style={[styles.art1101, ui.styles["5:1101-img"]]}><Graphic2 /></View>
      <Text numberOfLines={1} style={[styles.text1102, ui.styles["5:1102"]]}>{ui.labels["5:1102"] ?? "PDF 저장"}</Text>
      <View pointerEvents="none" style={[styles.art1103, ui.styles["5:1103-img"]]}><Graphic1 /></View>
      <Text numberOfLines={1} style={[styles.text1104, ui.styles["5:1104"]]}>{ui.labels["5:1104"] ?? "상환 원장"}</Text>
      <TouchTarget label={ui.labels["5:1102"] ?? "PDF 저장"} action="records" style={styles.taptext1102} ui={ui} />
      <TouchTarget label={ui.labels["5:1104"] ?? "상환 원장"} action="portfolio" style={styles.taptext1104} ui={ui} />
    </Frame>
  );
}
