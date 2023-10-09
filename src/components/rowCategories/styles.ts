import { StyleSheet } from 'react-native'
import theme from '../../global/styles/theme'

export const styles = StyleSheet.create({
  rowCategories: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  scroll:{
    marginHorizontal: 2,
  },
  itemRowCategory: {
    height: 30,
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderWidth: 1,
    marginHorizontal: 10
  },
  active: {
    backgroundColor: theme.colors_backgrounds.secondary,
  },
})
