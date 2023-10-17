import React from 'react';
import { View, Text, StyleSheet,Image, Button, TouchableOpacity } from 'react-native';

const LandingScreen2 = ({ navigation }) => {
  return (
    <View style={styles.container} className="items-center   justify-around"> 
    <View className="items-center  py justify-between">
     <Image
     source={require('../../../assets/task-management.png')}
     className="w-64 h-64 mt-8"
     />

    <View className="  w-full  px-8 ">
      
            <Text style={styles.title} className="mt-20 items-center mx-auto ">Empower Your Workforce</Text>
          <View>
            <View className="mx-auto mt-3 text-sm">
                <Text className="text-base font-normal">With TexlaCulture's Employee Management</Text>
                 <Text className="mx-auto text-base">System, unleash the true potential.</Text>
            </View>
        </View>
     </View>
     </View>  
    <View  className="mx-10 w-4/5 px-10 mb-5">
     <TouchableOpacity
          onPress={() => navigation.navigate("AuthStack", { screen: "SignupScreen" })}
          className="bg-purple-800 items-center py-3 rounded-lg"
        >
          <Text className="text-white text-lg font-semibold">Get Started</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(240, 227, 247, 1)',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 26,
    fontWeight: 700,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
  },
});

export default LandingScreen2;
