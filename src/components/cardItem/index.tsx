import { Button, Image, Text, TouchableOpacity, View } from 'react-native'
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
            <View style={styles.icon}>
                <Feather name='heart'  size={30}/>
            </View>
            <Image source={require('../../assets/images/T_Shirt.png')} style={styles.image} />
            <View style={styles.infoItem}>
               <Text style={styles.title}>T-shirt</Text>
                <Text style={styles.price}>180.00MT</Text>
            </View>
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
