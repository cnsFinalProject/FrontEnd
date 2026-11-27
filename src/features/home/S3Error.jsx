import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './S3Error.styles';

export default function S3Error({ ui }) {
  return (
    <Frame width={390} height={572} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box68, ui.styles["180:68"]]} />
      <Text numberOfLines={1} style={[styles.text69, ui.styles["180:69"]]}>{ui.labels["180:69"] ?? "예외 상태 · 상황에 따라 목록 위·대신 표시"}</Text>
      <View pointerEvents="none" style={[styles.box70, ui.styles["180:70"]]} />
      <Text numberOfLines={1} style={[styles.text71, ui.styles["180:71"]]}>{ui.labels["180:71"] ?? "아직 약속이 없어요"}</Text>
      <Text numberOfLines={1} style={[styles.text72, ui.styles["180:72"]]}>{ui.labels["180:72"] ?? "돈을 빌려주거나 빌릴 때 차용증을 쓰면 여기서 갚는"}</Text>
      <Text numberOfLines={1} style={[styles.text73, ui.styles["180:73"]]}>{ui.labels["180:73"] ?? "날까지 챙겨 드려요."}</Text>
      <View pointerEvents="none" style={[styles.box74, ui.styles["180:74"]]} />
      <Text numberOfLines={1} style={[styles.text75, ui.styles["180:75"]]}>{ui.labels["180:75"] ?? "차용증 쓰기"}</Text>
      <View pointerEvents="none" style={[styles.box76, ui.styles["180:76"]]} />
      <Text numberOfLines={1} style={[styles.text77, ui.styles["180:77"]]}>{ui.labels["180:77"] ?? "계좌 조회 동의가 7일 뒤 끝나요"}</Text>
      <Text numberOfLines={1} style={[styles.text78, ui.styles["180:78"]]}>{ui.labels["180:78"] ?? "동의가 끝나면 상환 확인과 앱 송금이 멈춰요. 1년마다 한"}</Text>
      <Text numberOfLines={1} style={[styles.text79, ui.styles["180:79"]]}>{ui.labels["180:79"] ?? "번 다시 동의해요."}</Text>
      <View pointerEvents="none" style={[styles.box80, ui.styles["180:80"]]} />
      <Text numberOfLines={1} style={[styles.text81, ui.styles["180:81"]]}>{ui.labels["180:81"] ?? "다시 동의하기"}</Text>
      <View pointerEvents="none" style={[styles.box82, ui.styles["180:82"]]} />
      <Text numberOfLines={1} style={[styles.text83, ui.styles["180:83"]]}>{ui.labels["180:83"] ?? "연결된 계좌를 쓸 수 없어요"}</Text>
      <Text numberOfLines={1} style={[styles.text84, ui.styles["180:84"]]}>{ui.labels["180:84"] ?? "은행에서 계좌가 해지됐거나 연결이 끊겼어요. 본인 명의"}</Text>
      <Text numberOfLines={1} style={[styles.text85, ui.styles["180:85"]]}>{ui.labels["180:85"] ?? "계좌를 다시 연결해 주세요."}</Text>
      <View pointerEvents="none" style={[styles.box86, ui.styles["180:86"]]} />
      <Text numberOfLines={1} style={[styles.text87, ui.styles["180:87"]]}>{ui.labels["180:87"] ?? "계좌 다시 연결"}</Text>
      <TouchTarget label={ui.labels["180:75"] ?? "차용증 쓰기"} action="S4" style={styles.taptext75} ui={ui} />
      <TouchTarget label={ui.labels["180:87"] ?? "계좌 다시 연결"} action="S2" style={styles.taptext87} ui={ui} />
    </Frame>
  );
}
