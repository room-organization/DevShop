import { StyleSheet,StatusBar } from "react-native";
import theme from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container: {
        // paddingTop: StatusBar.currentHeight,
        paddingBottom: 30,
    },
    items: {
        justifyContent: 'center',
        flexDirection: 'column',
        marginHorizontal: 40,
        backgroundColor: 'white',
    }

});
