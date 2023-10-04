import React, { useState, useEffect } from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export function Hero() {
  const [activeElipse, setActiveElipse] = useState(0)

  const handleElipsePress = (index: number) => {
    setActiveElipse(index)
  }

  useEffect(() => {
    // Iniciar um temporizador que irá trocar as imagens a cada X segundos
    const timer = setInterval(() => {
      setActiveElipse((activeElipse + 1) % data.length)
    }, 2000)

    // Destruir o temporizador quando o componente for desmontado
    return () => clearInterval(timer)
  }, [])

  const data = [
    require('../../assets/images/hero.jpeg'),
    require('../../assets/images/Shoes_Adidas.png'),
    require('../../assets/images/Shoes_Nike.png'),
    require('../../assets/images/Camisola_Capuz.png'),
    require('../../assets/images/Calcoes.png'),
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
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleElipsePress(index)}
              style={index === activeElipse ? styles.elipse : styles.elipseOff}
            ></TouchableOpacity>
          ))}
      </View>
    </View>
  )
}
