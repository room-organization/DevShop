import { StyleSheet} from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

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
})