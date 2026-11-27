import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './S1Error.styles';

export default function S1Error({ ui }) {
  return (
    <Frame width={390} height={402} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box49, ui.styles["177:49"]]} />
      <Text numberOfLines={1} style={[styles.text50, ui.styles["177:50"]]}>{ui.labels["177:50"] ?? "예외 상태 · 인증 결과에 따라 카드 대신 표시"}</Text>
      <View pointerEvents="none" style={[styles.box51, ui.styles["177:51"]]} />
      <Text numberOfLines={1} style={[styles.text52, ui.styles["177:52"]]}>{ui.labels["177:52"] ?? "만 19세 이상만 쓸 수 있어요"}</Text>
      <Text numberOfLines={1} style={[styles.text53, ui.styles["177:53"]]}>{ui.labels["177:53"] ?? "미성년자가 맺은 금전 약속은 나중에 취소될 수 있어서"}</Text>
      <Text numberOfLines={1} style={[styles.text54, ui.styles["177:54"]]}>{ui.labels["177:54"] ?? "가입을 막아요."}</Text>
      <View pointerEvents="none" style={[styles.box55, ui.styles["177:55"]]} />
      <Text numberOfLines={1} style={[styles.text56, ui.styles["177:56"]]}>{ui.labels["177:56"] ?? "닫기"}</Text>
      <View pointerEvents="none" style={[styles.box57, ui.styles["177:57"]]} />
      <Text numberOfLines={1} style={[styles.text58, ui.styles["177:58"]]}>{ui.labels["177:58"] ?? "이미 가입된 계정이 있어요"}</Text>
      <Text numberOfLines={1} style={[styles.text59, ui.styles["177:59"]]}>{ui.labels["177:59"] ?? "같은 본인인증 정보로 만든 계정이 있어요. 한 사람당"}</Text>
      <Text numberOfLines={1} style={[styles.text60, ui.styles["177:60"]]}>{ui.labels["177:60"] ?? "계정 하나만 쓸 수 있어요."}</Text>
      <View pointerEvents="none" style={[styles.box61, ui.styles["177:61"]]} />
      <Text numberOfLines={1} style={[styles.text62, ui.styles["177:62"]]}>{ui.labels["177:62"] ?? "그 계정으로 로그인"}</Text>
      <TouchTarget label={ui.labels["177:56"] ?? "닫기"} action="back" style={styles.taptext56} ui={ui} />
      <TouchTarget label={ui.labels["177:62"] ?? "그 계정으로 로그인"} action="S1" style={styles.taptext62} ui={ui} />
    </Frame>
  );
}
