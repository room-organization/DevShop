import { Dimensions, StyleSheet } from 'react-native'
import theme from '../../global/styles/theme'

const height = Dimensions.get('screen').height

export const styles = StyleSheet.create({
  container: {
    height,
    backgroundColor: theme.colors_backgrounds.primary,
  },
  center: {
    marginHorizontal: 20,
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
  },
  hero: {},
})
