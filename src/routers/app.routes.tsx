import React from "react";

import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {MaterialIcons, Feather} from '@expo/vector-icons';

import theme from "../global/styles/theme";
import { Home } from "../pages/home";
import { Categories } from "../pages/categories";
import { ItemDetail } from "../pages/itemDetail";
import { cart } from "../pages/cart";



// const {Navigator, Screen} = createBottomTabNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Inicio"  component={Home}/>
            <Stack.Screen name="Categorias"  component={Categories}/>
            <Stack.Screen name="Detalhes"  component={ItemDetail}/>
        </Stack.Navigator>
    );
}

function TabNavigator() {
    return (
      <Tab.Navigator 
      screenOptions={
        {
            headerShown:false,
            // tabBarActiveBackgroundColor: theme.colors1.button,
            // tabBarActiveTintColor:theme.colors2.buttonFocus,
            tabBarInactiveBackgroundColor:'',
            tabBarInactiveTintColor:'',
            tabBarLabelPosition: "below-icon", //Posicao do icone (Lado do texto ou em cima)
            tabBarStyle:{
                // height: 50,
            }
        }
    }
      >
        <Tab.Screen 
            name="Inicio" component={StackNavigator}
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
            <Tab.Screen name="Carinho" component={cart}
            options={
                {
                    tabBarIcon: (({size, color}) => 
                    <Feather name="shopping-cart" 
                    color={color}
                    size={size}/> //Cor e tamanho dinamico para mudar de acordo com a selcao do meno
                    ),
                }
            }
            />
      </Tab.Navigator>
    );
}

export default function AppRoutes() {
    
    return(
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    )
}