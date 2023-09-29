import { Dimensions, StyleSheet } from "react-native";
import theme from "../../global/styles/theme";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const width = Dimensions.get("screen").width;
const height = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    container:{
        height: height,
        backgroundColor: theme.colors_backgrounds.primary,
    },
    center:{
        marginHorizontal: 20
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
    rowCategories:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 10

    },
    itemRowCategory:{
        backgroundColor: theme.colors_backgrounds.secondary,
        // width: 89,
        height: 30,
        borderRadius: 16,
        padding: 10,
        justifyContent: "center",
        paddingHorizontal: 15
    },
    itens:{
    //    height: height- RFPercentage(20),
    }
    , hero:{
        
    }
});