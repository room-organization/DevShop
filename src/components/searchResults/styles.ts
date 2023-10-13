import { StyleSheet } from 'react-native';
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
`;
export const styles = StyleSheet.create({ 
  cardContainer: {
    width: '50%', 
    justifyContent: 'center',
    alignItems: 'center',
  }
}
)

export const NoResultContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const NoResultsText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #555; 

`;

export const FoundResult = styled.ScrollView`
  flex: 1;
`;