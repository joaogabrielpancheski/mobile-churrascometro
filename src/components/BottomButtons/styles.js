import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';

export const CentralizedContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const SuccessButton = styled(RectButton)`
  background: #39c790;
  padding: 10px 20px;
  border: 1px solid #39c790;
  border-radius: 5px;
  margin-bottom: 30px;
`;

export const SuccessButtonText = styled.Text`
  color: #fff;
`;

export const ErrorButton = styled(RectButton)`
  background: #e3381a;
  padding: 10px 20px;
  border: 1px solid #e3381a;
  border-radius: 5px;
  margin-bottom: 30px;
`;

export const ErrorButtonText = styled.Text`
  color: #fff;
`;
