import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './BorrowerOffer.styles';
import Graphic0 from '../../../assets/wire/a6136.svg';

export default function BorrowerOffer({ ui }) {
  return (
    <Frame width={390} height={960} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box2, ui.styles["226:2"]]} />
      <View pointerEvents="none" style={[styles.box3, ui.styles["226:3"]]} />
      <View pointerEvents="none" style={[styles.art5, ui.styles["226:5-img"]]}><Graphic0 /></View>
      <Text numberOfLines={1} style={[styles.text7, ui.styles["226:7"]]}>{ui.labels["226:7"] ?? "조건 협상"}</Text>
      <View pointerEvents="none" style={[styles.box9, ui.styles["226:9"]]} />
      <Text numberOfLines={1} style={[styles.text10, ui.styles["226:10"]]}>{ui.labels["226:10"] ?? "박도윤님과 연결 중"}</Text>
      <View pointerEvents="none" style={[styles.box11, ui.styles["226:11"]]} />
      <View pointerEvents="none" style={[styles.box13, ui.styles["226:13"]]} />
      <Text numberOfLines={1} style={[styles.text14, ui.styles["226:14"]]}>{ui.labels["226:14"] ?? "✓ 1 연결"}</Text>
      <View pointerEvents="none" style={[styles.box16, ui.styles["226:16"]]} />
      <Text numberOfLines={1} style={[styles.text17, ui.styles["226:17"]]}>{ui.labels["226:17"] ?? "2 협상"}</Text>
      <View pointerEvents="none" style={[styles.box19, ui.styles["226:19"]]} />
      <Text numberOfLines={1} style={[styles.text20, ui.styles["226:20"]]}>{ui.labels["226:20"] ?? "3 서명"}</Text>
      <View pointerEvents="none" style={[styles.box22, ui.styles["226:22"]]} />
      <Text numberOfLines={1} style={[styles.text23, ui.styles["226:23"]]}>{ui.labels["226:23"] ?? "4 송금"}</Text>
      <Text numberOfLines={1} style={[styles.text25, ui.styles["226:25"]]}>{ui.labels["226:25"] ?? "빌리는 사람 · 이하린의 화면"}</Text>
      <Text style={[styles.text26, ui.styles["226:26"]]}>{ui.labels["226:26"] ?? "박도윤님이 조건을\n제안했어요"}</Text>
      <Text numberOfLines={1} style={[styles.text27, ui.styles["226:27"]]}>{ui.labels["226:27"] ?? "S7에서 박도윤님이 쓴 조건이 이 폰에 도착했어요"}</Text>
      <View pointerEvents="none" style={[styles.box28, ui.styles["226:28"]]} />
      <Text numberOfLines={1} style={[styles.text29, ui.styles["226:29"]]}>{ui.labels["226:29"] ?? "협상 기록"}</Text>
      <View pointerEvents="none" style={[styles.box31, ui.styles["226:31"]]} />
      <Text numberOfLines={1} style={[styles.text32, ui.styles["226:32"]]}>{ui.labels["226:32"] ?? "1차 제안 · 박도윤 · 내 답 차례"}</Text>
      <Text numberOfLines={1} style={[styles.text33, ui.styles["226:33"]]}>{ui.labels["226:33"] ?? "18:31"}</Text>
      <Text numberOfLines={1} style={[styles.text34, ui.styles["226:34"]]}>{ui.labels["226:34"] ?? "300,000원을 두 번에 나눠 갚는 조건이에요."}</Text>
      <View pointerEvents="none" style={[styles.box35, ui.styles["226:35"]]} />
      <Text numberOfLines={1} style={[styles.text36, ui.styles["226:36"]]}>{ui.labels["226:36"] ?? "받은 조건"}</Text>
      <View pointerEvents="none" style={[styles.box38, ui.styles["226:38"]]} />
      <Text numberOfLines={1} style={[styles.text39, ui.styles["226:39"]]}>{ui.labels["226:39"] ?? "항목"}</Text>
      <Text numberOfLines={1} style={[styles.text40, ui.styles["226:40"]]}>{ui.labels["226:40"] ?? "1차 제안"}</Text>
      <View pointerEvents="none" style={[styles.box42, ui.styles["226:42"]]} />
      <Text numberOfLines={1} style={[styles.text43, ui.styles["226:43"]]}>{ui.labels["226:43"] ?? "원금"}</Text>
      <Text numberOfLines={1} style={[styles.text44, ui.styles["226:44"]]}>{ui.labels["226:44"] ?? "300,000원"}</Text>
      <View pointerEvents="none" style={[styles.box46, ui.styles["226:46"]]} />
      <Text numberOfLines={1} style={[styles.text47, ui.styles["226:47"]]}>{ui.labels["226:47"] ?? "갚는 방식"}</Text>
      <Text numberOfLines={1} style={[styles.text48, ui.styles["226:48"]]}>{ui.labels["226:48"] ?? "2회 · 150,000"}</Text>
      <View pointerEvents="none" style={[styles.box50, ui.styles["226:50"]]} />
      <Text numberOfLines={1} style={[styles.text51, ui.styles["226:51"]]}>{ui.labels["226:51"] ?? "상환일"}</Text>
      <Text numberOfLines={1} style={[styles.text52, ui.styles["226:52"]]}>{ui.labels["226:52"] ?? "12.31 · 01.31"}</Text>
      <View pointerEvents="none" style={[styles.box54, ui.styles["226:54"]]} />
      <Text numberOfLines={1} style={[styles.text55, ui.styles["226:55"]]}>{ui.labels["226:55"] ?? "이자"}</Text>
      <Text numberOfLines={1} style={[styles.text56, ui.styles["226:56"]]}>{ui.labels["226:56"] ?? "연 0%"}</Text>
      <View pointerEvents="none" style={[styles.box58, ui.styles["226:58"]]} />
      <Text numberOfLines={1} style={[styles.text59, ui.styles["226:59"]]}>{ui.labels["226:59"] ?? "지연손해금"}</Text>
      <Text numberOfLines={1} style={[styles.text60, ui.styles["226:60"]]}>{ui.labels["226:60"] ?? "연 5%"}</Text>
      <Text numberOfLines={1} style={[styles.text62, ui.styles["226:62"]]}>{ui.labels["226:62"] ?? "특약"}</Text>
      <Text numberOfLines={1} style={[styles.text63, ui.styles["226:63"]]}>{ui.labels["226:63"] ?? "없음"}</Text>
      <Text style={[styles.text64, ui.styles["226:64"]]}>{ui.labels["226:64"] ?? "조건이 안 맞으면 ‘역제안’으로 바꾸고 싶은 칸만 고쳐서 보내요. 주고받은 기록은 모두 약정서에 붙어요."}</Text>
      <View pointerEvents="none" style={[styles.box65, ui.styles["226:65"]]} />
      <View pointerEvents="none" style={[styles.box66, ui.styles["226:66"]]} />
      <View pointerEvents="none" style={[styles.box67, ui.styles["226:67"]]} />
      <Text numberOfLines={1} style={[styles.text68, ui.styles["226:68"]]}>{ui.labels["226:68"] ?? "거절"}</Text>
      <View pointerEvents="none" style={[styles.box69, ui.styles["226:69"]]} />
      <Text numberOfLines={1} style={[styles.text70, ui.styles["226:70"]]}>{ui.labels["226:70"] ?? "역제안"}</Text>
      <View pointerEvents="none" style={[styles.box71, ui.styles["226:71"]]} />
      <Text numberOfLines={1} style={[styles.text72, ui.styles["226:72"]]}>{ui.labels["226:72"] ?? "이 조건으로 합의"}</Text>
      <TouchTarget label={ui.labels["226:68"] ?? "거절"} action="StopSheet" style={styles.taptext68} ui={ui} />
      <TouchTarget label={ui.labels["226:70"] ?? "역제안"} action="counter" style={styles.taptext70} ui={ui} />
      <TouchTarget label={ui.labels["226:72"] ?? "이 조건으로 합의"} action="agree" style={styles.taptext72} ui={ui} />
    </Frame>
  );
}
