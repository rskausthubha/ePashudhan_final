import React from "react";
import { View, Text, ImageBackground } from "react-native";

import backgroundImage from "../../images/bg_gradient.jpg"

const CustomerHome = ({ navigation }) => {
    return (
        <ImageBackground source={backgroundImage}>
            <Text style={{ fontSize: 100, textAlign: "center", borderWidth: 10 }}>Customer Home Page</Text>
        </ImageBackground>
    );
};

export default CustomerHome;