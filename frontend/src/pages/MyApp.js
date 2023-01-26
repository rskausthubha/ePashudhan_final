import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, ImageBackground, Pressable, Image } from "react-native";
import backgroundImage from "./src/images/grassland3.jpg";
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CustomTextButton from "./src/components/CustomTextButton";

const MyApp = () => {
  const { container, ePashudhanText, bgImage, loginPressable, loginText, buttonsContainer, logo, browsePressable } = styles;

  const [loaded] = useFonts({
    "DancingScript-Bold": require("./assets/fonts/DancingScript-Bold.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf")
  });
  if (!loaded) {
    return null;
  }

  return (
    <ImageBackground source={backgroundImage} style={bgImage, container} blurRadius={0}>
      <StatusBar barStyle="light-content" />

      <Image source={require("./src/images/logo-removebg.png")} style={logo} />
      <Text style={ePashudhanText}>ePashudhan</Text>

      <View style={buttonsContainer}>
        {/* Login */}
        <CustomTextButton buttonText="Login" buttonColor="#38E54D" />
        {/* Signup */}
        <CustomTextButton buttonText="Signup" buttonColor="#38E54D" />
      </View>
      {/* Just want to browse */}
      <Pressable style={({ pressed }) => [
        {
          opacity: pressed ? 0.85 : 1
        }
      ]}>
        <Text style={browsePressable}>I just want to browse</Text>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: "100%"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 250,
    height: 200,
    borderRadius: 100,
    bottom: 90
  },
  ePashudhanText: {
    fontFamily: "DancingScript-Bold",
    fontSize: 60,
    bottom: 140,
    width: "100%",
    textAlign: "center"
  },
  buttonsContainer:
  {
    width: "60%",
    height: 140,
    justifyContent: "space-between",
    alignItems: "center",
    top: 20
  },
  browsePressable: {
    fontFamily: "Poppins-SemiBold",
    backgroundColor: "#FF7000",
    padding: 5,
    paddingHorizontal: 10,
    color: "white",
    borderRadius: 10,
    top: 40
  }
});

export default MyApp;