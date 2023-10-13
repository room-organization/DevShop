import React, { useState, useEffect } from 'react'
import Swiper from 'react-native-swiper'

import { HeroContainer, HeroImageBackground, HeroText } from './styles'
import { api } from '../../../../lib/axios'
import { Billboard } from '../../../../utils/types'

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
    <HeroImageBackground key={billboard.id} source={{ uri: billboard.imageUrl }}>
      <HeroText>{billboard.label}</HeroText>
    </HeroImageBackground>
  ));

  return (
    <HeroContainer>
      <Swiper showsButtons={false} showsPagination={false} autoplay={true} autoplayTimeout={1000}>
        {slides}
      </Swiper>
    </HeroContainer>
  );
}