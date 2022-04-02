import React from 'react';

import {Container, Title, Subtitle, OptionsContainer} from './styles';

export default function PageContent({children, title, subtitle}) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <OptionsContainer>{children}</OptionsContainer>
    </Container>
  );
}
