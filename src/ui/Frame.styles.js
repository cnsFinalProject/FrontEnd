import { colors } from './colors';
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  clip: { overflow: 'hidden', backgroundColor: colors.surface },
  canvas: { transformOrigin: 'top left', backgroundColor: colors.surface },
  pressed: { backgroundColor: '#7d835c29', borderRadius: 9 },
  field: { minWidth: 160, minHeight: 28, padding: 0, backgroundColor: colors.surface },
});
