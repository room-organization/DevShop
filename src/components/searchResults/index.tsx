import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native';

import { api } from '../../lib/axios'
import { Product } from '../../utils/types'

import { ProductCard } from '../ProductCard'
import { Container, NoResultContainer, NoResultsText, styles } from './styles'
import { View } from 'react-native';

interface SearchResultsPros {
  result: string
}

export function SearchResults({ result }: SearchResultsPros) {
  const [products, setProducts] = useState<Product[]>([])
  const [noResults, setNoResults] = useState(false)

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(result.toLowerCase())
  })

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get('/products')
        setProducts(response.data)

        if (filteredProducts.length === 0) {
          setNoResults(true)
        } else {
          setNoResults(false)
        }
      } catch (error) {
        // Trate o erro aqui, se necessário
      }
    }

    fetchProduct()
  }, [filteredProducts.length, result])

  const renderProductItem = ({ item }: { item: Product }) => {
    return (
      <View style={styles.cardContainer}>
        <ProductCard key={item.id} data={item} />
      </View>
    );
  };

  return (
<Container>
      {noResults ? (
        <NoResultContainer>
          <NoResultsText>No results found</NoResultsText>
        </NoResultContainer>
      ) : (
        // Substitua a lista de produtos mapeados pela FlatList
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={renderProductItem}
        />
      )}
    </Container>
  )
}
