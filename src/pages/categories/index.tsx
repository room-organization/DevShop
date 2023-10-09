import { ScrollView, View, StatusBar } from 'react-native'
import { CategoryItem } from '../../components/categoryItem'
import { styles } from './styles'
import { Header } from '../../components/header/'

export const Categories = () => {
  return (
    <View style={{ paddingTop: StatusBar.currentHeight, marginBottom: 90 }}>
      <Header title="Category" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.items}>
          <CategoryItem icon="tshirt" name="Shirt" />
          <CategoryItem
            icon="tshirt"
            name="Shirt"
            style={{ backgroundColor: 'lightgray' }}
          />
          <CategoryItem icon="shoe-prints" name="Shoes" />
          <CategoryItem icon="briefcase" name="Work" />
          <CategoryItem icon="laptop" name="Laptop" />
        </View>
      </ScrollView>
    </View>
  )
}
