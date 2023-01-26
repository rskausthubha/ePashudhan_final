import React from "react";
import { View, Text, ImageBackground } from "react-native";

import backgroundImage from "../../images/bg_gradient.jpg"

const FarmerHome = ({ navigation }) => {
    return (
        <ImageBackground source={backgroundImage}>
            <Text style={{ fontSize: 100, textAlign: "center", borderWidth: 10 }}>Farmer Home Page</Text>
        </ImageBackground>
    );
};

export default FarmerHome;