import { View, Text } from "react-native";
import React from "react";
import LandingScreen from "../Screens/LandingScreen/LandingScreen";
import LandingScreen2 from "../Screens/LandingScreen/LandingScreen2";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const OnboardingStack = () => {
    return (
      <Stack.Navigator>
       <Stack.Screen
        options={{ headerShown: false }}
        name="Landing Page 1"
        component={LandingScreen}
      />
       <Stack.Screen
        options={{ headerShown: false }}
        name="Landing Page 2"
        component={LandingScreen2}
      />
   {  /* <Stack.Screen
        options={{ headerShown: false }}
        name="Onboarding1"
        component={Onboarding1}
      />
*/
    }
      </Stack.Navigator>
       );
     };
 export default OnboardingStack;