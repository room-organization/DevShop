import 'react-native-gesture-handler';

import { Routers } from './src/routers';
import AppRoutes from './src/routers/app.routes';

// import {}from '@ex';

export default function App() {
  const [fontsLoaded] = useFonts({
    
  });
  
  return (
    // <Routers/>
    <AppRoutes/>
  );
}


