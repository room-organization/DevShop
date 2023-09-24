import {StyleSheet} from 'react-native'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';


export const styles = StyleSheet.create({
    container:{
        width: RFValue(130),
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        
    },
    infoItem:{
        backgroundColor: theme.colors.background,
        flexDirection: 'column'
    },
    icon:{
        // backgroundColor: 'red',
        alignSelf:'flex-end'
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    describe:{
        fontSize: 13,
    },
    footer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    price:{
        fontWeight: 'bold'
    },


});