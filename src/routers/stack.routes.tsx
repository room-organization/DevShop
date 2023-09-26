import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ItemDetail } from '../pages/itemDetail';
import { Home } from '../pages/home';

const {Navigator, Screen} = createNativeStackNavigator();
export function StackRouters() {
  return (
    <Navigator>
        <Screen 
            name='home'
            component={Home}
            options={{
                headerShown: false
            }}
        />

        <Screen 
            name='detail'
            component={ItemDetail}
        />

    </Navigator>
  );
}