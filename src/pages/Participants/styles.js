import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';

export const Content = styled.View``;

export const PageTitle = styled.Text`
  margin-top: 50px;
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #ff7300;
`;

export const Title = styled.Text`
  margin-top: 40px;
  text-align: center;
  margin-bottom: 10px;
  font-size: 17px;
  color: #ff7300;
`;

export const ParticipantContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 0 40px;
  background-color: #ff7300;
`;

export const Text = styled.Text`
  color: #fff;
`;

export const ControlContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 130px;
  height: 50px;
`;

export const ButtonContainer = styled(RectButton)`
  background-color: #fff;
  width: 26px;
  height: 26px;
  border-radius: 13px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #ff7300;
  font-size: 20px;
`;
