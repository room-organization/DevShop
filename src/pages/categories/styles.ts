import { StyleSheet,StatusBar } from "react-native";
import theme from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
    },
    items: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }

});
