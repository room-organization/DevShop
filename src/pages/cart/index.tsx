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
import { api } from '../../lib/axios'

import { errorMessage, successMessage } from '../../utils/toast'
import { useStripe } from '@stripe/stripe-react-native'

export function Cart() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe()
  const cart = useCart()
  const items = useCart((state) => state.items)

  const removeAll = useCart((state) => state.removeAll)

  async function handleCheckout() {
    const response = await api.post('/checkout-mobile', {
      productIds: items.map((item) => item.id),
    })

    const { error } = await initPaymentSheet({
      paymentIntentClientSecret: response.data.paymentIntent,
      merchantDisplayName: 'Room, INC',
    })

    if (error) {
      console.error('Error initializing PaymentSheet:', error)
      return
    }

    const { error: presentError } = await presentPaymentSheet()

    if (presentError) {
      console.error('Error presenting PaymentSheet:', presentError)
      return
    }
    removeAll()
    successMessage('Payment made successfully')
  }

  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{ backgroundColor: theme.colors_backgrounds.statusBarItem }}
      >
        <Header />

        <ScrollView style={styles.content}>
          <View>
            {cart.items.map((item) => (
              <CartItem key={item.id} data={item} />
            ))}
            <Cupon />
            <Summary />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleCheckout}>
            <Text style={styles.textButton}>Checkout</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
