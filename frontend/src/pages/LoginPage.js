import React, { useState } from "react";
import { ImageBackground, Text, View, StyleSheet, TextInput, ToastAndroid, Pressable } from "react-native";
import axios from "axios";

import backgroundImage from "../images/bg_gradient.jpg";
import CustomTextButton from "../components/CustomTextButton";

const loginUrl = "http://xyz:3000/login";

const LoginPage = ({ navigation }) => {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const onChangeUsernameHandler = (loginUsername) => {
        setLoginUsername(loginUsername);
    };
    const onChangePasswordHandler = (loginPassword) => {
        setLoginPassword(loginPassword);
    };

    const onSubmitFormHandler = async (event) => {
        try {
            const response = await axios.post(loginUrl, {
                loginUsername,
                loginPassword
            });
            if (response.data.success) {
                ToastAndroid.show("Successfully logged in", ToastAndroid.SHORT);

                if (response.data.userDetails.role === "admin") {
                    navigation.navigate("adminHome", { userDetails: response.data.userDetails });
                } else if (response.data.userDetails.role === "farmer") {
                    navigation.navigate("farmerHome", { userDetails: response.data.userDetails });
                } else if (response.data.userDetails.role === "customer") {
                    navigation.navigate("customerHome", { userDetails: response.data.userDetails });
                }

                setLoginUsername("");
                setLoginPassword("");
            } else {
                alert(JSON.stringify(response.data));
            }
        } catch (error) {
            alert(`Error >> ${error}`);
        }
    };

    return (
        <ImageBackground source={backgroundImage} style={{ flex: 1, justifyContent: "center" }}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Welcome!</Text>
                <Text style={styles.text}>Login to continue</Text>
            </View>
            <View style={styles.txtInputContaineir}>
                <TextInput
                    style={styles.txtInput}
                    placeholder="Username"
                    value={loginUsername}
                    onChangeText={onChangeUsernameHandler}
                />
                <TextInput
                    style={styles.txtInput}
                    placeholder="Password"
                    value={loginPassword}
                    onChangeText={onChangePasswordHandler}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <CustomTextButton
                    buttonText={"Login"}
                    buttonColor={"#54B435"}
                    buttonHeight={63}
                    buttonTextColor={"#00425A"}
                    buttonBorderRadius={35}
                    onPress={onSubmitFormHandler}
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    textContainer: {
        height: 150,
        justifyContent: "center",
        bottom: 130
    },
    text: {
        fontSize: 38,
        fontFamily: "Poppins-SemiBold",
        width: "100%",
        textAlign: "center",
    },
    txtInput: {
        height: 58,
        borderRadius: 10,
        borderWidth: 2,
        margin: 5,
        padding: 10,
    },
    buttonContainer: {
        marginTop: 10,
        marginBottom: 100,
        width: "64%",
        alignSelf: "center"
    },
    txtInputContaineir: {
        bottom: 20
    }
});

export default LoginPage;