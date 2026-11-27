import { colors } from './colors';
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  card:{backgroundColor:colors.surface,borderRadius:16,padding:18,gap:12,borderWidth:1,borderColor:colors.line},
  title:{fontFamily:'NotoSansKR_700Bold',fontSize:16,color:colors.ink},
  line:{flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between',gap:14},
  caption:{fontSize:14,color:colors.muted,fontFamily:'NotoSansKR_400Regular'}, value:{flexShrink:1,textAlign:'right',fontFamily:'NotoSansKR_500Medium',color:colors.ink,fontSize:16},
  button:{minHeight:49,justifyContent:'center',alignItems:'center',backgroundColor:colors.action,borderRadius:14,paddingHorizontal:14,paddingVertical:10},
  buttonText:{fontFamily:'NotoSansKR_700Bold',fontSize:15,color:colors.surface},secondary:{backgroundColor:colors.soft},secondaryText:{color:colors.action},pressed:{opacity:.72},
  field:{gap:5},input:{borderWidth:1,borderColor:colors.line,backgroundColor:colors.surface,padding:12,borderRadius:10,fontSize:16,color:colors.ink},
  heading:{gap:6,marginTop:6,marginBottom:8},step:{color:colors.action,fontFamily:'NotoSansKR_700Bold',fontSize:13},h1:{fontSize:25,color:colors.ink,fontFamily:'NotoSansKR_700Bold'},explain:{fontSize:15,lineHeight:23,color:colors.muted,fontFamily:'NotoSansKR_400Regular'}
});
