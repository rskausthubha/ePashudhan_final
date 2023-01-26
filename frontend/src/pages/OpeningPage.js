import React from "react";
import { StyleSheet, Button, View, Text, Image, ImageBackground, Pressable } from "react-native";
import { useFonts } from 'expo-font';

import backgroundImage from "../images/bg_gradient.jpg";
import CustomTextButton from "../components/CustomTextButton";

const OpeningPage = ({ navigation }) => {
    const [loaded] = useFonts({
        "DancingScript-Bold": require("../../assets/fonts/DancingScript-Bold.ttf"),
        "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf")
    });
    if (!loaded) {
        return null;
    }

    return (
        <ImageBackground source={backgroundImage} style={styles.bgImage}>
            <View style={styles.imgTitleContainer}>
                <Image
                    source={require("../images/logo-removebg.png")}
                    style={styles.logo}
                />
                <Text style={styles.epText}>ePashudhan</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <CustomTextButton
                    buttonText={"Login"}
                    buttonColor={"#54B435"}
                    buttonHeight={63}
                    buttonTextColor={"#00425A"}
                    buttonBorderRadius={35}
                    onPress={() => navigation.navigate("login")}
                />
                <CustomTextButton
                    buttonText={"Register"}
                    buttonColor={"#54B435"}
                    buttonHeight={63}
                    buttonTextColor={"#00425A"}
                    buttonBorderRadius={35}
                    onPress={() => navigation.navigate("register")}
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imgTitleContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        bottom: 145
    },
    logo: {
        width: 360,
        height: 288
    },
    epText: {
        fontSize: 65,
        fontFamily: "DancingScript-Bold",
        color: "#00425A",
        width: "100%",
        textAlign: "center",
        bottom: 60
    },
    buttonsContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        width: "64%",
        height: "18%",
        bottom: 35
    }
});

export default OpeningPage;