import { View, ScrollView } from "react-native";
import { styles } from "./styles";
import { InfoStatusBar } from "../infoStatusBar";
import { StatusBar } from "../statusBar";

export const HorizontasScrollView= () =>{
return (
      <ScrollView style={styles.container}
         horizontal
        //  contentContainerStyle={}
         showsHorizontalScrollIndicator={false}
      >
        <StatusBar/>
      </ScrollView>
  );
 };