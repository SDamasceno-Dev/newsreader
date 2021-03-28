// Styled Components Imports
import styled from 'styled-components/native';

export const LineRow = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const InputContainer = styled.View`
  width: 95%;
  height: 40px;
  border-radius: 20px;
  border-color: #cccccc;
  border-width: 0.5px;
  padding: 5px;
  align-self: center;
  justify-content: center;
`;

// News Items Elements
export const NewsContainer = styled.TouchableOpacity`
  width: 95%;
  min-height: 80px;
  border-radius: 15px;
  border-color: rgba(2, 44, 100, 0.3);
  border-width: 0.5px;
  align-self: center;
  padding: 7px;
  margin: 5px 0px;
`;

export const NewsAuthorText = styled.Text`
  width: 80%;
  font-family: 'ProximaNova-Medium';
  font-size: 11px;
  color: #666;
`;

export const NewsDateText = styled.Text`
  font-family: 'ProximaNova-Medium';
  font-size: 11px;
  color: #022c64;
`;

export const NewsTitleText = styled.Text`
  font-family: 'ProximaNova-Bold';
  font-size: 13px;
  color: #666;
`;

export const NewsContentText = styled.Text`
  font-family: 'ProximaNova-Light';
  font-size: 13px;
  color: #666;
`;
