import {StyleSheet} from 'react-native';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    borderBottomColor: theme.colors_backgrounds.secondary,
    borderBottomWidth: 1,
    paddingBottom: 20
  },
  image: {
    width: '30%', //124
    height: 101,
    borderRadius: 20,
    backgroundColor: 'gray',
  },
  titleSection:{
    marginLeft: 16,
  },
});
