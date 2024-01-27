import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import PrimaryEditText from '../Components/PrimaryEditText';
import PrimaryButton from '../Components/PrimaryButton';
import { getEndpoint } from './../Services/Endpoints'
import { getStringValue } from '../JBridge/SharedPreferencesModule';
import { localConfig } from '../../localConfig';

type AuthenticationProps = NativeStackScreenProps<RootStackParamList, 'AuthenticationScreen'>;

const AuthenticationScreen = ({ navigation }: AuthenticationProps) => {
  const [input, setInput] = useState("");

  const handleInputChange = (txt) => {
    console.log("zxc", txt);
    setInput(txt);
  };

  const handlePress = async () => {
    
    const apiUrl = getEndpoint('login');
    console.log("apiUrl ", apiUrl)


    const headers = {
      'Content-Type': 'application/json',
      'x-client-version': '1.2.9',
      'x-bundle-version': '1.0.0',
      'session_id': '70996248-adb0-2299-84bc-b94573d93aeb',
    };
    
    const request = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        otpChannel: 'SMS',
        mobileNumber: input,
        mobileCountryCode: '+91',
        merchantId: localConfig.MERCHANT_ID
      }),
    };


    fetch(apiUrl, request)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Handle the API response data
      console.log('API Response:', data);
    })
    .catch(error => {
      // Log the error message
      console.error('API Error:', error.message);
    });
  
  }

  return (
    <View>

      <Text style={styles.textStyle}>Enter your mobile number</Text>

      <View><PrimaryEditText
        config={edtConf}
        onChangeText={handleInputChange}
        value={input}
      /></View>


      <View style={styles.button}>
        <PrimaryButton 
        config = {styles.button}
        buttonText = 'Continue' onPress={handlePress} />
      </View>

      {/* <Button title='Go to Home'
      onPress={() => navigation.push('HomeScreen')}
      /> */}
    </View>
  )
}

export default AuthenticationScreen

const styles = StyleSheet.create({
  textStyle: {
    margin: 16,
    marginBottom: 0
  },
  button: {
    main:{
      flex : 0
    },
    button : {
      backgroundColor : "#2C2F3A",
      fontSize : 24,
      margin : 10,
      padding : 10,
      color : "#FCC32C",
      textAlign : 'center',
      borderRadius : 8,
      shadowColor : 'black',
      shadowOpacity : 1,
      elevation : 10
    }
  }
})

const edtConf = {
  topLabel: "Nothing",
  topLabelVisibility: false,
  style: {
    fontSize: 18,
    color: 'black',
    borderWidth: 2,          // Set the border width
    borderColor: '#E5E7EB',    // Set the border color
    margin: 16,
    marginBottom : 0,
    marginTop: 8,
    borderRadius: 10,
    padding: 16
  }
}