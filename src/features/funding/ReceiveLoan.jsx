import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './ReceiveLoan.styles';

export default function ReceiveLoan({ ui }) {
  return (
    <Frame width={390} height={844} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box46, ui.styles["224:46"]]} />
      <View pointerEvents="none" style={[styles.box47, ui.styles["224:47"]]} />
      <Text numberOfLines={1} style={[styles.text48, ui.styles["224:48"]]}>{ui.labels["224:48"] ?? "돈 받기"}</Text>
      <Text numberOfLines={1} style={[styles.text49, ui.styles["224:49"]]}>{ui.labels["224:49"] ?? "4 송금"}</Text>
      <Text numberOfLines={1} style={[styles.text51, ui.styles["224:51"]]}>{ui.labels["224:51"] ?? "빌리는 사람 · 이하린의 화면"}</Text>
      <View pointerEvents="none" style={[styles.box53, ui.styles["224:53"]]} />
      <View pointerEvents="none" style={[styles.box54, ui.styles["224:54"]]} />
      <Text style={[styles.text55, ui.styles["224:55"]]}>{ui.labels["224:55"] ?? "약정이 맺어졌어요\n박도윤님이 돈을 보낼 차례예요"}</Text>
      <Text numberOfLines={1} style={[styles.text56, ui.styles["224:56"]]}>{ui.labels["224:56"] ?? "나는 누를 것 없이 기다리면 돼요"}</Text>
      <View pointerEvents="none" style={[styles.box57, ui.styles["224:57"]]} />
      <Text numberOfLines={1} style={[styles.text59, ui.styles["224:59"]]}>{ui.labels["224:59"] ?? "받을 돈"}</Text>
      <Text numberOfLines={1} style={[styles.text60, ui.styles["224:60"]]}>{ui.labels["224:60"] ?? "300,000원"}</Text>
      <Text numberOfLines={1} style={[styles.text62, ui.styles["224:62"]]}>{ui.labels["224:62"] ?? "보내는 사람"}</Text>
      <Text numberOfLines={1} style={[styles.text63, ui.styles["224:63"]]}>{ui.labels["224:63"] ?? "박도윤"}</Text>
      <Text numberOfLines={1} style={[styles.text65, ui.styles["224:65"]]}>{ui.labels["224:65"] ?? "받는 계좌"}</Text>
      <Text numberOfLines={1} style={[styles.text66, ui.styles["224:66"]]}>{ui.labels["224:66"] ?? "모의은행 3333-**-102948"}</Text>
      <Text numberOfLines={1} style={[styles.text67, ui.styles["224:67"]]}>{ui.labels["224:67"] ?? "약정서에 적힌 내 계좌로만 들어와요"}</Text>
      <View pointerEvents="none" style={[styles.box68, ui.styles["224:68"]]} />
      <Text numberOfLines={1} style={[styles.text69, ui.styles["224:69"]]}>{ui.labels["224:69"] ?? "문서번호 L-20261119-0042 · 체결 18:42"}</Text>
      <Text numberOfLines={1} style={[styles.text70, ui.styles["224:70"]]}>{ui.labels["224:70"] ?? "300,000원 · 무이자 · 3회 (01.31 ~ 03.31)"}</Text>
      <View pointerEvents="none" style={[styles.box71, ui.styles["224:71"]]} />
      <View pointerEvents="none" style={[styles.box72, ui.styles["224:72"]]} />
      <Text numberOfLines={1} style={[styles.text73, ui.styles["224:73"]]}>{ui.labels["224:73"] ?? "3"}</Text>
      <Text style={[styles.text74, ui.styles["224:74"]]}>{ui.labels["224:74"] ?? "금전 교부   · 돈이 들어오면 이 문서번호에 묶여요"}</Text>
      <Text style={[styles.text75, ui.styles["224:75"]]}>{ui.labels["224:75"] ?? "송금 대기"}</Text>
      <View pointerEvents="none" style={[styles.box77, ui.styles["224:77"]]} />
      <Text numberOfLines={1} style={[styles.text78, ui.styles["224:78"]]}>{ui.labels["224:78"] ?? "홈에서 기다리기"}</Text>
      <TouchTarget label={ui.labels["224:78"] ?? "홈에서 기다리기"} action="home" style={styles.taptext78} ui={ui} />
    </Frame>
  );
}
