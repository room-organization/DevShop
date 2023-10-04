import { StyleSheet, Dimensions } from 'react-native'
import theme from '../../global/styles/theme'

const height = Dimensions.get('screen').height

export const styles = StyleSheet.create({
  hero: {
    height: height / 5,
    marginTop: 10,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  elipseGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  elipse: {
    backgroundColor: theme.colors_backgrounds.btnGreen,
    width: 15,
    height: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  elipseOff: {
    backgroundColor: theme.colors_backgrounds.elipseHero,
    width: 15,
    height: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
})
