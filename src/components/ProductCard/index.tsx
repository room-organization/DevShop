import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../routers/app.routes'
import { useNavigation } from '@react-navigation/native'
import { Dollar } from '../../utils/currency'
import { Product } from '../../utils/types'
import useCart from '../../hooks/use-cart'

import { styles } from './styles'

type CardProductScreenProp = StackNavigationProp<RootStackParamList, 'Product'>

interface ProductCardProps {
  data: Product
}

export function ProductCard({ data, ...rest }: ProductCardProps) {
  const navigation = useNavigation<CardProductScreenProp>()

  const cart = useCart()

  function openProduct() {
    navigation.navigate('Product', { productId: data.id })
  }

  function handleAddToCart() {
    cart.addItem(data)
  }

  return (
    <TouchableOpacity style={styles.container} onPress={openProduct} {...rest}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{ uri: data.images?.[0]?.url }}
          style={styles.image}
        />
      </View>

      <View style={styles.infoItem}>
        <View style={styles.describe}>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.category}>{data.category.name}</Text>
        </View>
        <Text style={styles.price}>{Dollar(data.price)}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.btnText}> Add to Cart </Text>
        <Feather name="shopping-cart" style={styles.btnIcon} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}
