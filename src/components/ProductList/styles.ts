import { StyleSheet, Platform } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 10,
    marginBottom: Platform.OS === 'ios' ? RFValue(80) : RFValue(40),
  },
})
