import { Image, Text, View } from 'react-native'
import {styles} from './styles'
import {Feather} from '@expo/vector-icons'
export function CardItem() {
    return(
        <View style={styles.container}>
            <View style={styles.icon}>
                <Feather name='heart'  size={30}/>
            </View>
            <Image source={require('../../assets/images/T_Shirt.png')} style={styles.image} />
            <View style={styles.infoItem}>
               <Text style={styles.title}>T-shirt</Text>
                <Text style={styles.price}>180.00MT</Text>
            </View>
            </View>

    )
};
