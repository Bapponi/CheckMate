import { useState } from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, SIZES, FONT } from "../constants";

const Home = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity style={styles.floors}>
              <Text style={styles.floorText}> FLOOR 1</Text>
              <Image source={icons.arrow_forward} style={styles.arrowForward}></Image>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.lists}>
              <Image source={icons.lists} style={styles.listsImage}></Image>
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.tableArea}>
          <Text>GUGU ZAZA</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
    backgroundColor: COLORS.lightWhite
  },
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
  tableArea: {
    height: 640,
    backgroundColor: COLORS.tertiary,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default Home;
