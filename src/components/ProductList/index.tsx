import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { api } from '../../lib/axios';
import { Product } from '../../utils/types';
import { styles } from './styles';
import { ProductCard } from '../ProductCard';


export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get('/products');
      const data = response.data;

      const shuffledProducts = shuffleArray(data);

      const selectedProducts = shuffledProducts.slice(0, 10);

      setProducts(selectedProducts);
    }

    fetchProducts();
  }, []);

  // Função para embaralhar aleatoriamente um array
  function shuffleArray(array: Product[]) {
    return array.slice().sort(() => Math.random() - 0.5);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2} 
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <ProductCard data={item} />
          </View>
        )}
      />
    </View>
  );
}
