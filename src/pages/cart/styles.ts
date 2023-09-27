import {Dimensions, StyleSheet, StatusBar} from 'react-native'
import {RFPercentage } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
    container:{
        paddingTop: StatusBar.currentHeight,
        flexDirection: 'column',
        flex: 1,

    },
    heading: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center'
    },
    content: {
        marginHorizontal: 29,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: theme.colors_backgrounds.primary,


    },

});
