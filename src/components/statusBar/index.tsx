import { View } from 'react-native'
import { styles } from './styles'
import { InfoStatusBar } from '../infoStatusBar'

const data = [
  require('../../assets/images/T_Shirt.png'),
  require('../../assets/images/Shoes_Adidas.png'),
  require('../../assets/images/Shoes_Nike.png'),
  require('../../assets/images/Camisola_Capuz.png'),
  require('../../assets/images/Calcoes.png'),
  require('../../assets/images/neom-WLeWJW_WneE-unsplash.jpg'),
  require('../../assets/images/neom-yx7TJle8LhM-unsplash.jpg'),
  require('../../assets/images/ROOM_TShirt.png'),
]

export const StatusBar = () => {
  return (
    <View style={styles.container}>
      {data.map((item) => {
        return <InfoStatusBar src={item} key={item} />
      })}
    </View>
  )
}
