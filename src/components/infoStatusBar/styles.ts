import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
      width: 80,
      height:80,
      borderRadius: 100 / 2,
      borderStyle: "solid",
      borderWidth: 2,
      borderColor: "#848484",
      marginHorizontal: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors_backgrounds.statusBarItem
      
    },
    image: {
      width: 70,
      height: 70,
      borderRadius: 100 / 2,

    },
  });