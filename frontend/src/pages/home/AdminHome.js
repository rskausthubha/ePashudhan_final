import React from "react";
import { View, Text, ImageBackground } from "react-native";

import backgroundImage from "../../images/bg_gradient.jpg"

const AdminHome = ({ navigation, route }) => {
    const { userDetails } = route.params;

    return (
        <ImageBackground source={backgroundImage} style={{flex: 1}}>
            
        </ImageBackground>
    );
};

export default AdminHome;