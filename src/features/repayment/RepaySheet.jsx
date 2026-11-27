import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './RepaySheet.styles';

export default function RepaySheet({ ui }) {
  return (
    <Frame width={390} height={844} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box353, ui.styles["189:353"]]} />
      <View pointerEvents="none" style={[styles.box355, ui.styles["189:355"]]} />
      <View pointerEvents="none" style={[styles.box357, ui.styles["189:357"]]} />
      <Text numberOfLines={1} style={[styles.text358, ui.styles["189:358"]]}>{ui.labels["189:358"] ?? "2회차 갚기"}</Text>
      <Text numberOfLines={1} style={[styles.text359, ui.styles["189:359"]]}>{ui.labels["189:359"] ?? "박도윤님께 100,000원 보내기"}</Text>
      <View pointerEvents="none" style={[styles.box360, ui.styles["189:360"]]} />
      <View pointerEvents="none" style={[styles.box361, ui.styles["189:361"]]} />
      <Text numberOfLines={1} style={[styles.text362, ui.styles["189:362"]]}>{ui.labels["189:362"] ?? "남은 돈 전부"}</Text>
      <View pointerEvents="none" style={[styles.box363, ui.styles["189:363"]]} />
      <Text numberOfLines={1} style={[styles.text364, ui.styles["189:364"]]}>{ui.labels["189:364"] ?? "일부만"}</Text>
      <View pointerEvents="none" style={[styles.box365, ui.styles["189:365"]]} />
      <Text numberOfLines={1} style={[styles.text367, ui.styles["189:367"]]}>{ui.labels["189:367"] ?? "받는 계좌"}</Text>
      <Text numberOfLines={1} style={[styles.text368, ui.styles["189:368"]]}>{ui.labels["189:368"] ?? "박도윤 · 모의은행 110-***-482910"}</Text>
      <Text numberOfLines={1} style={[styles.text369, ui.styles["189:369"]]}>{ui.labels["189:369"] ?? "약정서에 적힌 계좌라 바꿀 수 없어요"}</Text>
      <Text numberOfLines={1} style={[styles.text371, ui.styles["189:371"]]}>{ui.labels["189:371"] ?? "내 출금 계좌"}</Text>
      <Text numberOfLines={1} style={[styles.text372, ui.styles["189:372"]]}>{ui.labels["189:372"] ?? "모의은행 220-***-118734"}</Text>
      <Text numberOfLines={1} style={[styles.text373, ui.styles["189:373"]]}>{ui.labels["189:373"] ?? "출금 가능 1,240,000원"}</Text>
      <Text style={[styles.text374, ui.styles["189:374"]]}>{ui.labels["189:374"] ?? "보내기를 누르면 간편 비밀번호로 한 번 더 확인해요. 보내면 2회차 상환으로 바로 기록되고 영수증이 남아요."}</Text>
      <View pointerEvents="none" style={[styles.box375, ui.styles["189:375"]]} />
      <Text numberOfLines={1} style={[styles.text376, ui.styles["189:376"]]}>{ui.labels["189:376"] ?? "100,000원 보내기"}</Text>
      <TouchTarget label={ui.labels["189:364"] ?? "일부만"} action="repay" style={styles.taptext364} ui={ui} />
      <TouchTarget label={ui.labels["189:376"] ?? "100,000원 보내기"} action="repay" style={styles.taptext376} ui={ui} />
    </Frame>
  );
}
