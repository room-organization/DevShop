import { Platform } from 'react-native'
import Toast from 'react-native-toast-message'

export function successMessage(message: string) {
  Toast.show({
    type: 'success',
    text1: message,
    position: Platform.OS==='android'? 'bottom': 'top'
  })
}

export function errorMessage(message: string) {
  Toast.show({
    type: 'error',
    text1: message,
    position: Platform.OS==='android'? 'bottom': 'top'
  })
}

export function alertMessage(message: string) {
  Toast.show({
    type: 'info',
    text1: message,
    position: Platform.OS==='android'? 'bottom': 'top'
  })
}