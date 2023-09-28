import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import theme from '../../global/styles/theme';

const screenWidth = Dimensions.get("window").width;
const heightWidth = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        width: 90,
    },
    icon: {
        backgroundColor: 'lightgray', 
        width: 60,
        height: 60,
        borderRadius: 60,
        marginVertical: 7,
        marginHorizontal: 5,
        alignItems:"center",
        justifyContent: "center"
    },
    
   });
