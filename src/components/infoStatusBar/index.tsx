import { View, Image, ImageProps, TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { ProductScreenProp } from '../../routers/type.routes'
interface InfoStatusBarProps {
  src: ImageProps
  title: string
}

export const InfoStatusBar = ({ src, title }: InfoStatusBarProps) => {
  const navigation = useNavigation<ProductScreenProp>()

  function openProduct() {
    navigation.navigate('Product')
  }

  return (
    <TouchableOpacity onPress={openProduct} style={styles.Touchable}>
      <View style={styles.container}>
        <Image style={styles.image} source={src} />
      </View>
      <Text style={styles.category}>{title}</Text>
    </TouchableOpacity>
  )
}