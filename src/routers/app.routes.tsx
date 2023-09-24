import React from "react";
import {MaterialIcons} from '@expo/vector-icons';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/home";
import { Categories } from "../pages/categories";
import theme from "../global/styles/theme";

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes() {
    return(
        <Navigator
        screenOptions={
            {
                headerShown:false,
                tabBarActiveBackgroundColor: theme.colors1.button,
                tabBarActiveTintColor:theme.colors2.buttonFocus,
                tabBarInactiveBackgroundColor:'',
                tabBarInactiveTintColor:'',
                tabBarLabelPosition: "below-icon", //Posicao do icone (Lado do texto ou em cima)
                tabBarStyle:{
                    // height: 50,
                }
            }
        }
        >
            <Screen 
            name="Inicio" component={Home}
            options={
                {
                    tabBarIcon: (({size, color}) => 
                    <MaterialIcons name="home" 
                    color={color}
                    size={size}/> //Cor e tamanho dinamico para mudar de acordo com a selcao do meno
                    ),
                }
            }/>
            <Screen name="Categoria" component={Categories}
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
            {/* <Screen name="Categoria" component={Categories}/> */}
        </Navigator>
    )
}