import { ScrollView } from 'react-native'
import { styles } from './styles'
import { StatusBar } from '../statusBar'

export const HorizontasScrollView = () => {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      //  contentContainerStyle={}
      showsHorizontalScrollIndicator={false}
    >
      <StatusBar />
    </ScrollView>
  )
}
