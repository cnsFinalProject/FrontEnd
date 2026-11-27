import { colors } from '../../ui/colors';
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  page:{width:'100%',maxWidth:480,padding:20,gap:14},
  pad:{height:140,borderWidth:1,borderColor:colors.line,borderRadius:12,overflow:'hidden',backgroundColor:colors.cream,touchAction:'none'},
  ink:{...StyleSheet.absoluteFillObject}, consent:{paddingVertical:12},consentText:{fontSize:15,color:colors.ink},
});
