import { SafeAreaView, 
         ScrollView, 
         View, 
         StyleSheet, 
         Text, 
         Image, 
         TouchableOpacity,
         FlatList
        } from "react-native";
import { Stack, router, useRouter } from "expo-router";

import { COLORS, icons, SIZES, FONT } from "../../constants";

const TotalOrder = () => {

    const sumTotal = () => {
        var total = 0
        for (let i = 0; i < data.length; i++) {
            total += data[i].price * data[i].times
        }
        return total
    };

    const data = [
        {
            item_id: 1,
            name: "Grilled Chicken Salad",
            times: 1,
            price: 16.55
        },
        {
            item_id: 2,
            name: "Margherita Pizza",
            times: 2,
            price: 13.75
        },
        {
            item_id: 3,
            name: "Spaghetti Bolognese",
            times: 1,
            price: 12.5
        }
    ]

    var total = sumTotal()

    const handleOrderPayment = (item) => {
        const router = useRouter();
        router.push(`/payment/${item}`);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <Stack.Screen
                options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <TouchableOpacity 
                        style={styles.floors}
                        onPress={() => router.back()}>
                        <Image source={icons.arrow_back} style={styles.arrowBack}></Image>
                        <Text style={styles.floorText}> TABLE NO 8</Text>
                    </TouchableOpacity>
                ),
                headerTitle: "",
                }}
            />
            <View style={styles.container}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    style={styles.paymentArea}
                >
                    <View style={styles.paymentContent}>
                        <Text style={styles.totalText}>
                            TOTAL 
                            <Text style={styles.totalPrice}>  {total}$</Text>
                        </Text>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => (
                                <View style={styles.item}>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                    <Text style={styles.itemTimes}>x{item.times}</Text>
                                    <Text style={styles.itemPrice}>${item.price}</Text>
                                </View>
                            )}
                            keyExtractor={(item) => item.item_id}
                            contentContainerStyle={{ columnGap: SIZES.medium }}
                        />
                    </View>
                </ScrollView>
                <View style={styles.buttonsArea}>
                    <Text>1/1</Text>
                    <View style={styles.paymentType}>
                        <TouchableOpacity style={styles.button}>CASH</TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={() => handleOrderPayment(total)}
                        >CARD</TouchableOpacity>
                    </View>
                    <TouchableOpacity style={[styles.button, {width: 360, backgroundColor: COLORS.darkPurple}]}>SPLIT BILL</TouchableOpacity>
                    <TouchableOpacity style={[styles.button, {width: 360, backgroundColor: COLORS.darkGrey}]}>PRINT PRE-RECIEPT</TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

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
    arrowBack: {
      height: 30,
      width: 30
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    paymentArea: {
        flex: 2,
        backgroundColor: COLORS.grayBlue,
        width: 400,
        borderRadius: 20
    },
    paymentContent:{
        width: 340,
        marginTop: 30,
        marginLeft: 30
    },
    totalText: {
        color: COLORS.blue,
        fontFamily: FONT.blackM,
        fontSize: SIZES.large
    },
    totalPrice: {
        fontFamily: FONT.blackB
    },
    item: {
        marginTop: 10,
        marginBottom: 10,
        gap: 5
    },
    itemName: {
        fontFamily: FONT.blackM,
    },
    itemTimes: {
        fontFamily: FONT.blackM,
    },
    itemPrice: {
        fontFamily: FONT.blackB
    },
    buttonsArea: {
        height: 190,
        width: 400,
        alignItems: 'center',
        gap: 10,
        marginTop: 10
    },
    button: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.blue,
        borderRadius: 10,
        width: 175,
        fontFamily: FONT.blackB,
        fontSize: SIZES.medium,
        color: COLORS.lightWhite
    },
    paymentType: {
        gap: 10,
        flexDirection: 'row'
    }
  
  });

export default TotalOrder