import React from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'

import { styles } from './styles'
import { Header } from '../../components/header'
import theme from '../../global/styles/theme'
import { CartItem } from './components/CartItem'
import { Cupon } from './components/Cupon'
import { Summary } from './components/Summary'
import useCart from '../../hooks/use-cart'

export function Cart() {
  const cart = useCart()
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

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Checkout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
}
