import React, {useState, useEffect} from 'react';

import BottomButtons from '../../components/BottomButtons';
import OptionButton from '../../components/OptionButton';
import PageContainer from '../../components/PageContainer';
import PageContent from '../../components/PageContent';

export default function Drinks({route, navigation}) {
  const [participants, setParticipants] = useState({});
  const [items, setItems] = useState({
    meat: {},
    garnish: {},
    drinks: {},
    supplies: {},
  });

  const [water, setWater] = useState(false);
  const [liquor, setLiquor] = useState(false);
  const [beer, setBeer] = useState(false);
  const [soda, setSoda] = useState(false);
  const [juice, setJuice] = useState(false);
  const [wine, setWine] = useState(false);
  const [vodka, setVodka] = useState(false);

  useEffect(() => {
    const {
      items: {meat, garnish, drinks, supplies},
    } = route.params;

    setParticipants(route.params.participants);
    setItems({meat, garnish, supplies});

    setWater(!!drinks.water);
    setLiquor(!!drinks.liquor);
    setBeer(!!drinks.beer);
    setSoda(!!drinks.soda);
    setJuice(!!drinks.juice);
    setWine(!!drinks.wine);
    setVodka(!!drinks.vodka);
  }, [route.params]);

  return (
    <PageContainer>
      <PageContent
        title="Bebidas"
        subtitle="Clique nas bebidas que você deseja">
        <OptionButton
          pressed={water}
          onPress={() => {
            setWater(!water);
          }}
          text="Água"
        />
        <OptionButton
          pressed={liquor}
          onPress={() => {
            setLiquor(!liquor);
          }}
          text="Cachaça"
        />
        <OptionButton
          pressed={beer}
          onPress={() => {
            setBeer(!beer);
          }}
          text="Cerveja"
        />
        <OptionButton
          pressed={soda}
          onPress={() => {
            setSoda(!soda);
          }}
          text="Refrigerante"
        />
        <OptionButton
          pressed={juice}
          onPress={() => {
            setJuice(!juice);
          }}
          text="Suco"
        />
        <OptionButton
          pressed={wine}
          onPress={() => {
            setWine(!wine);
          }}
          text="Vinho"
        />
        <OptionButton
          pressed={vodka}
          onPress={() => {
            setVodka(!vodka);
          }}
          text="Vodka"
        />
      </PageContent>

      <BottomButtons
        showLeftButton
        leftButtonText="Anterior"
        leftButtonFunction={() => {
          navigation.navigate('Garnish', {
            participants,
            items: {
              ...items,
              drinks: {water, liquor, beer, soda, juice, wine, vodka},
            },
          });
        }}
        showRightButton
        rightButtonText="Próximo"
        rightButtonFunction={() => {
          navigation.navigate('Supplies', {
            participants,
            items: {
              ...items,
              drinks: {water, liquor, beer, soda, juice, wine, vodka},
            },
          });
        }}
      />
    </PageContainer>
  );
}
