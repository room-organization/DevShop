import { StyleSheet } from 'react-native'
import theme from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors_backgrounds.primary,
    borderRadius: 5,
    padding: 15,
    margin: 10,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: theme.colors_backgrounds.secondary,
  },
  infoItem: {
    flexDirection: 'column',
  },
  icon: {
    alignSelf: 'flex-end',
    backgroundColor: theme.colors_backgrounds.primary,
    width: 14,
    height: 14,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    // resizeMode: 'contain',
  },
  describe: {
    marginVertical: 5,
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
  },
  category: {
    fontWeight: '500',
    fontSize: 11,
  },
  price: {
    fontWeight: '500',
    fontSize: 11,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: theme.colors_backgrounds.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 6,
    paddingVertical: 4,
    gap: 4,
    borderRadius: 8,
  },
  btnText: {
    color: theme.colors_backgrounds.primary,
  },
  btnIcon: {
    color: theme.colors_backgrounds.primary,
  },
  rowCard: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
