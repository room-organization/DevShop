import {Dimensions, StyleSheet} from 'react-native'
import {RFPercentage } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});