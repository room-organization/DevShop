import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
      width: 80,
      height:80,
      borderRadius: 50 ,
      borderColor: "#848484",
      marginHorizontal: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors_backgrounds.statusBarItem
    },
    image: {
      width: 70,
      height: 70,
      borderRadius: 50,
    },
    category:{
      color: theme.colors_text.itemName,
      fontSize: 10,
      fontStyle: "normal",
      fontWeight: "500",
      alignSelf: "center",
      // marginVertical: RFValue(10)
      
    }
  });