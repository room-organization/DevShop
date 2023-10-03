import React from "react";
import { View, Text } from "react-native";
import {
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { CartCard } from "../../components/cartCard";
import { Header } from "../../components/header";
import Ionicons from "@expo/vector-icons/Ionicons";
import theme from "../../global/styles/theme";
import { CartItem } from "./components/CartItem";
import { Cupon } from "./components/Cupon";
import { Summary } from "./components/Summary";

export function Cart() {
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{ backgroundColor: theme.colors_backgrounds.statusBarItem }}
      >
        <Header />

        <ScrollView style={styles.content}>
          <View style={styles.content}>
            <CartItem />
            <CartItem />
            <Cupon />
            <Summary />
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Checkout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}
