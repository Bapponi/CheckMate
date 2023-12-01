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
import { COLORS, SIZES, FONT, images } from "../../constants";

const finish = () => {

    const router = useRouter();
    const total = 5125 * 1.2

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
                    <Text style={styles.price}>{total} RSD</Text>
                </View>
                <Image source={images.hand} style={styles.hand}/>
                <View style={styles.payText}>
                    <Text style={styles.textLine}>Please</Text>
                    <Text style={styles.textLine}>TAP / SWIPE / INSERT</Text>
                    <Text style={styles.textLine}>card to pay</Text>
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
        gap: 10,
        paddingTop: 30,
        paddingBottom: 60
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
    hand: {
        width: 400,
        height: 400,
        resizeMode: 'contain'
    },
    payText:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLine:{
        fontFamily: FONT.blackM,
        fontSize: SIZES.large
    }
});

export default finish