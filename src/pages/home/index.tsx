import { HorizontasScrollView } from "../../components/horizontalScrollView";
import {  SafeAreaView, ScrollView, Text, View } from "react-native";
import { SearchSection } from "../../components/searchSection";
import { styles } from "./styles";
import { Hero } from "../../components/hero";
import { RowCategory } from "../../components/rowCategories";
import { ProductList } from "../../components/ProductList";

export const Home = () => {
 return (
   <SafeAreaView >
    <View style={styles.center}>
      <SearchSection/>
    </View>
      <ScrollView style={[styles.container, styles.center]} showsVerticalScrollIndicator={false}>
      
        <View style={styles.row}>
          <Text style={styles.category}>Category</Text>
          <Text style={styles.more} >See All</Text>
        </View>
        <HorizontasScrollView/>
        <Hero/>
        
        <RowCategory/>
        <View  style={styles.itens}>
           <ProductList />
            
        </View>
      
      
     </ScrollView>
   </SafeAreaView>
 );
};