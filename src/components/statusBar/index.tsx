import { View } from "react-native";
import { styles} from './styles';
import { InfoStatusBar } from "../infoStatusBar";


const data = [
  require('../../../assets/favicon.png'),
  require('../../../assets/adaptive-icon.png'),
  require('../../../assets/icon.png'),
  require('../../../assets/splash.png'),
]

export const StatusBar = () => {

 return (
   <View style={styles.container}>
    {
      data.map(item  => {
        return (
          <InfoStatusBar src={item} key={item}/>
        )
      })
    }
   </View>
 );
};



