import {Dimensions, StyleSheet} from 'react-native'
import {RFPercentage } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.colors_backgrounds.cardItem,
        paddingTop: 30,
        paddingHorizontal: 29,
        flexDirection: 'row',
        paddingBottom: 30,
    },

});
