import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import theme from '../../global/styles/theme';

const screenWidth = Dimensions.get("window").width;
const heightWidth = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    icon: {
    },
    
   });
