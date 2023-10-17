import { View, Text } from "react-native";
import React from "react";
import SignupScreen from "../Screens/AuthScreen/SignupScreen";
import VerifyOtpScreen from "../Screens/AuthScreen/VerifyOtpScreen";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
    <Stack.Screen
        options={{ headerShown: false }}
        name="SignupScreen"
        component={SignupScreen}
      />
     <Stack.Screen
        options={{ headerShown: false }}
        name="VerifyOtpScreen"
        component={VerifyOtpScreen}
      />
    </Stack.Navigator>
     );
    };
    
    export default AuthStack;