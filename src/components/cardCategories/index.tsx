import { Text, View } from "react-native";
import { styles} from './styles';

export const CardCategory = () => {

 return (
   <View style={styles.container}>
      <Text style={styles.title}>Título</Text>
   </View>
 );
};

export const RowCardCategory = () => {

    return (
      <View style={styles.containerRowCard}>
        <CardCategory/>
        <CardCategory/>
      </View>
    );
   };



