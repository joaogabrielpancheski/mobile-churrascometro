import React, {useState, useEffect} from 'react';

import BottomButtons from '../../components/BottomButtons';
import OptionButton from '../../components/OptionButton';
import PageContainer from '../../components/PageContainer';
import PageContent from '../../components/PageContent';

export default function Meat({route, navigation}) {
  const [participants, setParticipants] = useState({});
  const [items, setItems] = useState({
    meat: {},
    garnish: {},
    drinks: {},
    supplies: {},
  });

  const [filetSteak, setFiletSteak] = useState(false);
  const [rump, setRump] = useState(false);
  const [titty, setTitty] = useState(false);
  const [termite, setTermite] = useState(false);
  const [sausage, setSausage] = useState(false);
  const [chicken, setChicken] = useState(false);
  const [rib, setRib] = useState(false);
  const [chickenHeart, setChickenHeart] = useState(false);
  const [others, setOthers] = useState(false);

  useEffect(() => {
    const {
      items: {meat, garnish, drinks, supplies},
    } = route.params;

    setParticipants(route.params.participants);
    setItems({garnish, drinks, supplies});

    setFiletSteak(!!meat.filetSteak);
    setRump(!!meat.rump);
    setTitty(!!meat.titty);
    setTermite(!!meat.termite);
    setSausage(!!meat.sausage);
    setChicken(!!meat.chicken);
    setRib(!!meat.rib);
    setChickenHeart(!!meat.chickenHeart);
    setOthers(!!meat.others);
  }, [route.params]);

  return (
    <PageContainer>
      <PageContent title="Carnes" subtitle="Clique nas carnes que você deseja">
        <OptionButton
          pressed={filetSteak}
          onPress={() => {
            setFiletSteak(!filetSteak);
          }}
          text="Picanha"
        />
        <OptionButton
          pressed={rump}
          onPress={() => {
            setRump(!rump);
          }}
          text="Alcatra"
        />
        <OptionButton
          pressed={titty}
          onPress={() => {
            setTitty(!titty);
          }}
          text="Maminha"
        />
        <OptionButton
          pressed={termite}
          onPress={() => {
            setTermite(!termite);
          }}
          text="Cupim"
        />
        <OptionButton
          pressed={sausage}
          onPress={() => {
            setSausage(!sausage);
          }}
          text="Linguiça"
        />
        <OptionButton
          pressed={chicken}
          onPress={() => {
            setChicken(!chicken);
          }}
          text="Frango (sobrecoxa e asa)"
        />
        <OptionButton
          pressed={rib}
          onPress={() => {
            setRib(!rib);
          }}
          text="Costela"
        />
        <OptionButton
          pressed={chickenHeart}
          onPress={() => {
            setChickenHeart(!chickenHeart);
          }}
          text="Coração de Frango"
        />
        <OptionButton
          pressed={others}
          onPress={() => {
            setOthers(!others);
          }}
          text="Outras Carnes"
        />
      </PageContent>

      <BottomButtons
        showLeftButton
        leftButtonText="Anterior"
        leftButtonFunction={() => {
          navigation.navigate('Participants', {
            participants,
            items: {
              ...items,
              meat: {
                filetSteak,
                rump,
                titty,
                termite,
                sausage,
                chicken,
                rib,
                chickenHeart,
                others,
              },
            },
          });
        }}
        showRightButton
        rightButtonText="Próximo"
        rightButtonFunction={() => {
          navigation.navigate('Garnish', {
            participants,
            items: {
              ...items,
              meat: {
                filetSteak,
                rump,
                titty,
                termite,
                sausage,
                chicken,
                rib,
                chickenHeart,
                others,
              },
            },
          });
        }}
      />
    </PageContainer>
  );
}
