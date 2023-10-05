import { StyleSheet, Dimensions } from 'react-native'
import theme from '../../global/styles/theme'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const height = Dimensions.get('screen').height

export const styles = StyleSheet.create({
  hero: {
    height: RFPercentage(32),
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
    width: RFValue(20),
    height: RFValue(20),
    borderRadius: RFValue(20),
    marginHorizontal: RFValue(10),
  },
  elipseOff: {
    backgroundColor: theme.colors_backgrounds.elipseHero,
    width: RFValue(20),
    height: RFValue(20),
    borderRadius: RFValue(20),
    marginHorizontal: RFValue(10),
  },
})
