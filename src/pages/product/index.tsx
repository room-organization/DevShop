import React, { useEffect, useState } from 'react'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../routers/app.routes'
import { ProductInfo } from './components/ProductInfo'
import { Product as ProductType } from '../../utils/types'
import { api } from '../../lib/axios'

type ProductScreenRouteProp = RouteProp<RootStackParamList, 'Product'>

interface ProductProps {
  route: ProductScreenRouteProp
}

export const Product: React.FC<ProductProps> = ({ route }) => {
  const [product, setProduct] = useState<ProductType>({
    id: '',
    category: {
      id: '',
      name: '',
      billboard: {
        id: '',
        imageUrl: '',
        label: '',
      },
    },
    name: '',
    price: '',
    isFeatured: false,
    size: {
      id: '',
      name: '',
      value: '',
    },
    color: {
      id: '',
      name: '',
      value: '',
    },
    images: [],
  })

  useEffect(() => {
    async function fetchProduct() {
      const { productId } = route.params
      const response = await api.get(`/products/${productId}`)
      setProduct(response.data)
    }

    fetchProduct()
  }, [route.params])

  return <ProductInfo data={product} />
}
