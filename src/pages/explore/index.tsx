import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


import { 
  Container,
  SearchSection,
  SearchBar,
  IconSearch,
  Input,
  Categories,
  CategoryItem,
  IconCategoryItem,
  Title
 } from './styles'
import { SearchResults } from '../../components/searchResults';
import { api } from '../../lib/axios';

export function Explore() {
  const [search, setSearch] = useState('')  
  const [searchResult, setSearchResult] = useState('');
  const [categories, setCategories] = useState([]);

  const category = [
    { icon: 'tshirt', title: 'Camisas' },
    { icon: 'shoe-prints', title: 'Sapatos Masculinos' },
    { icon: 'tshirt', title: 'Roupas Infantis' },
    { icon: 'hat-cowboy', title: 'Chapéus' },
    { icon: 'socks', title: 'Meias' },
    { icon: 'suitcase', title: 'Bolsas' },
    // Adicione outras categorias aqui
  ];

  useEffect(() => {
    // Tente buscar as categorias do AsyncStorage
    AsyncStorage.getItem('categories')
      .then((storedCategories) => {
        if (storedCategories) {
          setCategories(JSON.parse(storedCategories));
        } else {
          // Se não houver categorias no AsyncStorage, faça a busca na API
          fetchCategories();
        }
      })
      .catch((error) => {
        console.error('Erro ao buscar categorias do AsyncStorage', error);
      });
  }, []);

  const fetchCategories = async () => {
    // Faça a chamada à API para buscar as categorias
    try {
      const response = await api.get('/categories');
      const fetchedCategories = response.data;

      // Armazene as categorias no AsyncStorage
      AsyncStorage.setItem('categories', JSON.stringify(fetchedCategories));

      setCategories(fetchedCategories);
    } catch (error) {
      console.error('Erro ao buscar categorias da API', error);
    }
  };

  return (
    <Container>
      <SearchSection>
        <SearchBar>
          <IconSearch name="search"/>
          <Input
            placeholder="Search Product"
            onChangeText={(text) => setSearch(text)} 
          />
        </SearchBar>
      </SearchSection>
      

      {search ? (
        // Renderize o componente SearchResults quando houver texto de pesquisa
        <SearchResults result={search} />        
      ) : (
        // Renderize as categorias quando não houver texto de pesquisa
        <Categories>
          {category.map((category, index) => (
            <CategoryItem key={index}>
              <IconCategoryItem name={category.icon} />
              <Title>{category.title}</Title>
            </CategoryItem>
          ))}
      </Categories>
      )}
      
    
  </Container>

  )
}