import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Table = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Sto racun gas</Text>
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

export default Table;