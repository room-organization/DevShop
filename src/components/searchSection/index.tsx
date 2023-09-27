import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons'

import { styles } from './styles';
import { SearchBar } from 'react-native-screens';
import { RFValue } from 'react-native-responsive-fontsize';

export function SearchSection() {
  return (
    <View style={styles.container}>
        <View style={styles.searchBar}>
            <FontAwesome name='search' size={RFValue(20)} style={styles.iconSearch}/>
            <TextInput placeholder='Search' />
        </View>
        <View style={styles.iconContainer}>
            <Feather name='menu' size={RFValue(25)} style={styles.iconMenu}/>
        </View>
    </View>
  );
}