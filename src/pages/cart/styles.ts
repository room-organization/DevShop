import { StyleSheet, StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flexDirection: 'column',
    flex: 1,
    padding: 10,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    marginBottom: RFValue(60),
  },

  button: {
    backgroundColor: '#3C5A5D',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderRadius: 10,
    marginTop: 35,
    marginBottom: 10
  },

  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
})