import { StyleSheet } from 'react-native'
import theme from '../../global/styles/theme'
import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#3C5A5D',
    borderLeftWidth: 2,
    borderLeftColor: '#3C5A5D',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
    padding: RFValue(10),
    margin: RFValue(5),
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

  imageContainer: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#D9D9D9',
  },

  image: {
    width: 130,
    height: 130,
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
    fontSize: 14,
    opacity: 0.7,
  },
  price: {
    fontWeight: '500',
    fontSize: 18,
  },
  button: {
    borderRadius: 999,
    flexDirection: 'row',
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#979797',
    backgroundColor: '#3C5A5D',
  },
  btnText: {
    color: theme.colors_backgrounds.primary,
  },
  btnIcon: {
    color: theme.colors_backgrounds.primary,
    fontSize: 14,
  },
  rowCard: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
