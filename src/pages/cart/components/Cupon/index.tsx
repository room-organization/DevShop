import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export function Cupon() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter Cupon Code" style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Apply</Text>
      </TouchableOpacity>
    </View>
  )
}
