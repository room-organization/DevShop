import { 
  CategoryBar,
  Container, 
  ScrollViewContainer,
  CategoryInfo,
  CategoryInfoImg,
  CategoryInfoTitle,
  CategoryInfoImgContainer,
} from './styles'

import { Hero } from './components/hero'
import { RowCategory } from '../../components/rowCategories'
import { ProductList } from '../../components/ProductList'
import { useEffect, useState } from 'react'
import { 
  Billboard, 
  Category 
} from '../../utils/types'
import { api } from '../../lib/axios'
import { useNavigation } from '@react-navigation/native'
import { CategoryItemsScreenProp } from '../../routers/type.routes'


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

export const Home = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const navigation = useNavigation<CategoryItemsScreenProp>()

  function openCategory(categoryId: string) {
    navigation.navigate('CategoryItems', { categoryId });
  }
  
  useEffect(() => {
    async function fetchCategories() {
      const response = await api.get('/categories')
      setCategories(response.data)
    }

    fetchCategories()
  }, [])

  return (
<Container>

      <ScrollViewContainer showsVerticalScrollIndicator={false}>
        <CategoryBar 
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((category, index) => (
            <CategoryInfo key={category.id} onPress={() => openCategory(category.id)}
            >
              <CategoryInfoImgContainer>
                <CategoryInfoImg source={data[index]}/>
              </CategoryInfoImgContainer>
              <CategoryInfoTitle>{category.name}</CategoryInfoTitle>
            </CategoryInfo>
          ))}
        </CategoryBar>

        <Hero />
        <RowCategory />
        <ProductList />
      </ScrollViewContainer>
    </Container>
  )
}
