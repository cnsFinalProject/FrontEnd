import { Pressable, Text, TextInput, View } from 'react-native';
import s from './Kit.styles';
export function Card({ title, children }) { return <View style={s.card}>{title && <Text style={s.title}>{title}</Text>}{children}</View>; }
export function Line({ caption, value }) { return <View style={s.line}><Text style={s.caption}>{caption}</Text><Text style={s.value}>{value}</Text></View>; }
export function Button({ title, onPress, subtle=false }) { return <Pressable accessibilityRole="button" onPress={onPress} style={({ pressed }) => [s.button, subtle && s.secondary, pressed && s.pressed]}><Text style={[s.buttonText, subtle && s.secondaryText]}>{title}</Text></Pressable>; }
export function Field({ label, value, onChangeText, numeric=false }) { return <View style={s.field}><Text style={s.caption}>{label}</Text><TextInput accessibilityLabel={label} keyboardType={numeric ? 'number-pad' : 'default'} value={value} onChangeText={onChangeText} style={s.input} /></View>; }
export function Heading({ step, title, children }) { return <View style={s.heading}><Text style={s.step}>{step}</Text><Text accessibilityRole="header" style={s.h1}>{title}</Text>{children && <Text style={s.explain}>{children}</Text>}</View>; }
export const money=(n)=>n.toLocaleString('ko-KR')+'원';
