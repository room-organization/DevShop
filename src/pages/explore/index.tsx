import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import {Feather} from '@expo/vector-icons'

import { styles } from './styles'
import { RFValue } from 'react-native-responsive-fontsize'
import { SearchSection } from '../../components/searchSection'
import { Categories } from '../categories'

export function Explore() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchSection />
      <Categories/>
    </SafeAreaView>
  )
}


const Category = () => {
  return(
    <View style={styles.info}>
      <Feather name='cloud-off' size={RFValue(40)} style={styles.icon}/>
      {/* <Text>Category</Text> */}
    </View>
  )
}
