import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import { Feather, FontAwesome } from '@expo/vector-icons'
import { styles } from './styles'
import { RFValue } from 'react-native-responsive-fontsize'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler'

export function SearchSection() {
  const [search , setSearch] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <FontAwesome
          name="search"
          size={RFValue(20)}
          style={styles.iconSearch}
        />
        <TextInput 
          placeholder="Search Product" 
          style={styles.textInput}
          onChangeText={(text)=> setSearch(text)}
        />
      </View>
      <GestureHandlerRootView>
        <TouchableOpacity style={styles.iconContainer}>
          <Feather name="menu" size={RFValue(25)} style={styles.iconMenu} />
        </TouchableOpacity>
      </GestureHandlerRootView>
    </View>
  )
}
