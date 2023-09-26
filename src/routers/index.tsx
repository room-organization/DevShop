import { NavigationContainer } from '@react-navigation/native'; //Contexto de routas disponibilizados a toda app
import { StackRouters } from './stack.routes';
import { TabRoutes } from './tab.routes';


export function Routers() {
  return (
    <NavigationContainer>
        {/* <StackRouters/> */}
        <TabRoutes/>
    </NavigationContainer>
  );
}