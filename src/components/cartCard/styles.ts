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
    borderRadius: 15,
    // backgroundColor: 'gray',
    borderWidth: 1,
    borderColor: theme.colors_backgrounds.secondary,
    padding: 2,
  },
  titleSection:{
    marginLeft: 16,
  },
});
