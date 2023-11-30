// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PosScreen from '../screens/Home';
import Header from '../components/Header';
import Table from '../screens/Table'

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <View>
    <Header title="CheckMate" />
    <Stack.Navigator>
      <Stack.Screen name="POS" component={PosScreen} />
      <Stack.Screen name="Table" component={Table} />
    </Stack.Navigator>
    </View>
  );
};

export default AppNavigator;
