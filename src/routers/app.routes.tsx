import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Feather } from '@expo/vector-icons'

import theme from '../global/styles/theme'

import { Cart } from '../pages/cart'
import { Categories } from '../pages/categories'
import { CategoryItems } from '../pages/categoryItems'
import { Explore } from '../pages/explore'
import { Favorites } from '../pages/favorites'
import { Home } from '../pages/home'
import { Offer } from '../pages/offer'
import { Payments } from '../pages/payments'
import { Product } from '../pages/product'
import { User } from '../pages/user'
import CartIconWithBadge from '../pages/cart/components/CartIconWithBadge'

// const {Navigator, Screen} = createBottomTabNavigator();

const Tab = createBottomTabNavigator()

const Stack = createStackNavigator()

export type RootStackParamList = {
  Cart: undefined
  Categories: undefined
  CategoryItems: undefined
  Explore: undefined
  Favorites: undefined
  Home: undefined
  Offer: undefined
  Payments: undefined
  Product: { productId: string }
  User: undefined
}

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="CategoryItems" component={CategoryItems} />
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="Offer" component={Offer} />
      <Stack.Screen name="Payments" component={Payments} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  )
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarActiveBackgroundColor: '',
        tabBarActiveTintColor: theme.colors_backgrounds.secondary,
        tabBarInactiveBackgroundColor: '',
        tabBarInactiveTintColor: theme.colors_backgrounds.icons,
        tabBarLabelPosition: 'below-icon', // Posicao do icone (Lado do texto ou em cima)
        tabBarStyle: {
          height: 60,
        },
        tabBarLabelStyle: {
          marginTop: -8,
          marginBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ size, color }) => (
            <CartIconWithBadge size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Offer"
        component={Offer}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="tag" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={User}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}
