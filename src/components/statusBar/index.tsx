import React, { useState } from "react";
import { View } from "react-native";
import { styles} from './styles';
import { InfoStatusBar } from "../infoStatusBar";

export const StatusBar = () => {
 const [statusBarHeight] = useState(20);

 return (
   <View style={styles.container}>
     <InfoStatusBar/>
     <InfoStatusBar/>
     <InfoStatusBar/>
     <InfoStatusBar/>
     <InfoStatusBar/>
     <InfoStatusBar/>
     <InfoStatusBar/>
     <InfoStatusBar/>
     <InfoStatusBar/>
     <InfoStatusBar/>
     <InfoStatusBar/>
     <InfoStatusBar/>
     <InfoStatusBar/>
     <InfoStatusBar/>
     <InfoStatusBar/>
   </View>
 );
};



