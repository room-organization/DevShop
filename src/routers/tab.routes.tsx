import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {MaterialIcons} from '@expo/vector-icons';

import theme from "../global/styles/theme";

import { Home } from "../pages/home";
import { Categories } from "../pages/categories";

const Tab = createBottomTabNavigator();

export function TabRoutes(){
    return(
        <Tab.Navigator 
        screenOptions={
            {
                headerShown:false,
                tabBarActiveBackgroundColor: theme.colors_backgrounds.primary,
                tabBarActiveTintColor:theme.colors_backgrounds.secondary,
                tabBarInactiveBackgroundColor:'',
                tabBarInactiveTintColor:'',
                tabBarLabelPosition: "below-icon", //Posicao do icone (Lado do texto ou em cima)
                tabBarStyle:{
                    // height: 50,
                }
            }
        }
        >
            <Tab.Screen name="Inicio" component={Home}
            options={
                {
                    tabBarIcon: (({size, color}) => 
                    <MaterialIcons name="home" 
                    color={color}
                    size={size}/> //Cor e tamanho dinamico para mudar de acordo com a selcao do meno
                    ),
                }
            }/>

            <Tab.Screen name="Categoria" component={Categories}
                options={
                {
                    tabBarIcon: (({size, color}) => 
                    <MaterialIcons name="menu" 
                    color={color}
                    size={size}/> //Cor e tamanho dinamico para mudar de acordo com a selcao do meno
                    ),
                }
            }
            />
        </Tab.Navigator>
    )
}