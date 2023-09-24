import {StyleSheet} from 'react-native'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';


export const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.colors1.backgroundProduct,
        width: RFValue(200),
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        
    },
    infoItem:{
        flexDirection: 'column'
    },
    icon:{
        alignSelf:'flex-end',
    },
    image:{
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },    
    title:{
        color: theme.colors1.title,
        fontSize: 20,
        fontWeight: 'bold',
    },
    describe:{
        color: theme.colors1.describe,
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