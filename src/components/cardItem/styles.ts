import {Dimensions, StyleSheet} from 'react-native'
import {RFPercentage } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

const width = Dimensions.get('screen').width;
export const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.colors_backgrounds.cardItem,
        width: (width/2)- 20,
        borderRadius: 5,
        padding: 5,
        margin: 10,
        
    },
    infoItem:{
        flexDirection: 'column'
    },
    icon:{
        alignSelf:'flex-end',
        backgroundColor: theme.colors_backgrounds.icons,
        width: 50,
        height: 50,
        borderRadius: 100 / 2,
        justifyContent: "center",
        alignItems: "center",
    },
    image:{
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },
    
    title:{
        color: theme.colors_text.itemName
    },

    price:{
        color: theme.colors_text.price
    },
    rowCard:{
        flexDirection: 'row'
    }


});