import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: RFValue(1),
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10
  },
  icon: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    marginVertical: RFValue(2)
  },
})
