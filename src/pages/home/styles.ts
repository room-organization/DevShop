import { Dimensions, StyleSheet, StatusBar } from 'react-native'
import theme from '../../global/styles/theme'


export const styles = StyleSheet.create({
  container: {
    paddingVertical: StatusBar.currentHeight,
    backgroundColor: theme.colors_backgrounds.primary,
  },
  scrollView:{
    backgroundColor: theme.colors_backgrounds.primary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginVertical: 10,
  },
  category: {
    color: theme.colors_text.primary,
    fontWeight: '700',
    fontSize: 14,
  },
  more: {
    color: theme.colors_text.secondary,
    fontWeight: '700',
    fontSize: 8,
  },
  itens: {
    //    height: height- RFPercentage(20),
    // borderWidth: 1
  },

})
