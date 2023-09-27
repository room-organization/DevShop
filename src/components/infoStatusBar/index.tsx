import { View, Image, ImageProps, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { RootStackParamList } from "../../routers/app.routes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

interface InfoStatusBarProps {
  src: ImageProps;
}

type ItemDetailScreenProp = StackNavigationProp<RootStackParamList, 'ItemDetail'>;

export const InfoStatusBar = ({src,} : InfoStatusBarProps) => {
  
  const navigation = useNavigation<ItemDetailScreenProp>()

  function openItemDetail() {
    navigation.navigate('ItemDetail');
  }

  return (
  <TouchableOpacity onPress={openItemDetail}>
    <View style={styles.container}>
      <Image style={styles.image} source={src} />
    </View>
    <Text style={styles.category}>Category</Text>
   </TouchableOpacity>
 );
};