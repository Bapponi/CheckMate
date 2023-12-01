import { useState } from "react";
import { SafeAreaView, 
         ScrollView, 
         View, 
         StyleSheet, 
         Text, 
         Image, 
         TouchableOpacity,
         FlatList
        } from "react-native";
import { Stack, router, useRouter, useSearchParams } from "expo-router";
import useFetch from "../../hook/useFetch";
import { COLORS, icons, SIZES, FONT } from "../../constants";

const Payment = () => {

    // const params = useSearchParams();

    // const { data, isLoading, error, refetch } = useFetch("totalOrders", {
    //     total: params.id,
    // });

    const total = 5125
    const value10 = total * 0.1
    const value15 = total * 0.15
    const value20 = total * 0.2

    const handleTotalvalue = (item) => {
        const router = useRouter();
        const value = total + item;
        router.push(`/finish/${value}`);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <Stack.Screen
                options={{
                headerStyle: { backgroundColor: COLORS.lightPurple },
                headerShadowVisible: false,
                headerLeft: () => (
                    <Text></Text>
                ),
                headerTitle: "",
                }}
            />
            <View style={styles.paymentContainer}>
                <View style={styles.paymentMain}>
                    <Text style={styles.caption}>YOUR TOTAL</Text>
                    <Text style={styles.price}>5125 RSD</Text>
                </View>
                <Text style={styles.question}>Would you also like to tip now?</Text>
                <TouchableOpacity style={styles.proceed}>No, proceed to payment</TouchableOpacity>
                <View style={styles.buttonArea}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => handleTotalvalue(value10)}    
                    >
                        <Text style={styles.line1}>Yes, add</Text>
                        <Text style={styles.line2}>10% tip</Text>
                        <Text style={styles.line1}>{value10} RSD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => handleTotalvalue(value15)}    
                    >
                        <Text style={styles.line1}>Yes, add</Text>
                        <Text style={styles.line2}>15% tip</Text>
                        <Text style={styles.line1}>{value15} RSD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => handleTotalvalue(value20)}    
                    >
                        <Text style={styles.line1}>Yes, add</Text>
                        <Text style={styles.line2}>20% tip</Text>
                        <Text style={styles.line1}>{value20} RSD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => handleTotalvalue(value10)}    
                    >
                        <Text style={styles.line1}>Yes, add</Text>
                        <Text style={styles.line2}>different</Text>
                        <Text style={styles.line2}>amount</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    paymentContainer: {
        flex: 1,
        backgroundColor: COLORS.lightPurple,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        paddingTop: 30,
        paddingBottom: 50
    },
    paymentArea:{
        flex: 1
    },
    paymentMain: {
        alignItems: 'center'
    },
    caption: {
        fontFamily: FONT.blackM,
        fontSize: SIZES.xxLarge,
        color: COLORS.darkBlue
    },
    price: {
        fontFamily: FONT.blackB,
        fontSize: SIZES.xxLarge,
        color: COLORS.darkBlue
    },
    question: {
        fontFamily: FONT.blackM,
        fontSize: SIZES.large,
        color: COLORS.darkBlue
    },
    proceed: {
        width: 400,
        height: 50,
        fontFamily: FONT.blackM,
        fontSize: SIZES.large,
        backgroundColor: COLORS.darkBlue,
        color: COLORS.lightWhite,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonArea:{
        gap: 20,
        width: 330,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    button:{
        width: 155,
        height: 155,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 10,
        borderColor: COLORS.darkBlue,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    line1:{
        fontFamily: FONT.blackM,
        fontSize: SIZES.large,
        color: COLORS.darkBlue
    },
    line2:{
        fontFamily: FONT.blackB,
        fontSize: SIZES.large,
        color: COLORS.darkBlue
    }
});

export default Payment