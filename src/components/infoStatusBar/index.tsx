import { View, Image, ImageProps } from "react-native";
import { styles } from "./styles";

interface InfoStatusBarProps{
  src: ImageProps
}

export const InfoStatusBar = ({src} : InfoStatusBarProps) => {
 return (
   <View style={styles.container}>
     <Image style={styles.image} source={src} />

   </View>
 );
};