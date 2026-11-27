import { Pressable, TextInput, View } from 'react-native';
import styles from './Frame.styles';

export function Frame({ width, height, scale, children }) {
  return <View style={[styles.clip, { width: width * scale, height: height * scale }]}>
    <View style={[styles.canvas, { width, height, transform: [{ scale }] }]}>{children}</View>
  </View>;
}
export function TouchTarget({ label, action, style, ui }) {
  return <Pressable accessibilityRole="button" accessibilityLabel={label} onPress={() => ui.act(action)} style={({ pressed }) => [style, pressed && styles.pressed]} />;
}
export function EntryField({ name, style, ui }) {
  return <TextInput accessibilityLabel={name === 'recipient' ? '받는 사람 이름' : '휴대폰 번호'} keyboardType={name === 'phone' ? 'phone-pad' : 'default'} style={[style, styles.field]} value={ui.fields[name]} onChangeText={(v) => ui.updateField(name, v)} />;
}
