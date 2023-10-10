import { HorizontasScrollView } from '../../components/horizontalScrollView'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { styles } from './styles'
import { Hero } from '../../components/hero'
import { RowCategory } from '../../components/rowCategories'
import { ProductList } from '../../components/ProductList'

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.category}>Category</Text>
        <HorizontasScrollView />
        <Hero />
        <RowCategory />
        <ProductList />
      </ScrollView>
    </SafeAreaView>
  )
}
