import React from 'react';
import { View, Text, StyleSheet,Image, Button, TouchableOpacity } from 'react-native';

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container} className="items-center  py justify-around "> 

    <View className="items-center  py justify-between">
     <Image
     source={require('../../../assets/pic.png')}
     className="w-72 h-72 mt-8"
     />

    <View className="  w-full px-10 mx-10 ">
      
            <Text style={styles.title} className="mt-20  items-center mx-auto ">Simplify HR Tasks</Text>
          <View>
            <View className="mx-auto mt-3 text-sm">
                <Text className="text-base font-normal">TexlaCulture's People Care System is</Text>
                 <Text className="mx-auto text-base">designed to Manage your HR tasks.</Text>
            </View>
        </View>
     </View>
     </View>  
    <View  className="mx-10 w-4/5 px-10 mb-5">
     <TouchableOpacity
          onPress={() => navigation.navigate("Landing Page 2")}
          className="bg-purple-800 items-center py-3 rounded-lg"
        >
          <Text className="text-white text-lg font-semibold">Next</Text>
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
    fontSize: 28,
    fontWeight: 700,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
  },
});

export default LandingScreen;
