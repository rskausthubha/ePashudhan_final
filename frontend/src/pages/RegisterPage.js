import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, Image, ImageBackground, Pressable, ToastAndroid } from "react-native";
import { RadioButton } from "react-native-paper";
import axios, { formToJSON } from "axios";

import backgroundImage from "../images/bg_gradient.jpg";
import CustomTextButton from "../components/CustomTextButton";

const registerUrl = "http://xyz:3000/register";

const RegisterPage = ({ navigation }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [houseNoAndStreet, setHNS] = useState("");
    const [area, setArea] = useState("");
    const [district, setDistrict] = useState("");
    const [stateName, setStateName] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [address, setAddress] = useState({
        houseNoAndStreet: "",
        area: "",
        distrit: "",
        stateName: "",
        postalCode: null
    });
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState(null);
    const [createdUsername, setCreatedUsername] = useState("");
    const [createdPassword, setCreatedPassword] = useState("");

    const [role, setRole] = useState("farmer");

    const onChangeFirstNameHandler = (firstName) => {
        setFirstName(firstName);
    };
    const onChangeLastNameHandler = (lastName) => {
        setLastName(lastName);
    };
    const onChangeHNSHandler = (houseNoAndStreet) => {
        setHNS(houseNoAndStreet);
        setAddress(prevState => {
            return { ...prevState, houseNoAndStreet: houseNoAndStreet }
        });
    };
    const onChangeAreaHandler = (area) => {
        setArea(area);
        setAddress(prevState => {
            return { ...prevState, area: area }
        });
    };
    const onChangeDistrictHandler = (district) => {
        setDistrict(district);
        setAddress(prevState => {
            return { ...prevState, district: district }
        });
    };
    const onChangeStateNameHandler = (stateName) => {
        setStateName(stateName);
        setAddress(prevState => {
            return { ...prevState, stateName: stateName }
        });
    };
    const onChangePostalCodeHandler = (postalCode) => {
        setPostalCode(postalCode);
        setAddress(prevState => {
            return { ...prevState, postalCode: postalCode }
        });
    };
    const onChangeEmailHandler = (email) => {
        setEmail(email);
    };
    const onChangePhoneNoHandler = (phoneNo) => {
        setPhoneNo(phoneNo);
    };
    const onChangeUsernameHandler = (createdUsername) => {
        setCreatedUsername(createdUsername);
    };
    const onChangePasswordHandler = (createdPassword) => {
        setCreatedPassword(createdPassword);
    };

    const onSubmitFormHandler = async (event) => {
        // if (!name.trim() || !email.trim() || !houseNo.trim() || !district.trim() || !stateAddress.trim() || !postalCode.trim() || !phoneNo.trim() || !createdUsername.trim() || !createdPassword.trim()) {
        //     alert("Invalid Credentials");
        //     return;
        // }
        try {
            const response = await axios.post(registerUrl, {
                firstName,
                lastName,
                address,
                email,
                phoneNo,
                role,
                createdUsername,
                createdPassword,
            });
            if (response.data.success) {
                ToastAndroid.show("Successfully registered", ToastAndroid.SHORT);
                // console.log(` You have created: ${JSON.stringify(response.data)}`);
                setFirstName("");
                setLastName("");
                setHNS("");
                setArea("");
                setDistrict("");
                setStateName("");
                setPostalCode("");
                setEmail("");
                setPhoneNo("");
                setRole("farmer");
                setCreatedUsername("");
                setCreatedPassword("");
                navigation.navigate("login");
            } else {
                alert(JSON.stringify(response.data));
            }
        } catch (error) {
            alert(`${error}`);
        }
    };

    return (
        <ImageBackground source={backgroundImage} style={styles.bgImage}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Enter Your Details</Text>
            </View>
            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ justifyContent: "center" }}>
                <View style={styles.formContainer}>
                    <View>
                        <Text style={styles.sectionText}>Name:</Text>
                        <TextInput
                            style={styles.txtInput}
                            placeholder="First Name"
                            value={firstName}
                            onChangeText={onChangeFirstNameHandler}
                        />
                        <TextInput
                            style={styles.txtInput}
                            placeholder="Last Name"
                            value={lastName}
                            onChangeText={onChangeLastNameHandler}
                        />
                    </View>
                    <View>
                        <Text style={styles.sectionText}>Address:</Text>
                        <TextInput
                            style={styles.txtInput}
                            placeholder="House No. and Street"
                            value={houseNoAndStreet}
                            onChangeText={onChangeHNSHandler}
                        />
                        <TextInput
                            style={styles.txtInput}
                            placeholder="Area"
                            value={area}
                            onChangeText={onChangeAreaHandler}
                        />
                        <TextInput
                            style={styles.txtInput}
                            placeholder="District"
                            value={district}
                            onChangeText={onChangeDistrictHandler}
                        />
                        <TextInput
                            style={styles.txtInput}
                            placeholder="State"
                            value={stateName}
                            onChangeText={onChangeStateNameHandler}
                        />
                        <TextInput
                            style={styles.txtInput}
                            placeholder="Postal Code"
                            value={postalCode}
                            onChangeText={onChangePostalCodeHandler}
                            keyboardType="numeric"
                        />
                    </View>
                    <View>
                        <Text style={styles.sectionText}>Other Details:</Text>
                        <TextInput
                            style={styles.txtInput}
                            placeholder="Email ID"
                            value={email}
                            onChangeText={onChangeEmailHandler}
                        />
                        <TextInput
                            style={styles.txtInput}
                            placeholder="Phone Number"
                            value={phoneNo}
                            onChangeText={onChangePhoneNoHandler}
                            keyboardType="numeric"
                        />
                    </View>
                    <View>
                        <Text style={styles.sectionText}>Choose Your Role:</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                            <Pressable style={styles.radioContainer} onPress={() => setRole('farmer')}>
                                <View style={styles.radioTag}>
                                    <RadioButton
                                        value="farmer"
                                        status={role === 'farmer' ? 'checked' : 'unchecked'}
                                        onPress={() => setRole('farmer')}
                                    />
                                </View>
                                <View style={styles.radioTextContainer}>
                                    <Text style={{fontFamily: "Poppins-SemiBold"}}>Farmer</Text>
                                </View>
                            </Pressable>
                            <Pressable style={styles.radioContainer} onPress={() => setRole('admin')}>
                                <View style={styles.radioTag}>
                                    <RadioButton
                                        value="admin"
                                        status={role === 'admin' ? 'checked' : 'unchecked'}
                                        onPress={() => setRole('admin')}
                                    />
                                </View>
                                <View style={styles.radioTextContainer}>
                                    <Text style={{fontFamily: "Poppins-SemiBold"}}>Admin</Text>
                                </View>
                            </Pressable>
                            <Pressable style={styles.radioContainer} onPress={() => setRole('customer')}>
                                <View style={styles.radioTag}>
                                    <RadioButton
                                        value="customer"
                                        status={role === 'customer' ? 'checked' : 'unchecked'}
                                        onPress={() => setRole('customer')}
                                    />
                                </View>
                                <View style={styles.radioTextContainer}>
                                    <Text style={{fontFamily: "Poppins-SemiBold"}}>Customer</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.sectionText}>Create Account:</Text>
                        <TextInput
                            style={styles.txtInput}
                            placeholder="Create a username"
                            value={createdUsername}
                            onChangeText={onChangeUsernameHandler}
                        />
                        <TextInput
                            style={styles.txtInput}
                            placeholder="Create a password"
                            value={createdPassword}
                            onChangeText={onChangePasswordHandler}
                            secureTextEntry
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <CustomTextButton
                        buttonText={"Register"}
                        buttonColor={"#54B435"}
                    buttonHeight={63}
                    buttonTextColor={"#00425A"}
                    buttonBorderRadius={35}
                        onPress={onSubmitFormHandler}
                    />
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer: {
        height: 100,
        justifyContent: "flex-end"
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
    formContainer: {
        marginVertical: 20
    },
    sectionText: {
        margin: 7,
        fontFamily: "Poppins-SemiBold"
    },
    buttonContainer: {
        marginTop: 10,
        marginBottom: 100,
        width: "60%",
        alignSelf: "center"
    },
    radioContainer: {
        flexDirection: "row",
        width: "30%",
        margin: 4
    },
    radioTag: {
        width: 38
    },
    radioTextContainer: {
        justifyContent: "center"
    }
});

export default RegisterPage;