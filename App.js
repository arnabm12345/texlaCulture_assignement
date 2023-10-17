import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import "react-native-gesture-handler";
import OnboardingStack from "./src/ScreenStack/OnboardingStack";
import AuthStack from "./src/ScreenStack/AuthStack"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          options={{ headerShown: false, tabBarStyle: { display: "none" } }}
          name="Onboarding"
          component={OnboardingStack}
        />
      
      <Stack.Screen
          options={{ headerShown: false, tabBarStyle: { display: "none" } }}
          name="AuthStack"
          component={AuthStack}
        />

    </Stack.Navigator>
    <StatusBar
        backgroundColor="rgb(147,51,234)"
       
      />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
