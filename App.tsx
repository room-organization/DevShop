import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import { Routers } from './src/routers';
import { StackRouters } from './src/routers/stack.routes';
import { Home } from './src/pages/home';
import AppRoutes from './src/routers/app.routes';

export default function App() {
  return (
    // <Routers/>
    // <Home/>
    <AppRoutes/>
  );
}


