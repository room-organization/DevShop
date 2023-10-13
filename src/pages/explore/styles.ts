import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'react-native'
import styled from 'styled-components/native'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'
import theme from '../../global/styles/theme'

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${StatusBar.currentHeight}px;
  flex-direction: column;
  background-color: ${theme.colors_backgrounds.primary};
`;

export const SearchSection = styled.View`
  height: ${RFPercentage(7)}px;
  margin: 10px 2px;
`;

export const SearchBar = styled.View`

  height: ${RFPercentage(6)}px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  flex-grow: 1;
  margin: 0 2px;
  border-color: ${theme.colors_backgrounds.lightBlue};
`;
export const IconSearch = styled(FontAwesome5)`
  color: ${theme.colors_backgrounds.icons};
  font-size: ${RFValue(20)}px;
  margin: 0 ${RFValue(20)}px;
`;
export const Input = styled.TextInput`
  flex-grow: 1;
  height: ${RFPercentage(6)}px;
  
`;
export const Categories = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CategoryItem = styled.View`
  flex-direction: column;
  padding: ${RFValue(10)}px;
  align-items: center;
  width: 100px; 
  max-width: 100%; 
  margin: ${RFValue(1)}px;
  text-align: center;
`;
export const IconCategoryItem = styled(FontAwesome5)`
  color: ${theme.colors_backgrounds.secondary};
  font-size: ${RFValue(24)}px;
  border-width: 1px;
  padding: ${RFValue(15)}px;
  border-radius: ${RFValue(50)}px;
  margin: ${RFValue(5)}px 0;
  border-color: ${theme.colors_backgrounds.lightBlue};
`;

export const Title= styled.Text`
  color: ${theme.colors_text.secondary};
`;