import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { styles } from '../styles'
import { ScrollView } from 'react-native-gesture-handler'
import { Product } from '../../../utils/types'
import { Dollar } from '../../../utils/currency'
import useCart from '../../../hooks/use-cart'

interface ProductInfoProps {
  data: Product
}

export function ProductInfo({ data }: ProductInfoProps) {
  const cart = useCart()

  function handleAddToCart() {
    cart.addItem(data)
  }
  return (
    <View style={styles.container}>
      <View style={styles.showcase}>
        <View style={{ paddingTop: 20 }}>
          <Feather name="arrow-left" size={32} />
        </View>

        <Image source={{ uri: data.images?.[0]?.url }} style={styles.image} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.details}>
          <Text style={styles.title}>{data.name}</Text>
          <View>
            <Text style={styles.price}>{Dollar(data.price)}</Text>

            <View style={{ marginTop: 50 }}>
              <View>
                <Text style={styles.label}>Size: {data.size.value}</Text>
                <Text></Text>
              </View>

              <View style={{ flexDirection: 'row', gap: 4 }}>
                <Text style={styles.label}>Color:</Text>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    backgroundColor: data.color.value,
                  }}
                ></View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
            <Text style={styles.textButton}>Add to cart</Text>
            <Feather name="shopping-cart" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
