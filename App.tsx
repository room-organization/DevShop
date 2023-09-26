import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import { Routers } from './src/routers';
import { StackRouters } from './src/routers/stack.routes';

export default function App() {
  return (
    <Routers/>
  );
}


