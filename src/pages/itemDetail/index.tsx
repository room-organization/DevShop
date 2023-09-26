import { View, Text, Image, Button, TouchableOpacity } from "react-native";

import {styles} from './styles';
import theme from "../../global/styles/theme";



export const ItemDetail=()=> {

  
  return (
      <TouchableOpacity >        
        <View style={styles.card}>
          <Image
            source={require('../../../assets/adaptive-icon.png')}
            style={styles.image}
          />
          <View style={styles.content}>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.price}>R$ Price</Text>
            <Text style={styles.description}>Description</Text>
            <TouchableOpacity>
               <Button 
                // onPress={() => this.addProductToCart(product)}
                title="Adicionar ao carrinho"
                color={theme.colors1.button}/>

              </TouchableOpacity>
            </View>
        </View>
      </TouchableOpacity>
    );
};
