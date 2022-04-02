import React from 'react';

import {Container, Text} from './styles';

export default function OptionButton({pressed, onPress, text}) {
  return (
    <Container pressed={pressed} onPress={onPress}>
      <Text pressed={pressed}>{text}</Text>
    </Container>
  );
}
