import { View, Image, ImageProps, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface InfoStatusBarProps{
  src: ImageProps
}

export const InfoStatusBar = ({src} : InfoStatusBarProps, {navigation}) => {
  
  function openItemDetail() {
    navigation.navigate('detail')
  }

  return (
  <TouchableOpacity onPress={openItemDetail}>
    <View style={styles.container}>
      <Image style={styles.image} source={src} />

    </View>
   </TouchableOpacity>
 );
};