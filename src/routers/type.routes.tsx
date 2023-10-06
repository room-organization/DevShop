import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from './app.routes'

export type CartScreenProp = StackNavigationProp<RootStackParamList, 'Cart'>
export type CategoriesScreenProp = StackNavigationProp<
  RootStackParamList,
  'Categories'
>
export type CategoryItemsScreenProp = StackNavigationProp<
  RootStackParamList,
  'CategoryItems'
>
export type ExploreScreenProp = StackNavigationProp<
  RootStackParamList,
  'Explore'
>
export type FavoritesScreenProp = StackNavigationProp<
  RootStackParamList,
  'Favorites'
>
export type HomeProductScreenProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>
export type OfferScreenProp = StackNavigationProp<RootStackParamList, 'Offer'>
export type PaymentsScreenProp = StackNavigationProp<
  RootStackParamList,
  'Payments'
>
export type ProductScreenProp = StackNavigationProp<
  RootStackParamList,
  'Product'
>
export type UserScreenProp = StackNavigationProp<RootStackParamList, 'User'>
