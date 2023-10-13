import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 5,
    marginBottom: Platform.OS === 'ios' ? 80 : 40,
  },
  cardContainer: {
    width: '50%', 
    justifyContent: 'center',
    alignItems: 'center',
  },
});
