import { HorizontasScrollView } from "../../components/horizontalScrollView";
import { SafeAreaView } from "react-native";
import { CardItem } from "../../components/cardItem";

export const Home = () => {
 return (
   <SafeAreaView>
     <HorizontasScrollView/>
     <CardItem/> 
   </SafeAreaView>
 );
};