import { StyleSheet } from 'react-native';
import { colors } from '../../ui/colors';
export default StyleSheet.create({
  page:{width:'100%',maxWidth:480,padding:20,gap:16},
  hero:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:12,gap:10},
  intro:{flex:1,gap:7},logo:{width:88,height:88,borderRadius:22},
  kicker:{fontFamily:'NotoSansKR_700Bold',fontSize:13,color:colors.action},
  title:{fontFamily:'NotoSansKR_700Bold',fontSize:25,color:colors.ink},total:{fontFamily:'NotoSansKR_700Bold',fontSize:30,color:colors.ink},
  tools:{flexDirection:'row',gap:10},row:{padding:14,borderWidth:1,borderColor:colors.line,borderRadius:14,backgroundColor:colors.surface,gap:5},
  hint:{fontFamily:'NotoSansKR_400Regular',fontSize:14,lineHeight:22,color:colors.muted},
  rowTitle:{fontFamily:'NotoSansKR_700Bold',fontSize:16,color:colors.ink},
});
