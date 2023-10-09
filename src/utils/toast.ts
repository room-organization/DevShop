import Toast from 'react-native-toast-message'

export function successMessage(message: string) {
  Toast.show({
    type: 'success',
    text1: message,
  })
}

export function errorMessage(message: string) {
  Toast.show({
    type: 'error',
    text1: message,
  })
}
