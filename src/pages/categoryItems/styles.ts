import {Dimensions, StyleSheet, StatusBar} from 'react-native'
import theme from '../../global/styles/theme';

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
    container:{
        paddingTop: StatusBar.currentHeight,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: 'black'
    }
})
;
