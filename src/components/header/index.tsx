import { Image, Text, View } from 'react-native'
import {styles} from './styles'
import {Feather} from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons';

export function Header(props) {
    return(
        <View style={styles.container}>
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text style={{ flex: 1, textAlign: 'center' }}>{props.title}</Text>
        </View>

    )
};
