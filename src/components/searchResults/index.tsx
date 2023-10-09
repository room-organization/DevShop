import React, { useEffect, useState } from 'react';

import { Container, NoResultContainer, NoResultsText } from './styles'; // Importe o estilo necessário
import { Product } from '../../utils/types';
import { api } from '../../lib/axios';
import { ProductCard } from '../ProductCard';

export function SearchResults({ result }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [noResults, setNoResults] = useState(false); 

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(result.toLowerCase());
  });

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get('/products');
        setProducts(response.data);

        // Verifique se não há resultados
        if (filteredProducts.length === 0) {
          setNoResults(true);
        } else {
          setNoResults(false);
        }
      } catch (error) {
        // Trate o erro aqui, se necessário
      }
    }

    fetchProduct();
  }, [result]);

  return (
    <Container>
      {noResults ? (
        // Exiba o texto de "Nenhum resultado encontrado"
        <NoResultContainer>
            <NoResultsText>Nenhum resultado encontrado</NoResultsText>
        </NoResultContainer>
      ) : (
        // Renderize os produtos se houver resultados
        filteredProducts.map((product) => {
          return <ProductCard key={product.id} data={product} />;
        })
      )}
    </Container>
  );
}
