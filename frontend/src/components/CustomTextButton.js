import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useFonts } from 'expo-font';

export default CustomTextButton = (props) => {
    const [loaded] = useFonts({
        "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf")
    });

    if (!loaded) {
        return null;
    }

    return (
        <Pressable style={({ pressed }) => [
            {
                opacity: pressed ? 0.86 : 1
            },
            {
                backgroundColor: props.buttonColor,
                width: "100%",
                height: props.buttonHeight,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: props.buttonBorderRadius
            }
        ]} onPress={props.onPress}>
            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 23, color: props.buttonTextColor }}>
                {props.buttonText}
            </Text>
        </Pressable>
    )
};