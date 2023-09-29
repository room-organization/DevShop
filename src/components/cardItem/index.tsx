import { Button, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import {styles} from './styles'
import {Feather} from '@expo/vector-icons'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routers/app.routes';
import { useNavigation } from '@react-navigation/native';

type CardProductScreenProp = StackNavigationProp<RootStackParamList, 'Product'>;



export function CardItem() {
    const navigation = useNavigation<CardProductScreenProp>()

    function openProduct() {
        navigation.navigate('Product');
    }
    return(
        <TouchableOpacity style={styles.container} onPress={openProduct}>
            
            <ImageBackground source={require('../../assets/images/card1.png')} style={styles.image}>
                <View style={styles.icon}>
                    <Feather name='heart'  size={8}/>
            
                </View>
            </ImageBackground>
        
            <View style={styles.infoItem}>
                <View style={styles.describe}>
                    <Text style={styles.title}>T-shirt</Text>
                    <Text style={styles.category}>Category</Text>
                </View>
                <Text style={styles.price}>180.00MT</Text>
            </View>
        
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}> Add to Card</Text>
                <Feather name='shopping-cart' style={styles.btnIcon}/>
            </TouchableOpacity>
        </TouchableOpacity>

    )
};
export function RowCard() {
    return(
        <View style={styles.rowCard}>
            <CardItem/>
            <CardItem/>
        </View>
    )
}
