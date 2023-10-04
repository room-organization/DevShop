import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    padding: 10,
    alignItems: 'center',
    flex: 1,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 10,
    marginBottom: 10,
  },

  imageContainer: {
    width: 100,
    height: 80,
    paddingVertical: 45,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#e6e6e6',
    borderRadius: 10,
  },

  image: {
    objectFit: 'cover',
    width: 80,
    height: 80,
  },

  details: {
    justifyContent: 'space-between',
    height: '100%',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  price: {
    fontSize: 24,
    color: '#40BFFF',
    fontWeight: 'bold',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '68%',
  },

  footer: {},

  icons: {},

  icon: {
    fontSize: 24,
    color: '#FB7181',
  },
})
