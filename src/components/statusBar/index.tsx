import { View } from 'react-native'
import { styles } from './styles'
import { InfoStatusBar } from '../infoStatusBar'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'
import { Category } from '../../utils/types'

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

const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await api.get('/categories')
      setCategories(response.data)
    }

    fetchCategories()
  }, [])

  return (

    <View style={styles.container}>
      {
        categories.map( (categories, index ) => {
          return <InfoStatusBar src={data[index]} title={categories.name} key={categories.id} />
        }
        )
      // data.map((item) => {
      //   return <InfoStatusBar src={item} key={item} />
      // })
      }
    </View>
  )
}