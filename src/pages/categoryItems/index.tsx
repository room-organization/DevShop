import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { api } from '../../lib/axios';
import { CategoryItemsScreenProp } from '../../routers/type.routes';
import { Product } from '../../utils/types';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../routers/app.routes';
import { styles } from './styles';
import { ProductCard } from '../../components/ProductCard';

type CategoryItemsRouteProp = RouteProp<RootStackParamList, 'CategoryItems'>;

interface CategoryItemsProps {
  route: CategoryItemsRouteProp;
}

export const CategoryItems: React.FC<CategoryItemsProps> = ({ route }) => {
  const [category, setCategory] = useState<{ id: string; name: string }>({ id: '', name: '' });
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const { categoryId } = route.params;

    // Primeiro, busque os detalhes da categoria com base no ID
    api.get(`/categories/${categoryId}`)
      .then((response) => {
        const categoryData = response.data;
        setCategory({ id: categoryData.id, name: categoryData.name });
      })
      .catch((error) => {
        console.error('Erro ao buscar categoria:', error);
      });

    // Em seguida, faça uma solicitação à API para buscar a lista de produtos com base na categoria selecionada
    api.get(`/products?categoryId=${categoryId}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error);
      });
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Category: {category.name}</Text>

      {/* Renderize a lista de produtos */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <ProductCard data={item}/>
{/* 
            <Text>{item.name}</Text>
            <Text>{item.price}</Text> */}
          </View>
        )}
      />
    </View>
  );
};
