import { Image, Text, View } from 'react-native'
import {styles} from './styles'
import {Feather} from '@expo/vector-icons'
export function CardItem() {
    return(
        <View style={styles.container}>
            <Feather name='shopping-cart' style={styles.icon} size={40}/>
            <Image source={require('../../assets/images/T_Shirt.png')} style={styles.image} />
            <View style={styles.infoItem}>
                <Text style={styles.title}>ItemName</Text>
                <Text style={styles.describe}>ItemDescbribe</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.price}>Price</Text>
            </View>
        </View>

    )
};
