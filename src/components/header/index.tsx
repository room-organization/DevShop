import { Image, Text, View } from 'react-native'
import {styles} from './styles'
import {Feather} from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../routers/app.routes';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeProductScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;





export function Header() {

    const navigation = useNavigation<HomeProductScreenProp>()

    function openHome() {
        navigation.navigate('Home');
    }

    return(
        <View style={styles.container}>
            <Ionicons name="arrow-back" size={24} color="black" onPress={openHome}/>
            <Text style={{ flex: 1, textAlign: 'center' }}>My Cart</Text>
        </View>

    )
};
