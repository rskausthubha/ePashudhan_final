import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OpeningPage from "./src/pages/OpeningPage";
import LoginPage from "./src/pages/LoginPage";
import RegisterPage from "./src/pages/RegisterPage";
import FarmerHome from "./src/pages/home/FarmerHome";
import AdminHome from "./src/pages/home/AdminHome";
import CustomerHome from "./src/pages/home/CustomerHome";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" />
            <Stack.Navigator initialRouteName="opening">
                <Stack.Screen
                    name="opening"
                    component={OpeningPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="login"
                    component={LoginPage}
                    options={{
                        title: "Login",
                        headerStyle: {
                            backgroundColor: "black"
                        },
                        headerTintColor: '#fff'
                    }}
                />
                <Stack.Screen
                    name="register"
                    component={RegisterPage}
                    options={{
                        title: "Register",
                        headerStyle: {
                            backgroundColor: "black",
                            height: 20
                        },
                        headerTintColor: '#fff'
                        // headerShown: false
                    }}
                />
                <Stack.Screen
                    name="farmerHome"
                    component={FarmerHome}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="adminHome"
                    component={AdminHome}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="customerHome"
                    component={CustomerHome}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;