import React, { useEffect } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Linking,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'
import { Header } from '../../components/header'
import theme from '../../global/styles/theme'
import { CartItem } from './components/CartItem'
import { Cupon } from './components/Cupon'
import { Summary } from './components/Summary'
import useCart from '../../hooks/use-cart'
import { api } from '../../lib/axios'
import { RootStackParamList } from '../../routers/app.routes'
import { StackNavigationProp } from '@react-navigation/stack'

type CartScreenProp = StackNavigationProp<RootStackParamList, 'Cart'>

export function Cart() {
  const cart = useCart()
  const items = useCart((state) => state.items)
  const navigation = useNavigation<CartScreenProp>()
  const removeAll = useCart((state) => state.removeAll)

  useEffect(() => {
    // TODO
  }, [navigation, removeAll])

  async function handleCheckout() {
    const response = await api.post('/checkout', {
      productIds: items.map((item) => item.id),
    })

    const checkoutUrl = response.data.url

    await Linking.openURL(checkoutUrl)
  }

  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{ backgroundColor: theme.colors_backgrounds.statusBarItem }}
      >
        <Header />

        <ScrollView style={styles.content}>
          <View style={styles.content}>
            {cart.items.map((item) => (
              <CartItem key={item.id} data={item} />
            ))}
            <Cupon />
            <Summary />
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.button} onPress={handleCheckout}>
          <Text style={styles.textButton}>Checkout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
}
