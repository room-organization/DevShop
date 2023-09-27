import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import theme from "../../global/styles/theme";

const width = Dimensions.get("screen").width;
const height = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    hero:{
        marginLeft: RFValue(6),
        width: width - RFPercentage(2),
        height:(height/9) ,
        marginTop: 10,

    },
    imageBackground:{
        flex: 1,
        resizeMode: 'cover',
    },
    text:{
        textAlign:"center",
        textAlignVertical: 'center',
    }

});