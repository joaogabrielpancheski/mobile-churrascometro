import React, {useState, useEffect, useMemo} from 'react';

import BottomButtons from '../../components/BottomButtons';
import PageContainer from '../../components/PageContainer';

import {Content, CategoryTitle, PageTitle, ItemContainer, Text} from './styles';

export default function Result({route, navigation}) {
  const [participants, setParticipants] = useState({});
  const [meat, setMeat] = useState({});
  const [generalItems, setGeneralItems] = useState({
    garnish: {},
    drinks: {},
    supplies: {},
  });
  const [result, setResult] = useState({
    meat: [],
    garnish: [],
    drinks: [],
    supplies: [],
  });

  useEffect(() => {
    const {meat: auxMeat, ...items} = route.params.items;
    setParticipants(route.params.participants);
    setMeat(auxMeat);
    setGeneralItems(items);
  }, [route.params]);

  useEffect(() => {
    const calculate = async () => {
      const quantities = {
        meat: {
          filetSteak: {
            translatedName: 'Picanha',
            man: 100,
            woman: 80,
            child: 50,
            doubleUntilTwoOptions: true,
            unit: 'g',
          },
          rump: {
            translatedName: 'Alcatra',
            man: 100,
            woman: 80,
            child: 50,
            doubleUntilTwoOptions: true,
            unit: 'g',
          },
          titty: {
            translatedName: 'Maminha',
            man: 100,
            woman: 80,
            child: 50,
            doubleUntilTwoOptions: true,
            unit: 'g',
          },
          termite: {
            translatedName: 'Cupim',
            man: 100,
            woman: 80,
            child: 50,
            doubleUntilTwoOptions: true,
            unit: 'g',
          },
          sausage: {
            translatedName: 'Linguiça',
            man: 100,
            woman: 80,
            child: 50,
            doubleUntilTwoOptions: true,
            unit: 'g',
          },
          chicken: {
            translatedName: 'Frango (sobrecoxa e asa)',
            man: 175,
            woman: 140,
            child: 90,
            doubleUntilTwoOptions: false,
            unit: 'g',
          },
          rib: {
            translatedName: 'Costela',
            man: 150,
            woman: 120,
            child: 75,
            doubleUntilTwoOptions: true,
            unit: 'g',
          },
          chickenHeart: {
            translatedName: 'Coração de Frango',
            man: 50,
            woman: 40,
            child: 25,
            doubleUntilTwoOptions: false,
            unit: 'g',
          },
          others: {
            translatedName: 'Outras Carnes',
            man: 100,
            woman: 100,
            child: 50,
            doubleUntilTwoOptions: false,
            unit: 'g',
          },
        },
        garnish: {
          rice: {
            translatedName: 'Arroz',
            man: 40,
            woman: 40,
            child: 40,
            unit: 'g',
          },
          farofa: {
            translatedName: 'Farofa',
            man: 30,
            woman: 30,
            child: 15,
            unit: 'g',
          },
          mayonnaise: {
            translatedName: 'Maionese',
            man: 60,
            woman: 60,
            child: 60,
            unit: 'g',
          },
          garlicBread: {
            translatedName: 'Pão de alho',
            man: 50,
            woman: 50,
            child: 50,
            unit: 'g',
          },
          curdCheese: {
            translatedName: 'Queijo coalho',
            man: 30,
            woman: 30,
            child: 30,
            unit: 'g',
          },
          vinaigrette: {
            translatedName: 'Vinagrete',
            man: 20,
            woman: 20,
            child: 10,
            unit: 'g',
          },
        },
        drinks: {
          water: {
            translatedName: 'Água',
            man: 200,
            woman: 200,
            child: 200,
            unit: 'mL',
          },
          liquor: {
            translatedName: 'Cachaça',
            man: 50,
            woman: 50,
            child: 0,
            unit: 'mL',
          },
          beer: {
            translatedName: 'Cerveja',
            man: 1000,
            woman: 1000,
            child: 0,
            unit: 'mL',
          },
          soda: {
            translatedName: 'Refrigerante',
            man: 500,
            woman: 500,
            child: 500,
            unit: 'mL',
          },
          juice: {
            translatedName: 'Suco',
            man: 300,
            woman: 300,
            child: 300,
            unit: 'mL',
          },
          wine: {
            translatedName: 'Vinho',
            man: 700,
            woman: 700,
            child: 0,
            unit: 'mL',
          },
          vodka: {
            translatedName: 'Vodka',
            man: 50,
            woman: 50,
            child: 0,
            unit: 'mL',
          },
        },
        supplies: {
          coal: {
            translatedName: 'Carvão',
            man: 500,
            woman: 400,
            child: 250,
            unit: 'g',
          },
          cups: {
            translatedName: 'Copos',
            man: 3,
            woman: 3,
            child: 3,
            unit: 'UN',
          },
          ice: {
            translatedName: 'Gelo',
            man: 1500,
            woman: 1500,
            child: 1500,
            unit: 'g',
          },
          napkin: {
            translatedName: 'Guardanapos',
            man: 3,
            woman: 3,
            child: 3,
            unit: 'UN',
          },
          lemon: {
            translatedName: 'Limão',
            man: 1,
            woman: 1,
            child: 1,
            unit: 'UN',
          },
          plates: {
            translatedName: 'Pratos',
            man: 2,
            woman: 2,
            child: 2,
            unit: 'UN',
          },
          coarseSalt: {
            translatedName: 'Sal grosso',
            man: 50,
            woman: 40,
            child: 25,
            unit: 'g',
          },
          silverware: {
            translatedName: 'Talheres',
            man: 2,
            woman: 2,
            child: 2,
            unit: 'UN',
          },
        },
      };

      let meatVarietyAmount = 0;
      const selectedMeats = [];
      const selectedItems = {
        meat: [],
        garnish: [],
        drinks: [],
        supplies: [],
      };

      for (const itemKey in meat) {
        if (meat[itemKey]) {
          selectedMeats.push(itemKey);
          meatVarietyAmount++;
        }
      }

      for (const itemKey of selectedMeats) {
        let totalQuantity = 0;
        const quantity =
          participants.nonVegetarianMan * quantities.meat[itemKey].man +
          participants.nonVegetarianWoman * quantities.meat[itemKey].woman +
          participants.nonVegetarianChild * quantities.meat[itemKey].child;

        if (meatVarietyAmount > 2) {
          totalQuantity = quantity;
        } else if (meatVarietyAmount === 2) {
          if (quantities.meat[itemKey].doubleUntilTwoOptions) {
            totalQuantity = quantity * 2;
          } else {
            totalQuantity = quantity;
          }
        } else {
          totalQuantity = quantity * 2;
        }

        let finalUnit = quantities.meat[itemKey].unit;

        if (totalQuantity >= 1000) {
          if (finalUnit === 'g') {
            finalUnit = 'Kg';
            totalQuantity = totalQuantity / 1000;
          } else if (finalUnit === 'mL') {
            finalUnit = 'L';
            totalQuantity = totalQuantity / 1000;
          }
        }

        selectedItems.meat.push({
          key: itemKey,
          name: quantities.meat[itemKey].translatedName,
          quantity: totalQuantity,
          unit: finalUnit,
        });
      }

      for (const categoryKey in generalItems) {
        const category = generalItems[categoryKey];
        for (const itemKey in category) {
          if (category[itemKey]) {
            let quantity =
              participants.nonVegetarianMan *
                quantities[categoryKey][itemKey].man +
              participants.nonVegetarianWoman *
                quantities[categoryKey][itemKey].woman +
              participants.nonVegetarianChild *
                quantities[categoryKey][itemKey].child +
              participants.vegetarianMan *
                quantities[categoryKey][itemKey].man +
              participants.vegetarianWoman *
                quantities[categoryKey][itemKey].woman +
              participants.vegetarianChild *
                quantities[categoryKey][itemKey].child;

            let finalUnit = quantities[categoryKey][itemKey].unit;

            if (quantity >= 1000) {
              if (finalUnit === 'g') {
                finalUnit = 'Kg';
                quantity = quantity / 1000;
              } else if (finalUnit === 'mL') {
                finalUnit = 'L';
                quantity = quantity / 1000;
              }
            }

            selectedItems[categoryKey].push({
              key: itemKey,
              name: quantities[categoryKey][itemKey].translatedName,
              quantity,
              unit: finalUnit,
            });
          }
        }
      }

      setResult(selectedItems);
    };

    calculate();
  }, [route.params, meat, participants, generalItems]);

  const hasParticipants = useMemo(() => {
    return (
      participants.nonVegetarianMan > 0 ||
      participants.nonVegetarianWoman > 0 ||
      participants.nonVegetarianChild > 0 ||
      participants.vegetarianMan > 0 ||
      participants.vegetarianWoman > 0 ||
      participants.vegetarianChild > 0
    );
  }, [participants]);

  const hasItems = useMemo(() => {
    return (
      result.meat.length > 0 ||
      result.garnish.length > 0 ||
      result.drinks.length > 0 ||
      result.supplies.length > 0
    );
  }, [result]);

  return (
    <PageContainer>
      <Content>
        <PageTitle>Resultado</PageTitle>

        {!hasParticipants && (
          <CategoryTitle>
            Você precisa adicionar pelo menos 1 participante
          </CategoryTitle>
        )}
        {hasParticipants && !hasItems && (
          <CategoryTitle>
            Você precisa selecionar pelo menos 1 item
          </CategoryTitle>
        )}

        {hasParticipants && hasItems && (
          <>
            {result.meat && result.meat.length > 0 && (
              <CategoryTitle>Carnes</CategoryTitle>
            )}
            {result.meat &&
              result.meat.length > 0 &&
              result.meat.map(item => (
                <ItemContainer>
                  <Text>{item.name}</Text>
                  <Text>
                    {item.quantity} {item.unit}
                  </Text>
                </ItemContainer>
              ))}

            {result.garnish && result.garnish.length > 0 && (
              <CategoryTitle>Acompanhamentos</CategoryTitle>
            )}
            {result.garnish &&
              result.garnish.length > 0 &&
              result.garnish.map(item => (
                <ItemContainer>
                  <Text>{item.name}</Text>
                  <Text>
                    {item.quantity} {item.unit}
                  </Text>
                </ItemContainer>
              ))}

            {result.drinks && result.drinks.length > 0 && (
              <CategoryTitle>Bebidas</CategoryTitle>
            )}
            {result.drinks &&
              result.drinks.length > 0 &&
              result.drinks.map(item => (
                <ItemContainer>
                  <Text>{item.name}</Text>
                  <Text>
                    {item.quantity} {item.unit}
                  </Text>
                </ItemContainer>
              ))}

            {result.supplies && result.supplies.length > 0 && (
              <CategoryTitle>Suprimentos</CategoryTitle>
            )}
            {result.supplies &&
              result.supplies.length > 0 &&
              result.supplies.map(item => (
                <ItemContainer>
                  <Text>{item.name}</Text>
                  <Text>
                    {item.quantity} {item.unit}
                  </Text>
                </ItemContainer>
              ))}
          </>
        )}
      </Content>

      <BottomButtons
        showLeftButton
        leftButtonText="Voltar"
        leftButtonFunction={() => {
          navigation.navigate('Supplies', {
            items: {
              ...generalItems,
              meat,
            },
            participants,
          });
        }}
      />
    </PageContainer>
  );
}
