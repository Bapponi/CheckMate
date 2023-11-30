import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const PosScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Welcome to the POS App!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PosScreen;