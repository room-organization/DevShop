import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/home";
import { Categories } from "../pages/categories";

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes() {
    return(
        <Navigator
        screenOptions={
            {
                headerShown:false,
                tabBarActiveBackgroundColor: '',
                tabBarActiveTintColor:'',
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
            />
            <Screen name="Categoria" component={Categories}/>
            {/* <Screen name="Categoria" component={Categories}/> */}
        </Navigator>
    )
}