import { Dimensions, StyleSheet, StatusBar, Platform } from 'react-native'
import theme from '../../global/styles/theme'
import { RFValue } from 'react-native-responsive-fontsize'


export const styles = StyleSheet.create({
  container: {
    paddingVertical: StatusBar.currentHeight,
    backgroundColor: theme.colors_backgrounds.primary,
  },
  scrollView:{
    backgroundColor: theme.colors_backgrounds.primary,
  },
  
  category: {
    margin: 12,
    color: theme.colors_text.primary,
    fontWeight: '700',
    fontSize: 14,
  },
  


})
