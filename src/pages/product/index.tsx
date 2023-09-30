import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import theme from "../../global/styles/theme";
import { ScrollView } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../routers/app.routes";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { ProductInfo } from "./components/ProductInfo";

export type ProductScreenRouteProp = StackNavigationProp<RootStackParamList, 'Product'>;

interface ProductProps {
  route: ProductScreenRouteProp;
}


export const Product = ({ route }: ProductProps) => {
  const [products, setProducts] = useState({})
  const { productId } = route.params;

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get(`/products/${productId}`)
      setProducts(response.data)
    }

    fetchProducts()
  }, [])

  function po() {
    console.log("hhhhhh")
    console.log(products);
  }
  po()
  return (
   <ProductInfo data={products}/>
  );
};
