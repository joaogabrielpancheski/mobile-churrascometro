import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Home from './pages/Home';
import Participants from './pages/Participants';
import Meat from './pages/Meat';
import Garnish from './pages/Garnish';
import Drinks from './pages/Drinks';
import Supplies from './pages/Supplies';
import Result from './pages/Result';

const theme = DefaultTheme;
theme.colors.background = '#fff';

const Stack = createNativeStackNavigator();

const Routes = () => (
  <NavigationContainer theme={theme}>
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Participants" component={Participants} />
      <Stack.Screen name="Meat" component={Meat} />
      <Stack.Screen name="Garnish" component={Garnish} />
      <Stack.Screen name="Drinks" component={Drinks} />
      <Stack.Screen name="Supplies" component={Supplies} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
