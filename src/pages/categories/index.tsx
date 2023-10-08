import { View } from 'react-native'
import { CategoryItem } from '../../components/categoryItem'
import { styles } from './styles'

export const Categories = () => {
  return (

    <View style={styles.container}>
          <CategoryItem
            icon="tshirt"
            name="Shirt"
            style={styles.items}
          />
          <CategoryItem 
            icon="shoe-prints" 
            name="Shoes" 
            style={styles.items}
          />
          <CategoryItem 
            icon="briefcase" 
            name="Work" 
            style={styles.items}
          />
          <CategoryItem
            icon="laptop"
            name="Laptop"
            style={styles.items}
          />
          <CategoryItem
            icon="tshirt"
            name="Shirt"
            style={styles.items}
          />
          <CategoryItem 
            icon="shoe-prints" 
            name="Shoes" 
            style={styles.items}
          />
          <CategoryItem 
            icon="briefcase" 
            name="Work" 
            style={styles.items}
          />
          <CategoryItem
            icon="laptop"
            name="Laptop"
            style={styles.items}
          />
          <CategoryItem
            icon="tshirt"
            name="Shirt"
            style={styles.items}
          />
          <CategoryItem 
            icon="shoe-prints" 
            name="Shoes" 
            style={styles.items}
          />
          <CategoryItem 
            icon="briefcase" 
            name="Work" 
            style={styles.items}
          />
          <CategoryItem
            icon="laptop"
            name="Laptop"
            style={styles.items}
          />
    </View>
  )
}