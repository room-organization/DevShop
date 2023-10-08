import React, { useEffect, useState } from 'react'
import { TextInput, View } from 'react-native'
import { Feather, FontAwesome } from '@expo/vector-icons'
import { styles } from './styles'
import { RFValue } from 'react-native-responsive-fontsize'

export function SearchSection() {
  const [search, setSearch] = useState('')  

  const [searchResult, setSearchResult] = useState('');

  useEffect(()=> {
     // Aqui vai o código para carregar os resultados da pesquisa
    setSearchResult(search);
    console.log(search)
  },[search])
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
    </View>
  )
}