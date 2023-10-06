import { StyleSheet, Platform } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: Platform.OS=== 'ios'? RFValue(80): RFValue(40),
  },
})
