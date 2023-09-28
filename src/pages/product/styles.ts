import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#FFF"
    }, 

    showcase: {
      backgroundColor: '#D9D9D999',
      shadowColor: '#000000',
      padding: 5
    },

    icon: {
      marginLeft: "2%",
      marginTop: "4%",
      backgroundColor: "#FFF",
      width: 48,
      height: 48,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 24,
    },

    image: {
      width: '100%',
      height: 200,
      resizeMode: 'contain',
    }, 

    details: {
      color: "#00000",
      padding: 30,
    },

    title: {
      fontSize: 24,
      paddingBottom: 5,
      fontWeight: 'bold',
    },

    label: {
      color: "#00000",
      fontWeight: "bold",
      fontSize: 18,
      paddingBottom: 20,
    },

    paymentContainer: {
      backgroundColor: "#D9D9D999",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 30,
      padding:10,
      alignItems: "center",
    },

    priceContainer: {
      gap: 2,
    }, 
    
    button: {
      backgroundColor: "#3C5A5D",
      fontWeight: "bold",
      fontSize: 16,
      height: 30,
      paddingVertical: 16,
      paddingHorizontal: 32,
      borderRadius: 18,
    },

    textButton: {
      color: "#FFF",
      fontSize: 18,
    },

    priceText: {
      color: "#685959",
      fontSize: 16,
    },

    price: {
      fontSize: 20,
      color: '#000000',
      fontWeight: 'bold',
    },
    
    description: {
      fontSize: 14,
      color: '#000000',
    },
    
  });