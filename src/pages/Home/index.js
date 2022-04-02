import React, {useState} from 'react';

import PageContainer from '../../components/PageContainer';
import BottomButtons from '../../components/BottomButtons';

import {Content, Title, Subtitle} from './styles';

export default function Home({navigation}) {
  return (
    <PageContainer>
      <Content>
        <Title>Bem-vindo ao Churrascômetro</Title>
        <Subtitle>
          Aqui você pode calcular a quantidade de itens necessários para o seu
          churrasco de forma fácil
        </Subtitle>
      </Content>

      <BottomButtons
        showCentralButton
        centralButtonText="Começar"
        centralButtonFunction={() => {
          navigation.navigate('Participants', {
            items: {
              meat: {},
              garnish: {},
              drinks: {},
              supplies: {},
            },
            participants: {},
          });
        }}
      />

      {/* <Button
        onPress={() => {
          navigation.navigate('Participants', {
            items: {
              meat: {},
              garnish: {},
              drinks: {},
              supplies: {},
            },
            participants: {},
          });
        }}
        title="Começar"
      /> */}
    </PageContainer>
  );
}
