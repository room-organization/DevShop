import { View } from 'react-native'
import { styles } from './styles'
import { ProductCard } from '../ProductCard'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { Product } from '../../utils/types'

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get('/products')
      const data = response.data

      // Embaralhe aleatoriamente a lista de produtos
      const shuffledProducts = shuffleArray(data)

      // Selecione os primeiros 10 produtos embaralhados
      const selectedProducts = shuffledProducts.slice(0, 10)

      setProducts(selectedProducts)
    }

    fetchProducts()
  }, [])

  // Função para embaralhar aleatoriamente um array
  function shuffleArray(array: Product[]) {
    return array.slice().sort(() => Math.random() - 0.5)
  }
  
  return (
    <View style={styles.container}>
      {products.map((product) => {
        return <ProductCard key={product.id} data={product} />
      })}
    </View>
  )
}
