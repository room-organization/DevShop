import { StyleSheet, StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import theme from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    borderWidth: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors_backgrounds.primary
  },
  row:{
    flexDirection: 'row',
    gap: 1
    
  },
  info:{
    flexDirection: 'column',
    width: RFValue(60),
    height: RFValue(60),
    marginVertical: RFValue(2),
    borderWidth: 1,
    borderRadius: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon:{
    
  },
  text: {
    color: 'black',
    fontSize: 50,
    // alignSelf: 'flex-start',
  },
})
