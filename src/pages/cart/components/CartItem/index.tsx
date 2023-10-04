import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { styles } from './styles'
import { Dollar } from '../../../../utils/currency'
import { Product } from '../../../../utils/types'
import useCart from '../../../../hooks/use-cart'

interface CartItemProps {
  data: Product
}

export function CartItem({ data }: CartItemProps) {
  const cart = useCart()

  function handleRemove() {
    cart.removeItem(data.id)
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: data.images?.[0]?.url }} />
      </View>

      <View style={styles.details}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>{data.name}</Text>
          </View>

          <View style={styles.icons}>
            <TouchableOpacity onPress={handleRemove}>
              <Feather name="trash" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.price}>{Dollar(data.price)}</Text>
        </View>
      </View>
    </View>
  )
}
