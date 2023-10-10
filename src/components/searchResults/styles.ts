import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    /* background-color: red; */
    /* justify-content: center; */
    /* align-items: center; */
`;

export const NoResultContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const NoResultsText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #555; 
  /* text-align: center;  */
  /* margin-top: 20px;  */
`;

export const FoundResult = styled.ScrollView`
  flex: 1;
 /*  flex-direction: row; */
`;