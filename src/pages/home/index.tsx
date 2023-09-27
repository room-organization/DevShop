import { HorizontasScrollView } from "../../components/horizontalScrollView";
import { SafeAreaView, Text, View } from "react-native";
import { CardItem } from "../../components/cardItem";
import { SearchSection } from "../../components/searchSection";
import { styles } from "./styles";

export const Home = () => {
 return (
   <SafeAreaView style={styles.container}>
     <SearchSection/>
     <View style={styles.row}>
      <Text style={styles.category}>Category</Text>
      <Text style={styles.more}>See All</Text>
     </View>
     <HorizontasScrollView/>
     <CardItem/> 
   </SafeAreaView>
 );
};