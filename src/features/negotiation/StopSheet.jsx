import { Text, View } from 'react-native';
import { Frame, TouchTarget, EntryField } from '../../ui/Frame';
import styles from './StopSheet.styles';

export default function StopSheet({ ui }) {
  return (
    <Frame width={390} height={844} scale={ui.scale}>
      <View pointerEvents="none" style={[styles.box442, ui.styles["193:442"]]} />
      <View pointerEvents="none" style={[styles.box443, ui.styles["193:443"]]} />
      <View pointerEvents="none" style={[styles.box445, ui.styles["193:445"]]} />
      <Text numberOfLines={1} style={[styles.text446, ui.styles["193:446"]]}>{ui.labels["193:446"] ?? "협상을 그만할까요?"}</Text>
      <View pointerEvents="none" style={[styles.box447, ui.styles["193:447"]]} />
      <Text numberOfLines={1} style={[styles.text448, ui.styles["193:448"]]}>{ui.labels["193:448"] ?? "✓  차용증은 만들어지지 않아요"}</Text>
      <Text numberOfLines={1} style={[styles.text449, ui.styles["193:449"]]}>{ui.labels["193:449"] ?? "✓  오간 돈은 없어요 · 송금은 둘 다 서명한 뒤에만 돼요"}</Text>
      <Text numberOfLines={1} style={[styles.text450, ui.styles["193:450"]]}>{ui.labels["193:450"] ?? "✓  협상 기록은 30일 동안 둘만 보고, 그 뒤 지워져요"}</Text>
      <Text style={[styles.text451, ui.styles["193:451"]]}>{ui.labels["193:451"] ?? "둘 다 서명하기 전에는 누구든 언제든 그만둘 수 있어요. 그만둔 이유는 상대에게 보이지 않아요. 이후 홈 카드에 ‘결렬’로 표시되고, ‘고쳐서 다시 제안’할 수 있어요."}</Text>
      <View pointerEvents="none" style={[styles.box453, ui.styles["193:453"]]} />
      <Text numberOfLines={1} style={[styles.text454, ui.styles["193:454"]]}>{ui.labels["193:454"] ?? "계속 협상하기"}</Text>
      <View pointerEvents="none" style={[styles.box455, ui.styles["193:455"]]} />
      <Text numberOfLines={1} style={[styles.text456, ui.styles["193:456"]]}>{ui.labels["193:456"] ?? "그만하기"}</Text>
      <TouchTarget label={ui.labels["193:454"] ?? "계속 협상하기"} action="back" style={styles.taptext454} ui={ui} />
      <TouchTarget label={ui.labels["193:456"] ?? "그만하기"} action="cancel" style={styles.taptext456} ui={ui} />
    </Frame>
  );
}
