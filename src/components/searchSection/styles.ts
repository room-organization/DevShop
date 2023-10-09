import { StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import theme from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    height: RFPercentage(7),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 2
  },
  searchBar: {
    backgroundColor: theme.colors_backgrounds.primary,
    height: RFPercentage(6),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    flexGrow: 1,
    marginHorizontal: 5,
    borderColor: theme.colors_backgrounds.lightBlue,
  },
  iconSearch: {
    marginHorizontal: 20,
    color: theme.colors_backgrounds.icons,
  },
  textInput:{
    flexGrow: 1,
    height: RFPercentage(6),


  },
  iconContainer: {
    backgroundColor: theme.colors_backgrounds.secondary,
    borderRadius: 10,
    padding: 9,
  },
  iconMenu: {
    color: theme.colors_backgrounds.primary,
  }
})
