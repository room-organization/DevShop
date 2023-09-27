import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const height = Dimensions.get("screen").height;
export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 3,
        //backgroundColor: 'blue',
        height: 120, 
    }
   });