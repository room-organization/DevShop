import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {MaterialIcons} from '@expo/vector-icons';

import theme from "../global/styles/theme";
import { Home } from "../pages/home";
import { Categories } from "../pages/categories";
import { ItemDetail } from "../pages/itemDetail";


const {Navigator, Screen} = createBottomTabNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export function AppRoutes() {
    const StackNavigator = () =>{
        return(
            <Stack.Navigator>
                <Stack.Screen name="Detalhes"  component={ItemDetail}/>
            </Stack.Navigator>
        )
    };
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