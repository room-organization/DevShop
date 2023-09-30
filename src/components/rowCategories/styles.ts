import {Dimensions, StyleSheet, StatusBar} from 'react-native'
import theme from '../../global/styles/theme';

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
    rowCategories:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 10
    },
    itemRowCategory:{
        height: 30,
        borderRadius: 16,
        padding: 10,
        justifyContent: "center",
        paddingHorizontal: 15,
        borderWidth: 1,
    },
    selectedCategory:{
        // backgroundColor: theme.colors_backgrounds.secondary
    },
    active: {
      backgroundColor: theme.colors_backgrounds.secondary,
    }
});