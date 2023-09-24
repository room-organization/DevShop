import React from "react";
import { HorizontasScrollView } from "../../components/horizontalScrollView";
import { Categories } from "../categories";
import { SafeAreaView } from "react-native";
import { CardItem } from "../../components/cardItem";
import { ItemDetail } from "../itemDetail";

export const Home = () => {
 return (
   <SafeAreaView>
     <HorizontasScrollView/>
     <Categories/>
     <CardItem/> 
     <ItemDetail/>
   </SafeAreaView>
 );
};