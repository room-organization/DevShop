import { View } from "react-native";
import { styles } from "./styles";
import { ProductCard } from "../ProductCard";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

export function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
      async function fetchProducts() {
        const response = await api.get('/products')
        setProducts(response.data)

       
      }
  
      fetchProducts()
    }, [])
  return(
      <View style={styles.container}>
        {
          products.map((product) => {
            return(
              <ProductCard 
                key={product.id}
                data={product}
              />
            )
          })
        }
      </View>
  )
}