import { Text, View } from "react-native";
import { styles} from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import theme from '../../global/styles/theme';

export const CategoryItem = (props) => {

 return (
   <View style={[styles.container, props.style, ]}>
        <FontAwesome5 name={props.icon} size={24} color={theme.colors_backgrounds.secondary} style={styles.icon} />
      <Text>{props.name}</Text>
   </View>
 );
};




