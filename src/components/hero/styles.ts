import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import theme from "../../global/styles/theme";

const width = Dimensions.get("screen").width;
const height = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    hero:{
        backgroundColor: theme.colors_backgrounds.hero,
        flexDirection: 'row',
        justifyContent:"space-between",
        borderRadius: 5,
        marginHorizontal:12,
        paddingHorizontal: RFValue(28),
        paddingVertical: RFValue(10),
        borderWidth: 1,

        


    },
    heroContentText:{
        
        width: (width/2)-10,
    },
    heroTitle:{
        color: theme.colors_text.primary,
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "500",
        marginVertical: 5
    },
    heroDescribe:{
        color: theme.colors_text.text,
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "500",
        marginVertical: 5

    },
    heroButton:{
        backgroundColor: theme.colors_backgrounds.secondary,
        width: 83,
        height: 25,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        paddingHorizontal: 8,
        marginVertical: 10
    },
    button:{
        color: theme.colors_text.white,
    },
    heroContentImg:{
        
        justifyContent: "center",
        alignItems: "center"
        // width: (width/2)-10,
        // margin: 10
    },
    heroImg:{
        width: 80,
        height: 80,
    },

});