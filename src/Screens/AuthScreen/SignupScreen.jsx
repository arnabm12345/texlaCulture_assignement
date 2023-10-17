import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    ActivityIndicator,
    Alert,
    Button,
    StyleSheet,
    Image
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { AntDesign } from '@expo/vector-icons';
  const SignupScreen = ({ navigation }) => {
    const [mobile, setMobile] = useState(''); // Initialize mobile state
    const [isMobileValid, setIsMobileValid] = useState(false);
  
    const handleMobileChange = (text) => {
      setMobile(text);
    };
  
    useEffect(() => {
      if (mobile.length === 10) {
        setIsMobileValid(true);
      } else {
        setIsMobileValid(false);
      }
    }, [mobile]);

 return(
    <View style={styles.container} className="py-10 justify-stretch">

     <View className="flex flex-row items-center px-8"> 
     <TouchableOpacity onPress={()=>navigation.goBack()}>
      <AntDesign name="left" size={20} color="black" />
      </TouchableOpacity>
      </View>

     <View className="flex flex-row items-center px-7 mt-6">
        <Image
        source={require('../../../assets/logo_comp.png')}
         className="w-11 h-11"
        />
        <Text className="text-xl font-extrabold ml-1 text-purple-800">TexlaCulture</Text>
     </View>   
    

    <View className="flex flex-column  px-7 mt-6">
    <Text className="text-2xl font-semibold">Mobile Number</Text>
    <Text className="mt-2 font-normal">We'll send you a one-time verification code.</Text>
    </View>


    <View className="flex flex-row items-center justify-between px-7 mt-6">
     <View className=" h-14 rounded-2xl border border-gray-300 flex flex-row items-center justify-around" style={{width:72}}>
       <Image
       source={require('../../../assets/india.png')}
       />
       <Text className="text-sm font-bold">+91</Text>
     </View>
     
     <TextInput className="w-9/12 h-14 rounded-3xl border border-gray-300 ml-2"
      placeholder="Enter Your Mobile Here"
      keyboardType="numeric"
      maxLength={10}
      style={{padding: 10,}}
      value={mobile}
      onChangeText={handleMobileChange}
     >  
     </TextInput>
    </View>
     

     <View className="flex flex-row items-center px-7 mt-3">
        <Text className="text-xs font-light">By Continuing, I agree to the</Text>
        <Text className="text-xs font-bold text-purple-700"> Terms of Use & Privacy Policy</Text>
     </View>
    
     <View  className="px-7 mt-6">
     <TouchableOpacity
          onPress={() => navigation.navigate("VerifyOtpScreen")}
          className={"items-center py-3 rounded-lg "+(isMobileValid?"bg-purple-800" : "bg-gray-400")}
          disabled={!isMobileValid}
        >
          <Text className="text-white text-lg font-semibold">Get OTP</Text>
        </TouchableOpacity>
    </View>

    <View className="flex flex-row items-center px-7 mt-4">
        <Text className="text-xs font-light">Having Trouble Logging in?</Text>
        <Text className="text-xs font-bold text-purple-700"> Get Help</Text>
     </View>

    </View>
 );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      backgroundColor:'white'
    },
  });
  
  export default SignupScreen;