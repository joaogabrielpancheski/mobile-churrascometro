import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background: ${props => (props.pressed ? '#FF7300' : '#fff')};
  padding: 10px 20px;
  border: 1px solid #ff7300;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

export const Text = styled.Text`
  color: ${props => (props.pressed ? '#fff' : '#FF7300')};
`;
