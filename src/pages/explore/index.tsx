import React from 'react'
import { SafeAreaView} from 'react-native'

import { SearchSection } from '../../components/searchSection'
import { Categories } from '../categories'

import { styles } from './styles'

export function Explore() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchSection/>
      <Categories/>
    </SafeAreaView>
  )
}