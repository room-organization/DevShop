import { StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import theme from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors_backgrounds.primary,
    height: RFPercentage(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    padding: 15,
  },
  searchBar: {
    backgroundColor: theme.colors_backgrounds.primary,
    height: RFPercentage(5),
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors_backgrounds.lightBlue,
  },
  iconSearch: {
    marginHorizontal: 10,
    color: theme.colors_backgrounds.icons,
  },
  iconContainer: {
    backgroundColor: theme.colors_backgrounds.secondary,
    borderRadius: 10,
    height: RFPercentage(5),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  iconMenu: {
    color: theme.colors_backgrounds.primary,
  },
  placeholder: {
    color: theme.colors_text.secondary,
  },
})
