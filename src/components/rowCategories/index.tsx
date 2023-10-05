import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'

import { styles } from './styles'

export function RowCategory() {
  const categories = ['All', 'Newest', 'Popular', 'Dev']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const handleSelectedCategoryPress = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.rowCategories}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={[
            styles.itemRowCategory,
            selectedCategory === category && styles.active,
          ]}
          onPress={() => handleSelectedCategoryPress(category)}
        >
          <Text>{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}
