import React, { useState, useEffect } from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export function Hero() {
  const [activeElipse, setActiveElipse] = useState(0)

  const handleElipsePress = (index: number) => {
    setActiveElipse(index)
  }

  const data = [
    require('../../assets/images/hero.jpeg'),
    require('../../assets/images/billboard-bg.png'),
    require('../../assets/images/neom-WLeWJW_WneE-unsplash.jpg'),
  ]

  return (
    <View style={styles.hero}>
      <ImageBackground
        source={data[activeElipse]}
        style={styles.imageBackground}
      >
        <Text style={styles.text}>Explore nossos produtos</Text>
      </ImageBackground>

      <View style={styles.elipseGroup}>
        {data.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleElipsePress(index)}
            style={index === activeElipse ? styles.elipse : styles.elipseOff}
          ></TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
