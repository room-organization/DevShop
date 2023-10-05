import { View, Image, ImageProps, TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { CategoriesScreenProp } from '../../routers/type.routes'
interface InfoStatusBarProps {
  src: ImageProps
}

export const InfoStatusBar = ({ src }: InfoStatusBarProps) => {
  const navigation = useNavigation<CategoriesScreenProp>()

  function openCategories() {
    navigation.navigate('Categories')
  }

  return (
    <TouchableOpacity onPress={openCategories}>
      <View style={styles.container}>
        <Image style={styles.image} source={src} />
      </View>
      <Text style={styles.category}>Category</Text>
    </TouchableOpacity>
  )
}
