import { Dimensions, StatusBar, Platform } from 'react-native';
import theme from '../../global/styles/theme';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';

export const Container = styled.SafeAreaView`
  padding-top: ${StatusBar.currentHeight}px;
  background-color: ${theme.colors_backgrounds.primary};
`;

export const ScrollViewContainer = styled.ScrollView`
  background-color: ${theme.colors_backgrounds.primary};
`;

export const CategoryBar = styled.ScrollView`
  flex-direction: row;
  padding: ${RFValue(2)}px 0;
  margin: 0 ${RFValue(1)}px;
`;

export const CategoryInfo = styled.TouchableOpacity`
  width: ${RFValue(60)}px; 
  flex-direction: column; 
  margin: 0 ${RFValue(5)}px;
  justify-content: center; 
  align-items: center; 
`;

export const CategoryInfoImgContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const CategoryInfoImg = styled.Image`
  width: ${RFValue(50)}px; 
  height: ${RFValue(50)}px; 
  border-radius: 50px;
  background-color: ${theme.colors_backgrounds.statusBarItem};
`;

export const CategoryInfoTitle = styled.Text`
  flex: 1;
  color: ${theme.colors_text.itemName};
  font-size: ${RFValue(10)}px;
  font-style: normal;
  font-weight: 500;
  text-align: center; 
  margin: ${RFValue(1)}px;
  flex-wrap: wrap; 
`;

