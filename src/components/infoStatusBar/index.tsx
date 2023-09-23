import { View, Image } from "react-native";
import { styles } from "./styles";


export const InfoStatusBar = () => {
 return (
   <View style={styles.container}>
     <Image style={styles.image} source={{ uri: 'https://avatars.githubusercontent.com/u/105431834?s=400&u=6d831a0e5c11cb6b341052a07ca94f71a31fe7bf&v=4' }} />
     <View ></View>

   </View>
 );
};