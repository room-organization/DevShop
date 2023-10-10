import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: RFValue(10),
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    padding: RFValue(15),
    borderWidth: 1,
    borderRadius: 30,
    marginVertical: RFValue(5)
  },
})
