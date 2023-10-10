import 'react-native-gesture-handler'

import AppRoutes from './src/routers/app.routes'
import Toast from 'react-native-toast-message'
import { StripeProvider } from '@stripe/stripe-react-native'

export default function App() {
  return (
    <>
      <StripeProvider publishableKey="pk_test_51NtwKmGnHUUfGMHdFL2PVFRqexmhzSRuSchuH332UK4iIU0kwkHlVh8KA3N6EEa4x2V2rC06nOQ2niqMszHzaLql0080uKLmxh">
        <AppRoutes />
        <Toast />
      </StripeProvider>
    </>
  )
}
