import { colors } from './ui/colors';
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  brandRow:{flexDirection:"row",alignItems:"center",gap:6}, brandIcon:{width:30,height:30,borderRadius:8},
  selectedBorrower:{left:197},
  activeRole:{fontFamily:'NotoSansKR_700Bold',color:colors.ink},
  inactiveRole:{fontFamily:'NotoSansKR_400Regular',color:colors.muted},
  unchecked:{backgroundColor:colors.surface,borderWidth:1,borderColor:colors.line},
  invisible:{opacity:0},
  checked:{backgroundColor:colors.action},
  inactiveAccount:{borderColor:colors.line},
  activeAccount:{borderWidth:2,borderColor:colors.action},
  activeRadio:{borderWidth:6,borderColor:colors.action},
  selectedAnswer:{color:colors.action,textDecorationLine:'underline'},
 root:{flex:1,backgroundColor:colors.cream},loading:{flex:1},toolbar:{backgroundColor:colors.ink,paddingHorizontal:12,paddingVertical:4,flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap'},
 brand:{fontFamily:'NotoSansKR_700Bold',fontSize:13,color:colors.surface},nav:{flexDirection:'row',gap:4},navItem:{minHeight:44,paddingHorizontal:4,justifyContent:'center'},navText:{fontFamily:'NotoSansKR_500Medium',fontSize:12,color:colors.surface},
 content:{alignItems:'center',paddingBottom:16},context:{backgroundColor:colors.soft,paddingHorizontal:14,paddingVertical:6},contextText:{fontFamily:'NotoSansKR_500Medium',fontSize:12,color:colors.ink},
 notice:{backgroundColor:'#fff1d2',padding:12},noticeText:{fontSize:14,color:'#523a0b'},mobile:{width:'100%',alignItems:'center'}
});
