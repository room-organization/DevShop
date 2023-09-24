import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import { AppRoutes } from './src/routers/app.routes';

export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes/>
    </NavigationContainer>
  );
}


