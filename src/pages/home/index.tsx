import { HorizontasScrollView } from "../../components/horizontalScrollView";
import {  SafeAreaView, ScrollView, Text, View } from "react-native";
import { RowCard } from "../../components/cardItem";
import { SearchSection } from "../../components/searchSection";
import { styles } from "./styles";
import theme from "../../global/styles/theme";
import { Hero } from "../../components/hero";

export const Home = () => {
 return (
   <SafeAreaView style={styles.container}>
     <SearchSection/>
     
     <ScrollView>
      <View style={styles.row}>
        <Text style={styles.category}>Category</Text>
        <Text style={styles.more}>See All</Text>
      </View>
      <HorizontasScrollView/>
      <Hero/>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
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
        
      </ScrollView>
     </ScrollView>
     
   </SafeAreaView>
 );
};