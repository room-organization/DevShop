import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { styles } from './styles';
import { CartCard } from '../../components/cartCard';
import { Header } from '../../components/header';
import Ionicons from '@expo/vector-icons/Ionicons';
import theme from '../../global/styles/theme';

export function cart() {

  return (
      <View style={styles.container}>
        {/* Top Section */}
        <SafeAreaView style={{backgroundColor: theme.colors_backgrounds.statusBarItem,}}>
          <Header title="My Cart" />
          {/* Cart Items */}
          <ScrollView style={styles.content}>
            <CartCard />

            <CartCard />
            <CartCard />
            
            <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center', paddingVertical: 10,}}>
              <View style={{flexDirection: 'row',}}>
                <Text style={{paddingRight: 15,}}>Total</Text>
                <Text>180.00Mt</Text>
              </View>
              <View style={{backgroundColor:  theme.colors_backgrounds.secondary,borderRadius: 12, paddingVertical: 2, paddingHorizontal: 4,}}>
                <Text style={{ color:  theme.colors_backgrounds.primary, }}>Buy Now</Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
        
      </View>
  );
}

