import 'react-native-gesture-handler'

import AppRoutes from './src/routers/app.routes'
import Toast from 'react-native-toast-message'

export default function App() {
  return (
    <>
      <AppRoutes />
      <Toast />
    </>
  )
}
