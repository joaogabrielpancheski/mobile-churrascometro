import React, {useState, useEffect} from 'react';
import {View, Text, Button as ButtonRN} from 'react-native';

import {
  Container,
  CentralizedContainer,
  SuccessButton,
  SuccessButtonText,
  ErrorButton,
  ErrorButtonText,
} from './styles';

export default function BottomButtons({
  showLeftButton,
  leftButtonText,
  leftButtonFunction,
  showRightButton,
  rightButtonText,
  rightButtonFunction,
  showCentralButton,
  centralButtonText,
  centralButtonFunction,
}) {
  return (
    <>
      {showCentralButton ? (
        <CentralizedContainer>
          <SuccessButton onPress={centralButtonFunction}>
            <SuccessButtonText>{centralButtonText}</SuccessButtonText>
          </SuccessButton>
        </CentralizedContainer>
      ) : (
        <Container>
          {showLeftButton ? (
            <ErrorButton onPress={leftButtonFunction}>
              <ErrorButtonText>{leftButtonText}</ErrorButtonText>
            </ErrorButton>
          ) : (
            <View />
          )}

          {showRightButton ? (
            <SuccessButton onPress={rightButtonFunction}>
              <SuccessButtonText>{rightButtonText}</SuccessButtonText>
            </SuccessButton>
          ) : (
            <View />
          )}
        </Container>
      )}
    </>
  );
}
