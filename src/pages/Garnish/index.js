import React, {useState, useEffect} from 'react';

import BottomButtons from '../../components/BottomButtons';
import OptionButton from '../../components/OptionButton';
import PageContainer from '../../components/PageContainer';
import PageContent from '../../components/PageContent';

export default function Garnish({route, navigation}) {
  const [participants, setParticipants] = useState({});
  const [items, setItems] = useState({
    meat: {},
    garnish: {},
    drinks: {},
    supplies: {},
  });

  const [rice, setRice] = useState(false);
  const [farofa, setFarofa] = useState(false);
  const [mayonnaise, setMayonnaise] = useState(false);
  const [garlicBread, setGarlicBread] = useState(false);
  const [curdCheese, setCurdCheese] = useState(false);
  const [vinaigrette, setVinaigrette] = useState(false);

  useEffect(() => {
    const {
      items: {meat, garnish, drinks, supplies},
    } = route.params;

    setParticipants(route.params.participants);
    setItems({meat, drinks, supplies});

    setRice(!!garnish.rice);
    setFarofa(!!garnish.farofa);
    setMayonnaise(!!garnish.mayonnaise);
    setGarlicBread(!!garnish.garlicBread);
    setCurdCheese(!!garnish.curdCheese);
    setVinaigrette(!!garnish.vinaigrette);
  }, [route.params]);

  return (
    <PageContainer>
      <PageContent
        title="Acompanhamentos"
        subtitle="Clique nos acompanhamentos que você deseja">
        <OptionButton
          pressed={rice}
          onPress={() => {
            setRice(!rice);
          }}
          text="Arroz"
        />
        <OptionButton
          pressed={farofa}
          onPress={() => {
            setFarofa(!farofa);
          }}
          text="Farofa"
        />
        <OptionButton
          pressed={mayonnaise}
          onPress={() => {
            setMayonnaise(!mayonnaise);
          }}
          text="Maionese"
        />
        <OptionButton
          pressed={garlicBread}
          onPress={() => {
            setGarlicBread(!garlicBread);
          }}
          text="Pão de alho"
        />
        <OptionButton
          pressed={curdCheese}
          onPress={() => {
            setCurdCheese(!curdCheese);
          }}
          text="Queijo coalho"
        />
        <OptionButton
          pressed={vinaigrette}
          onPress={() => {
            setVinaigrette(!vinaigrette);
          }}
          text="Vinagrete"
        />
      </PageContent>

      <BottomButtons
        showLeftButton
        leftButtonText="Anterior"
        leftButtonFunction={() => {
          navigation.navigate('Meat', {
            participants,
            items: {
              ...items,
              garnish: {
                rice,
                farofa,
                mayonnaise,
                garlicBread,
                curdCheese,
                vinaigrette,
              },
            },
          });
        }}
        showRightButton
        rightButtonText="Próximo"
        rightButtonFunction={() => {
          navigation.navigate('Drinks', {
            participants,
            items: {
              ...items,
              garnish: {
                rice,
                farofa,
                mayonnaise,
                garlicBread,
                curdCheese,
                vinaigrette,
              },
            },
          });
        }}
      />
    </PageContainer>
  );
}
