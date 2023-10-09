import React, { useEffect, useState } from 'react'

import { Container, NoResultContainer, NoResultsText } from './styles'
import { Product } from '../../utils/types'
import { api } from '../../lib/axios'
import { ProductCard } from '../ProductCard'

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

  return (
    <Container>
      {noResults ? (
        <NoResultContainer>
          <NoResultsText>No results found</NoResultsText>
        </NoResultContainer>
      ) : (
        filteredProducts.map((product) => {
          return <ProductCard key={product.id} data={product} />
        })
      )}
    </Container>
  )
}
