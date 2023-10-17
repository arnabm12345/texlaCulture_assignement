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
  import React, { useState, useEffect,useRef  } from "react";
  import { AntDesign } from '@expo/vector-icons';
  const SignupScreen = ({ navigation }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const handleOtpChange = (text, index) => {
        if (text.match(/^[0-9]$/)) {
          const newOtp = [...otp];
          newOtp[index] = text;
          setOtp(newOtp);
          if (index < 3 && text.length === 1) {
            const nextInput = inputRefs[index + 1];
            nextInput.current.focus();
          }
        }
      };
      const handleDelete = (index) => {
        if (index >= 0) {
          const newOtp = [...otp];
          newOtp[index] = ''; // Clear the previous box
          setOtp(newOtp);
          if(index>0){
          const prevInput = inputRefs[index - 1];
          prevInput.current.focus();
          }
        }
      };

      const [remainingTime, setRemainingTime] = useState(60);
      const [showResend, setShowResend] = useState(false);
    
      useEffect(() => {
        let timer;
    
        if (remainingTime > 0) {
          timer = setInterval(() => {
            setRemainingTime(remainingTime - 1);
          }, 1000);
        } else {
          setShowResend(true);
        }
    
        return () => {
          clearInterval(timer);
        };
      }, [remainingTime]);
    
      const handleResendClick = () => {
        setRemainingTime(60);
        setShowResend(false);
      };


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
    <Text className="text-2xl font-semibold">Verify your Mobile Number</Text>
    <Text className="mt-2 font-normal text-xs">Please enter code sent to your mobile number ending</Text>
    <Text className="mt-2 font-normal text-xs">with ******3848</Text>
    </View>

    <View className="flex flex-row justify-start items-center px-7 mt-7 ">
    
        <TextInput
        
          style={{  width: 46,
            height: 40,
            borderWidth: 1,
            borderRadius: 5,
            margin: 5,
            textAlign: 'center',
            }}
            className="rounded-xl font-bold	border-gray-400	"
          value={otp[0]}
          onChangeText={(text) => handleOtpChange(text, 0)}
          maxLength={1}
          keyboardType="numeric"
          ref={inputRefs[0]}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              handleDelete(0);
            }
          }}
        />
       
       <TextInput
         
          style={{  width: 46,
            height: 40,
            borderWidth: 1,
            borderRadius: 5,
            margin: 5,
            textAlign: 'center',
            }}
            className="rounded-xl font-bold border-gray-400		"
          value={otp[1]}
          onChangeText={(text) => handleOtpChange(text, 1)}
          maxLength={1}
          keyboardType="numeric"
          ref={inputRefs[1]}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              handleDelete(1);
            }
          }}
        />

       <TextInput
          
          style={{  width: 46,
            height: 40,
            borderWidth: 1,
            borderRadius: 5,
            margin: 5,
            textAlign: 'center',
            }}
            className="rounded-xl font-bold	border-gray-400	"
          value={otp[2]}
          onChangeText={(text) => handleOtpChange(text, 2)}
          maxLength={1}
          keyboardType="numeric"
          ref={inputRefs[2]}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              handleDelete(2);
            }
          }}
        />
       
       <TextInput
          
          style={{  width: 46,
            height: 40,
            borderWidth: 1,
            borderRadius: 5,
            margin: 5,
            textAlign: 'center',
            }}
            className="rounded-xl font-bold	border-gray-400	"
          value={otp[3]}
          onChangeText={(text) => handleOtpChange(text, 3)}
          maxLength={1}
          keyboardType="numeric"
          ref={inputRefs[3]}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              handleDelete(3);
            }
          }}
        />
   
    </View>



    <View className="flex flex-row items-center px-7 mt-4">
        <Text className="text-xs font-light">Didn't receive the code? </Text>
       
        {showResend ? (
        <Text
          className="text-xs font-bold text-purple-700"
          onPress={handleResendClick}
        >
          Resend OTP
        </Text>
      ) : (
        <Text className="text-xs font-bold text-purple-700">
         Resend OTP {Math.floor(remainingTime / 60)}:
          {remainingTime % 60 < 10 ? '0' : ''}
          {remainingTime % 60} sec
        </Text>
      )}
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