import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import theme from "../../global/styles/theme";

const width = Dimensions.get("screen").width;
const height = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    hero:{
        // marginLeft: RFValue(6),
        height:(height/7) ,
        marginTop: 10,

    },
    imageBackground:{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: "center"
    },
    text:{
        textAlign:"center",
        fontWeight: "bold"
    },
    elipseGroup:{
        flexDirection:'row',
        justifyContent: "center",
        borderWidth: 1
    },
    elipse:{
        backgroundColor: theme.colors_backgrounds.btnGreen,
        width: 15,
        height: 15,
        borderRadius: 10,
        marginHorizontal: 5
    },
    elipseOff:{
        backgroundColor: theme.colors_backgrounds.elipseHero,
        width: 15,
        height: 15,
        borderRadius: 10,
        marginHorizontal: 5

    }

});