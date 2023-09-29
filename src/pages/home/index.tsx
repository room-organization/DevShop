import { HorizontasScrollView } from "../../components/horizontalScrollView";
import {  SafeAreaView, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { RowCard } from "../../components/cardItem";
import { SearchSection } from "../../components/searchSection";
import { styles } from "./styles";
import theme from "../../global/styles/theme";
import { Hero } from "../../components/hero";

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
        <View style={styles.rowCategories}>
            <TouchableOpacity style={styles.itemRowCategory}>
              <Text>All</Text>
            </TouchableOpacity >

            <TouchableOpacity style={styles.itemRowCategory}>
              <Text>Newest</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.itemRowCategory}>
              <Text>Popular</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.itemRowCategory}>
              <Text>Dev</Text>
            </TouchableOpacity>
        </View>
        <View  style={styles.itens}>
            <RowCard/>
            <RowCard/>
            <RowCard/>
            <RowCard/>
            
        </View>
      
      
     </ScrollView>
   </SafeAreaView>
 );
};