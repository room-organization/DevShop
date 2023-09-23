import React from "react";
import { HorizontasScrollView } from "../../components/horizontalScrollView";
import { Categories } from "../categories";
import { SafeAreaView, View } from "react-native";

export const Home = () => {
 return (
   <SafeAreaView>
     <HorizontasScrollView/>
     <Categories/>
   </SafeAreaView>
 );
};