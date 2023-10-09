import { View, Text } from 'react-native'
import { styles } from './styles'
import { DollarNumber } from '../../../../utils/currency'
import useCart from '../../../../hooks/use-cart'

export function Summary() {
  const items = useCart((state) => state.items)

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0)

  return (
    <View style={styles.container}>
      <Text style={{ paddingBottom: 15, fontSize: 18 }}>Order Summary</Text>

      <View style={styles.total}>
        <Text style={styles.label}>Order Total:</Text>
        <Text style={styles.price}>{DollarNumber(totalPrice)}</Text>
      </View>
    </View>
  )
}
