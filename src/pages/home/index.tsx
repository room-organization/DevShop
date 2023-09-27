import { HorizontasScrollView } from "../../components/horizontalScrollView";
import { Button, Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { CardItem, RowCard } from "../../components/cardItem";
import { SearchSection } from "../../components/searchSection";
import { styles } from "./styles";
import theme from "../../global/styles/theme";

export const Home = () => {
 return (
   <SafeAreaView style={styles.container}>
     <SearchSection/>
     <View style={styles.row}>
      <Text style={styles.category}>Category</Text>
      <Text style={styles.more}>See All</Text>
     </View>
     <HorizontasScrollView/>
     
     {/* <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <RowCard/>
        <RowCard/>
        <RowCard/>
        <RowCard/>
        <RowCard/>
        <RowCard/>
        <RowCard/>
        <RowCard/>
        <RowCard/>
        <RowCard/>
        <RowCard/>
      
     </ScrollView> */}
   </SafeAreaView>
 );
};