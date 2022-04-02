import React, {useState, useEffect} from 'react';

import BottomButtons from '../../components/BottomButtons';
import OptionButton from '../../components/OptionButton';
import PageContainer from '../../components/PageContainer';
import PageContent from '../../components/PageContent';

export default function Supplies({route, navigation}) {
  const [participants, setParticipants] = useState({});
  const [items, setItems] = useState({
    meat: {},
    garnish: {},
    drinks: {},
    supplies: {},
  });

  const [coal, setCoal] = useState(false);
  const [cups, setCups] = useState(false);
  const [ice, setIce] = useState(false);
  const [napkin, setNapkin] = useState(false);
  const [lemon, setLemon] = useState(false);
  const [plates, setPlates] = useState(false);
  const [coarseSalt, setCoarseSalt] = useState(false);
  const [silverware, setSilverware] = useState(false);

  useEffect(() => {
    const {
      items: {meat, garnish, drinks, supplies},
    } = route.params;

    setParticipants(route.params.participants);
    setItems({meat, garnish, drinks});

    setCoal(!!supplies.coal);
    setCups(!!supplies.cups);
    setIce(!!supplies.ice);
    setNapkin(!!supplies.napkin);
    setLemon(!!supplies.lemon);
    setPlates(!!supplies.plates);
    setCoarseSalt(!!supplies.coarseSalt);
    setSilverware(!!supplies.silverware);
  }, [route.params]);

  return (
    <PageContainer>
      <PageContent
        title="Suprimentos"
        subtitle="Clique nos suprimentos que você deseja">
        <OptionButton
          pressed={coal}
          onPress={() => {
            setCoal(!coal);
          }}
          text="Carvão"
        />
        <OptionButton
          pressed={cups}
          onPress={() => {
            setCups(!cups);
          }}
          text="Copos"
        />
        <OptionButton
          pressed={ice}
          onPress={() => {
            setIce(!ice);
          }}
          text="Gelo"
        />
        <OptionButton
          pressed={napkin}
          onPress={() => {
            setNapkin(!napkin);
          }}
          text="Guardanapos"
        />
        <OptionButton
          pressed={lemon}
          onPress={() => {
            setLemon(!lemon);
          }}
          text="Limão"
        />
        <OptionButton
          pressed={plates}
          onPress={() => {
            setPlates(!plates);
          }}
          text="Pratos"
        />
        <OptionButton
          pressed={coarseSalt}
          onPress={() => {
            setCoarseSalt(!coarseSalt);
          }}
          text="Sal grosso"
        />
        <OptionButton
          pressed={silverware}
          onPress={() => {
            setSilverware(!silverware);
          }}
          text="Talheres"
        />
      </PageContent>

      <BottomButtons
        showLeftButton
        leftButtonText="Anterior"
        leftButtonFunction={() => {
          navigation.navigate('Drinks', {
            participants,
            items: {
              ...items,
              supplies: {
                coal,
                cups,
                ice,
                napkin,
                lemon,
                plates,
                coarseSalt,
                silverware,
              },
            },
          });
        }}
        showRightButton
        rightButtonText="Calcular"
        rightButtonFunction={() => {
          navigation.navigate('Result', {
            participants,
            items: {
              ...items,
              supplies: {
                coal,
                cups,
                ice,
                napkin,
                lemon,
                plates,
                coarseSalt,
                silverware,
              },
            },
          });
        }}
      />
    </PageContainer>
  );
}
