import { Stack, useRouter, useSearchParams } from "expo-router";
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { COLORS } from "../../constants";

const Table = () => {
  const router = useRouter();
  const params = useSearchParams();
  const { tableId } = params.id;

  // Dummy data for checks and items
  const [checks, setChecks] = useState([
    { id: 1, items: [{ id: 1, name: 'pasteta', price: 200, count: 1 },{ id: 7, name: 'jagnje' , price: 1500,count: 1},
    { id: 8, name: 'prase' , price: 1600, count: 1},
    { id: 9, name: 'pile' , price: 400, count: 1}] },
    { id: 2, items: [{ id: 6, name: 'batak' , price: 1000, count: 1},
    { id: 7, name: 'jagnje' , price: 1500, count: 1},
    { id: 8, name: 'prase' , price: 1600, count: 1},
    { id: 9, name: 'pile' , price: 400, count: 1},
    { id: 10, name: 'sopska' , price: 120, count: 1},
    { id: 11, name: 'pivo' , price: 220, count: 1},
    { id: 12, name: 'voda' , price: 45, count: 1},] },
  ]);

  const [filter, setFilter] = useState("");

  const menu = [
    { id: 1, name: 'pasteta' , price: 200},
    { id: 2, name: 'supa' , price: 300},
    { id: 3, name: 'corba' , price: 300},
    { id: 4, name: 'cevapi' , price: 600},
    { id: 5, name: 'pljeskavica' , price: 600},
    { id: 6, name: 'batak' , price: 1000},
    { id: 7, name: 'jagnje' , price: 1500},
    { id: 8, name: 'prase' , price: 1600},
    { id: 9, name: 'pile' , price: 400},
    { id: 10, name: 'sopska' , price: 120},
    { id: 11, name: 'pivo' , price: 220},
    { id: 12, name: 'voda' , price: 45},
  ]
  const filteredMenu = menu.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  const handleAddCheck = () => {
    const newCheck = { id: checks.length + 1, items: [] };
  
    // Update checks with the new check
    setChecks((prevChecks) => [...prevChecks, newCheck]);
  };

  const handleAddItemToCheck = (checkId, itemId) => {
    setChecks((prevChecks) => {
      // Find the index of the check in the array
      const checkIndex = prevChecks.findIndex((check) => check.id === checkId);
  
      // If the check is found, update it with the new item or increase count
      if (checkIndex !== -1) {
        const checkItemIndex = prevChecks[checkIndex].items.findIndex((item) => item.id === itemId);
  
        if (checkItemIndex !== -1) {
          // If the item is already in the check, increase the count
          const updatedCheck = {
            ...prevChecks[checkIndex],
            items: prevChecks[checkIndex].items.map((item) =>
              item.id === itemId ? { ...item, count: item.count + 1 } : item
            ),
          };
  
          // Create a new array with the updated check
          const updatedChecks = [...prevChecks];
          updatedChecks[checkIndex] = updatedCheck;
  
          return updatedChecks;
        } else {
          // If the item is not in the check, add it with count 1
          const updatedCheck = {
            ...prevChecks[checkIndex],
            items: [...prevChecks[checkIndex].items, { id: itemId, name: menu[itemId-1].name, price: menu[itemId-1].price,count: 1 }],
          };
  
          // Create a new array with the updated check
          const updatedChecks = [...prevChecks];
          updatedChecks[checkIndex] = updatedCheck;
  
          return updatedChecks;
        }
      }
  
      // If the check is not found, return the existing array
      return prevChecks;
    });
  };
  

  const handleMoveItem = (checkId, itemId) => {
    setChecks((prevChecks) => {
      // Find the index of the current check in the array
      const currentCheckIndex = prevChecks.findIndex((check) => check.id === checkId);
  
      // If the current check is not the last one
      if (currentCheckIndex < prevChecks.length - 1) {
        // Find the index of the item in the current check
        const itemIndex = prevChecks[currentCheckIndex].items.findIndex((item) => item.id === itemId);
  
        // If the item is found in the current check
        if (itemIndex !== -1) {
          // Get the item to move
          const itemToMove = prevChecks[currentCheckIndex].items[itemIndex];
  
          // Remove the item from the current check
          const updatedCurrentCheck = {
            ...prevChecks[currentCheckIndex],
            items: prevChecks[currentCheckIndex].items.filter((item) => item.id !== itemId),
          };
  
          // Add the item to the next check
          const updatedNextCheck = {
            ...prevChecks[currentCheckIndex + 1],
            items: [...prevChecks[currentCheckIndex + 1].items, itemToMove],
          };
  
          // Create a new array with the updated checks
          const updatedChecks = [...prevChecks];
          updatedChecks[currentCheckIndex] = updatedCurrentCheck;
          updatedChecks[currentCheckIndex + 1] = updatedNextCheck;
  
          return updatedChecks;
        }
      }
  
      // If the current check is the last one or the item is not found, return the existing array
      return prevChecks;
    });
  };
  
  const handleCharge = (checkId) => {
    // Implement navigating to the paying page for the specified check
  };

  return (
    <View style={styles.container}>
      <View style={styles.payement}>
        <View style={styles.checklist}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {checks.map((check) => (
              
              <ScrollView key={`${check.id}-check`} style={styles.check}>
                <Text>Racun broj {check.id}</Text>
                {check.items.map((item) => (
                  <TouchableOpacity
                  key={`${item.id}-check${check.id}`}
                    style={styles.checkItem}
                    onPress={() => handleMoveItem(check.id, item.id)}
                  >
                    <Text style={{color: '#FEFBFF'}}>{item.name} x{item.count}   :    {item.price}RSD</Text>
          
                  </TouchableOpacity>
                ))}
                
              </ScrollView>
            ))}
            <TouchableOpacity
                  style={styles.addCheckBtn}
                  onPress={() => handleAddCheck()}
                >
                  <Text>+</Text>
                </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.charge}>
          <TouchableOpacity onPress={() => handleCharge(checks[checks.length - 1].id)}>
            <Text style={{width: '100%', height: '100%', textAlign: 'center', color: '#FEFBFF', fontSize: 24, fontFamily: 'Metropolis', fontWeight: '900', wordWrap: 'break-word'}}>Charge</Text>
          </TouchableOpacity>
        </View>
      </View>
        <View style={styles.menu}>
        <View style={styles.search}>
        <TextInput
              style={styles.searchInput}
              placeholder="Search"
              value={filter}
              onChangeText={(text) => setFilter(text)}
            />
        </View>
        <ScrollView style={styles.itemList}>
          {/* Replace with actual food items */}
          {filteredMenu.map((item) => (
            <TouchableOpacity
              key={`${item.id}-menu`}
              style={styles.menuItem}
              onPress={() => handleAddItemToCheck(checks[0].id, item.id)}
            >
              <Text>{item.name}: {item.price}RSD</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  payement: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
  },
  checklist: {
    flex: 1,
  },
  check: {
    flexDirection: 'row',
    minWidth:500, minHeight:300, maxHeight: 400, backgroundColor: '#E1E2EC', borderRadius: 38,
    padding: 15,
    margin: 10
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    padding: 10,
    minWidth: 400, margin: 10,
    width: '100%', backgroundColor: '#45464F', borderRadius: 15, color: '#FEFBFF', fontSize: 24, fontFamily: 'Metropolis', fontWeight: '500', wordWrap: 'break-word'
  },
  addCheckBtn: {
    backgroundColor: '#DAE1FF',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    minHeight: 100
  },
  charge: {
    padding: 10,
    borderRadius: 5,
    maxWidth: 500,
    backgroundColor: '#2C58BD', borderRadius: 18,
    color: 'white'
  },
  menu: {
    flex: 1,
    padding: 10,
  },
  search: {
    marginBottom: 10,
  },
  searchInput:{
    maxWidth: 300, padding:16,  backgroundColor: '#E1E2EC', borderRadius: 100, border: '2px #757680 solid'
  },
  itemList: {
    flex: 1,
  },
  menuItem: 
    {backgroundColor: '#FFD6F9', borderRadius: 15, padding: 20, maxWidth: 200, margin: 20,
      textAlign: 'center', color: '#2B122B', fontSize: 24, fontFamily: 'Metropolis', fontWeight: '500', wordWrap: 'break-word'}
  ,
});

export default Table;
