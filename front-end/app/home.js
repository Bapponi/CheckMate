import { useState } from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, SIZES, FONT } from "../constants";

const handleTablePress = (item) => {
  const router = useRouter();
  router.push(`/screens/${item}`);
};

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
          <View style={styles.tablesLeft}>
            <View style={styles.barArea}>
              <View style={styles.bar}></View>
              <View style={styles.barChairs}>
                <TouchableOpacity 
                  style={[styles.barChair, {backgroundColor: COLORS.greenT}]}
                  onPress={() => handleTablePress(1)}
                >1</TouchableOpacity>
                <TouchableOpacity 
                  style={styles.barChair}
                  onPress={() => handleTablePress(2)}
                >2</TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.barChair, {backgroundColor: COLORS.lightWhite, borderWidth: 1}]}
                  onPress={() => handleTablePress(3)}  
                >3</TouchableOpacity>
                <TouchableOpacity 
                  style={styles.barChair}
                  onPress={() => handleTablePress(4)}
                >4</TouchableOpacity>
              </View>
            </View>
            <View style={styles.bottomTableArea}>
              <TouchableOpacity 
                style={styles.bottomTable}
                onPress={() => handleTablePress(5)}
              >5</TouchableOpacity>
            </View>
          </View>
          <View style={styles.tablesRight}>
            <View style={styles.tablesColumn}>
              <TouchableOpacity 
                style={styles.tableSmall}
                onPress={() => handleTablePress(6)}
              >6</TouchableOpacity>
              <TouchableOpacity 
                style={[styles.tableSmall, {backgroundColor: COLORS.greenT}]}
                onPress={() => handleTablePress(7)}
              >7</TouchableOpacity>
              <TouchableOpacity 
                style={[styles.tableSmall, {height: 120, backgroundColor: COLORS.lightWhite, borderWidth: 1}]}
                onPress={() => handleTablePress(8)}
              >8</TouchableOpacity>
            </View>
            <View style={styles.tablesColumn}>
              <TouchableOpacity 
                style={[styles.tableSmall, {backgroundColor: COLORS.lightWhite, borderWidth: 1}]}
                onPress={() => handleTablePress(9)}
              >9</TouchableOpacity>
              <TouchableOpacity 
                style={[styles.tableSmall, {backgroundColor: COLORS.lightWhite, borderWidth: 1}]}
                onPress={() => handleTablePress(10)}
              >10</TouchableOpacity>
              <TouchableOpacity 
                style={[styles.tableSmall, {backgroundColor: COLORS.redT}]}
                onPress={() => handleTablePress(11)}
              >11</TouchableOpacity>
              <TouchableOpacity 
                style={styles.tableSmall}
                onPress={() => handleTablePress(12)}
              >12</TouchableOpacity>
            </View>
          </View>
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
    fontFamily: FONT.blackB,
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
    height: 635,
    backgroundColor: COLORS.lightWhite,
    flexDirection: "row",
  },
  tablesLeft: {
    flex: 2
  },
  barArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10
  },
  bar:{
    width: 50,
    height: 250,
    backgroundColor: COLORS.grayT,
    borderRadius: 10
  },
  barChairs:{
    width: 34,
    height: 250,
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5
  },
  barChair:{
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: COLORS.grayT,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold
  },
  bottomTableArea: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  bottomTable: {
    backgroundColor: COLORS.yellowT,
    width: 120,
    height: 60,
    borderRadius: 10,
    marginBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold
  },
  tablesRight: {
    flex: 3,
    justifyContent: 'center',
    paddingTop: 40,
    flexDirection: "row",
    gap: 40
  },
  tablesColumn: {
    gap: 60
  },
  tableSmall: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.grayT,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold
  }

});

export default Home;
