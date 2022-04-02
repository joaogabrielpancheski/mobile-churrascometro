import React, {useState, useEffect} from 'react';
import {Button} from 'react-native';

import BottomButtons from '../../components/BottomButtons';
import PageContainer from '../../components/PageContainer';

import {
  Content,
  Title,
  ParticipantContainer,
  Text,
  PageTitle,
  ControlContainer,
  ButtonContainer,
  ButtonText,
} from './styles';

export default function Participants({route, navigation}) {
  const [items, setItems] = useState({
    meat: {},
    garnish: {},
    drinks: {},
    supplies: {},
  });

  const [nonVegetarianMan, setNonVegetarianMan] = useState(0);
  const [nonVegetarianWoman, setNonVegetarianWoman] = useState(0);
  const [nonVegetarianChild, setNonVegetarianChild] = useState(0);
  const [vegetarianMan, setVegetarianMan] = useState(0);
  const [vegetarianWoman, setVegetarianWoman] = useState(0);
  const [vegetarianChild, setVegetarianChild] = useState(0);

  useEffect(() => {
    const {participants} = route.params;

    setItems(route.params.items);

    setNonVegetarianMan(participants.nonVegetarianMan || 0);
    setNonVegetarianWoman(participants.nonVegetarianWoman || 0);
    setNonVegetarianChild(participants.nonVegetarianChild || 0);
    setVegetarianMan(participants.vegetarianMan || 0);
    setVegetarianWoman(participants.vegetarianWoman || 0);
    setVegetarianChild(participants.vegetarianChild || 0);
  }, [route.params]);

  return (
    <PageContainer>
      <Content>
        <PageTitle>Convidados</PageTitle>

        <Title>Não vegetarianos</Title>

        <ParticipantContainer>
          <Text>Homens</Text>
          <ControlContainer>
            <ButtonContainer
              onPress={() => {
                if (nonVegetarianMan > 0) {
                  setNonVegetarianMan(nonVegetarianMan - 1);
                }
              }}>
              <ButtonText>-</ButtonText>
            </ButtonContainer>
            <Text>{nonVegetarianMan}</Text>
            <ButtonContainer
              onPress={() => {
                setNonVegetarianMan(nonVegetarianMan + 1);
              }}>
              <ButtonText>+</ButtonText>
            </ButtonContainer>
          </ControlContainer>
        </ParticipantContainer>

        <ParticipantContainer>
          <Text>Mulheres</Text>
          <ControlContainer>
            <ButtonContainer
              onPress={() => {
                if (nonVegetarianWoman > 0) {
                  setNonVegetarianWoman(nonVegetarianWoman - 1);
                }
              }}>
              <ButtonText>-</ButtonText>
            </ButtonContainer>
            <Text>{nonVegetarianWoman}</Text>
            <ButtonContainer
              onPress={() => {
                setNonVegetarianWoman(nonVegetarianWoman + 1);
              }}>
              <ButtonText>+</ButtonText>
            </ButtonContainer>
          </ControlContainer>
        </ParticipantContainer>

        <ParticipantContainer>
          <Text>Crianças</Text>
          <ControlContainer>
            <ButtonContainer
              onPress={() => {
                if (nonVegetarianChild > 0) {
                  setNonVegetarianChild(nonVegetarianChild - 1);
                }
              }}>
              <ButtonText>-</ButtonText>
            </ButtonContainer>
            <Text>{nonVegetarianChild}</Text>
            <ButtonContainer
              onPress={() => {
                setNonVegetarianChild(nonVegetarianChild + 1);
              }}>
              <ButtonText>+</ButtonText>
            </ButtonContainer>
          </ControlContainer>
        </ParticipantContainer>

        <Title>Vegetarianos</Title>

        <ParticipantContainer>
          <Text>Homens</Text>
          <ControlContainer>
            <ButtonContainer
              onPress={() => {
                if (vegetarianMan > 0) {
                  setVegetarianMan(vegetarianMan - 1);
                }
              }}>
              <ButtonText>-</ButtonText>
            </ButtonContainer>
            <Text>{vegetarianMan}</Text>
            <ButtonContainer
              onPress={() => {
                setVegetarianMan(vegetarianMan + 1);
              }}>
              <ButtonText>+</ButtonText>
            </ButtonContainer>
          </ControlContainer>
        </ParticipantContainer>

        <ParticipantContainer>
          <Text>Mulheres</Text>
          <ControlContainer>
            <ButtonContainer
              onPress={() => {
                if (vegetarianWoman > 0) {
                  setVegetarianWoman(vegetarianWoman - 1);
                }
              }}>
              <ButtonText>-</ButtonText>
            </ButtonContainer>
            <Text>{vegetarianWoman}</Text>
            <ButtonContainer
              onPress={() => {
                setVegetarianWoman(vegetarianWoman + 1);
              }}>
              <ButtonText>+</ButtonText>
            </ButtonContainer>
          </ControlContainer>
        </ParticipantContainer>

        <ParticipantContainer>
          <Text>Crianças</Text>
          <ControlContainer>
            <ButtonContainer
              onPress={() => {
                if (vegetarianChild > 0) {
                  setVegetarianChild(vegetarianChild - 1);
                }
              }}>
              <ButtonText>-</ButtonText>
            </ButtonContainer>
            <Text>{vegetarianChild}</Text>
            <ButtonContainer
              onPress={() => {
                setVegetarianChild(vegetarianChild + 1);
              }}>
              <ButtonText>+</ButtonText>
            </ButtonContainer>
          </ControlContainer>
        </ParticipantContainer>
      </Content>

      <BottomButtons
        showRightButton
        rightButtonText="Próximo"
        rightButtonFunction={() => {
          navigation.navigate('Meat', {
            items,
            participants: {
              nonVegetarianMan,
              nonVegetarianWoman,
              nonVegetarianChild,
              vegetarianMan,
              vegetarianWoman,
              vegetarianChild,
            },
          });
        }}
      />
    </PageContainer>
  );
}
