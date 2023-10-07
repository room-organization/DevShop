import { ScrollView, View, StatusBar } from 'react-native'
import { CategoryItem } from '../../components/categoryItem'
import { styles } from './styles'

export const Categories = () => {
  return (
    <View >
        <View style={styles.container}>
          <CategoryItem
            icon="tshirt"
            name="Shirt"
          />
          <CategoryItem 
            icon="shoe-prints" 
            name="Shoes" 
          />
          <CategoryItem 
            icon="briefcase" 
            name="Work" 
            />
          <CategoryItem 
            icon="laptop" 
            name="Laptop" 
          />
          <CategoryItem
            icon="tshirt"
            name="Shirt"
          />
          <CategoryItem 
            icon="shoe-prints" 
            name="Shoes" 
          />
          <CategoryItem 
            icon="briefcase" 
            name="Work" 
            />
          <CategoryItem 
            icon="laptop" 
            name="Laptop" 
          />
          <CategoryItem
            icon="tshirt"
            name="Shirt"
          />
          <CategoryItem 
            icon="shoe-prints" 
            name="Shoes" 
          />
          <CategoryItem 
            icon="briefcase" 
            name="Work" 
            />
          <CategoryItem 
            icon="laptop" 
            name="Laptop" 
          />
          
        </View>
    </View>
  )
}
