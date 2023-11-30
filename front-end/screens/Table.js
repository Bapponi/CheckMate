import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Table = ({ route }) => {
  const router = useRouter();
  const { tableId } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Sto racun gas {tableId}</Text>
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