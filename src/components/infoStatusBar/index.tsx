import { View, Image, ImageProps, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { RootStackParamList } from "../../routers/app.routes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {ProductScreenProp} from '../../routers/type.routes'
interface InfoStatusBarProps {
  src: ImageProps;
}


export const InfoStatusBar = ({src,} : InfoStatusBarProps) => {
  
  const navigation = useNavigation<ProductScreenProp>()

  function openProduct() {
    navigation.navigate('Product');
  }

  return (
  <TouchableOpacity onPress={openProduct}>
    <View style={styles.container}>
      <Image style={styles.image} source={src} />
    </View>
    <Text style={styles.category}>Category</Text>
   </TouchableOpacity>
 );
};