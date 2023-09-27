import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';

import { styles } from './styles';

export function Hero() {
  return (
    <View style={styles.hero}>
      <ImageBackground
        source={require('../../assets/images/hero.jpeg')}
        style={styles.imageBackground}>
          <Text style={styles.text}>Explore nossos produtos</Text>
        </ImageBackground>
     </View>
  );
}