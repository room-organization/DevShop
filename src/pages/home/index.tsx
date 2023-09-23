import React from "react";
import { HorizontasScrollView } from "../../components/horizontalScrollView";
import { Categories } from "../categories";
import { View } from "react-native";
import { styles } from "./styles";

export const Home = () => {
 return (
   <View>
     <HorizontasScrollView/>
     <Categories/>
   </View>
 );
};