import React, { useState, useEffect } from 'react'
import { ImageBackground, Text } from 'react-native'
import Swiper from 'react-native-swiper'

import { styles } from './styles'
import { Billboard } from '../../utils/types'
import { api } from '../../lib/axios'

export function Hero() {

  const [billboard, setBillboards] = useState<Billboard[]>([])

  useEffect(() => {
    async function fetchBillboards() {
      const response = await api.get('/billboards')
      setBillboards(response.data)
    }

    fetchBillboards()
  }, [])


  const slides = billboard.map((billboard, index) => (
    <ImageBackground
      key={billboard.id}
      source={{uri: billboard.imageUrl}}
      style={styles.imageBackground}
    >
      <Text style={{alignSelf: 'center'}}>{billboard.label}</Text>
    </ImageBackground>
  ))
  return (
  <Swiper showsButtons={false} showsPagination={false} autoplay={true} autoplayTimeout={1000} style={styles.hero}>
    {slides}
  </Swiper>

   
  );
}