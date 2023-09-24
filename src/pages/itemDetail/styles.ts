import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    card: {
      backgroundColor: '#ffffff',
      borderRadius: 10,
      shadowColor: '#000000',
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 10,
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'contain',
    },
    content: {
      padding: 10,
      flex: 1,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    price: {
      fontSize: 16,
      color: '#000000',
      fontWeight: 'bold',
    },
    description: {
      fontSize: 14,
      color: '#000000',
    },
  });