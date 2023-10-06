import React from 'react'
import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import useCart from '../../../../hooks/use-cart'
import { styles } from './styles'

interface CartIconProps {
  size: number
  color: string
}

function CartIconWithBadge({ size, color }: CartIconProps) {
  const { items } = useCart()
  const itemCount = items.length

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Feather name="shopping-cart" color={color} size={size} />
      {itemCount > 0 && (
        <View style={styles.container}>
          <Text style={styles.quantity}>{itemCount}</Text>
        </View>
      )}
    </View>
  )
}

export default CartIconWithBadge
