import React, { useState, useEffect } from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'

import { styles } from './styles'

export function Hero() {


  const data = [
    require('../../assets/images/hero.jpeg'),
    require('../../assets/images/billboard-bg.png'),
    require('../../assets/images/neom-WLeWJW_WneE-unsplash.jpg'),
  ]

  const slides = data.map((image, index) => (
    <ImageBackground
      key={index}
      source={image}
      style={styles.imageBackground}
    />
  ))
  return (
    <Swiper showsButtons={false} autoplay={true} style={styles.hero}>
      {slides}
    </Swiper>
   
  );
}