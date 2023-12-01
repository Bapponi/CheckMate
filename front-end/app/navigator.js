// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PosScreen from '../screens/Home';
import Home from './home'
import Table from '../screens/Table';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="POS" component={PosScreen} />
      <Stack.Screen name="Tables" component={Home} />
      <Stack.Screen name="Table" component={Table} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
