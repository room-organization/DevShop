import { Button, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import {styles} from './styles'
import {Feather} from '@expo/vector-icons'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routers/app.routes';
import { useNavigation } from '@react-navigation/native';
import { Dollar } from '../../utils/currency';
import { Product } from '../../utils/types';

type CardProductScreenProp = StackNavigationProp<RootStackParamList, 'Product'>;

interface ProductCardProps {
    data: Product
}

export function ProductCard({ data, ...rest }: ProductCardProps) {
    const navigation = useNavigation<CardProductScreenProp>()

    function openProduct() {
        navigation.navigate('Product', {productId: data.id} );
    }

    return(
        <TouchableOpacity style={styles.container} onPress={openProduct} {...rest}>
              <ImageBackground source={{uri: data.images?.[0]?.url}} style={styles.image}>
                <View style={styles.icon}>
                    <Feather name='heart'  size={8}/>
            
                </View>
            </ImageBackground>
        
            <View style={styles.infoItem}>
                <View style={styles.describe}>
                    <Text style={styles.title}>{data.name}</Text>
                    <Text style={styles.category}>{data.category.name}</Text>
                </View>
                <Text style={styles.price}>{Dollar(data.price)}</Text>
            </View>
        
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}> Add to Card</Text>
                <Feather name='shopping-cart' style={styles.btnIcon}/>
            </TouchableOpacity>
        </TouchableOpacity>

    )
};

