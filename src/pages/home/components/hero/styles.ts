import { StyleSheet} from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  hero: {
    height: RFPercentage(32),
    marginTop: 10,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
})

export const HeroContainer = styled.View`
  height: ${RFPercentage(32)};
  margin: 10px 0;
`;

export const HeroImageBackground = styled.ImageBackground`
  flex: 1;
  resize: cover;
  justify-content: center;
`;

export const HeroText = styled.Text`
  align-self: center;
`;