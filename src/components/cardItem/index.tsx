import { Image, Text, View } from 'react-native'
import {styles} from './styles'
import {Feather} from '@expo/vector-icons'
export function CardItem() {
    return(
        <View style={styles.container}>
            <Feather name='heart' style={styles.icon} size={40}/>
            <Image source={require('../../../assets/adaptive-icon.png')} style={styles.image} />
            <View style={styles.infoItem}>
                <Text style={styles.title}>ItemName</Text>
                <Text style={styles.describe}>ItemDescbribe</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.price}>Price</Text>
                <Feather name='arrow-right-circle' size={40} style={styles.icon}/>
            </View>
        </View>

    )
};
