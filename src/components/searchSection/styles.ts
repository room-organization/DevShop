import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import theme from "../../global/styles/theme";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
export const styles = StyleSheet.create({
    container:{
        height: RFPercentage(6),
        Width: RFPercentage(50),
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal:12,
        alignItems:'center',
        marginVertical: 10,
    },
    searchBar:{
        backgroundColor: theme.colors_backgrounds.searchBar,
        width: RFPercentage(35),
        height: RFPercentage(5),
        borderRadius: 10,
        paddingHorizontal: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center"
    },
    iconSearch:{
        
    },
    iconContainer:{
        backgroundColor:theme.colors_backgrounds.secondary,
        borderRadius: 10,
        width: RFPercentage(5),
        height: RFPercentage(5),
        justifyContent: "center",
        alignItems: "center"
    },
    iconMenu:{
        color: theme.colors_backgrounds.icons    
    }


})