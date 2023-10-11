import { StyleSheet } from 'react-native'
import theme from '../../global/styles/theme'
import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  Touchable:{
    maxWidth: RFValue(70),
  },
  container: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors_backgrounds.statusBarItem,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  category: {
    color: theme.colors_text.itemName,
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '500',
    alignSelf: 'center',
    marginVertical: RFValue(1)
  },
})
