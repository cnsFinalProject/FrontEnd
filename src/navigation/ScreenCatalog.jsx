import { Pressable, Text, View } from 'react-native';
import { groups } from './catalog';
import { screens } from './screens';
import { roleTitle } from '../domain/contract';
import s from './ScreenCatalog.styles';
export default function ScreenCatalog({ role, select }) {
 return <View style={s.page}><Text style={s.heading}>{roleTitle[role]}의 화면 순서</Text>
 {groups.map(([key,title,list])=>{
   const ids=list.split(' ').filter(id=>['both',role].includes(screens[id].role));
   if(!ids.length)return null;
   return <View style={s.group} key={key}><Text style={s.title}>{title}</Text>{ids.map(id=><Pressable accessibilityRole="button" accessibilityLabel={'시안 '+id} key={id} onPress={()=>select(id)} style={s.row}><Text style={s.code}>{id}</Text><Text style={s.label}>{screens[id].title}</Text></Pressable>)}</View>;
 })}</View>;
}
