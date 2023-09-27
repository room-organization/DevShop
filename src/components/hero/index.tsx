import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

export function hero() {
  return (
    <View style={styles.hero}>
        <View style={styles.heroContentText}>
          <Text style={styles.heroTitle}>New Collection</Text>
          <Text style={styles.heroDescribe}>
          Discount 50% for the first transaction
          </Text>
          <View style={styles.heroButton}>
            <Text style={styles.button}>Shop Now</Text>
          </View>
        </View>
        <View style={styles.heroContentImg}>
          <Image source={require('../../assets/images/ROOM_TShirt.png')} style={styles.heroImg}/>
        </View>
     </View>
  );
}