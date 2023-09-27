import { Dimensions, StyleSheet } from "react-native";
import theme from "../../global/styles/theme";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const width = Dimensions.get("screen").width;
const height = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    container:{
        // width: width - RFPercentage(2),
        // marginHorizontal : 10 ,
        height: height,
        backgroundColor: theme.colors_backgrounds.primary
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal:12,
        marginVertical: 10,
    },
    category:{
        color: theme.colors_text.primary,
        fontWeight: "700",
        fontSize: 14
    }, 
    more:{
        color: theme.colors_text.secondary,
        fontWeight: "700",
        fontSize: 8
    },

    scrollView:{
       height: height- RFPercentage(20),
        marginTop: 8,

    }, hero:{
        
    }
});