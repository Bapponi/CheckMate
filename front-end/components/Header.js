// src/components/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
        <TouchableOpacity style={styles.floors}>
            <Text style={styles.floorText}> FLOOR 1</Text>
            <Image source={icons.arrow_forward} style={styles.arrowForward}></Image>
        </TouchableOpacity>
        <Text>{title}</Text>
        <TouchableOpacity style={styles.lists}>
            <Image source={icons.lists} style={styles.listsImage}></Image>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
      floors:{
        flex: 1,
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      floorText:{
        fontFamily: FONT.bold,
        fontSize: SIZES.large
      },
      lists: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
      },
      arrowForward: {
        height: 30,
        width: 30
      },
      listsImage: {
        height: 40,
        width: 40
      }, 
});

export default Header;
