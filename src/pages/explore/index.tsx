import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import {Feather} from '@expo/vector-icons'

import { styles } from './styles'
import { RFValue } from 'react-native-responsive-fontsize'

export function Explore() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Man Fashion</Text>
      <View style={styles.row}>
        <Category/>
      </View>
      <Text>Woman Fashion</Text>
      <View style={styles.row}>
        
      </View>
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
