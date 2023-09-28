import { Text, View } from "react-native";
import { styles} from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import theme from '../../global/styles/theme';

export const CategoryItem = () => {

 return (
   <View style={styles.container}>
      <View style={styles.icon}>
        <FontAwesome5 name="chair" size={24} color={theme.colors_backgrounds.secondary} />
      </View>
      <Text>Chair</Text>
   </View>
 );
};




