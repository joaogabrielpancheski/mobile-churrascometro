import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  /* background-color: red; */
`;

export const Title = styled.Text`
  margin-top: 50px;
  width: 100%;
  text-align: center;
`;

export const Button = styled(RectButton)`
  background: ${props => (props.pressed ? '#ff0000' : '#0000ff')};
  width: 100px;
`;
