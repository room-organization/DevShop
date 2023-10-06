import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  showcase: {
    backgroundColor: '#D9D9D999',
    shadowColor: '#000000',
    padding: 5,
  },

  icon: {
    color: '#FFF',
    fontSize: 24,
  },

  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },

  details: {
    color: '#00000',
    padding: 30,
  },

  title: {
    fontSize: 40,
    paddingBottom: 10,
    fontWeight: 'bold',
  },

  label: {
    color: '#00000',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 0,
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: '#3C5A5D',
    fontWeight: 'bold',
    fontSize: 24,
    height: 60,
    width: 300,
    gap: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  textButton: {
    color: '#FFF',
    fontSize: 18,
  },

  price: {
    fontSize: 32,
    color: '#000000',
  },
})
