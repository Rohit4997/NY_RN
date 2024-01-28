import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { RootStackParamList } from '../App';
import { View } from 'react-native';
import PrimaryEditText from '../Components/PrimaryEditText';
import PrimaryButton from '../Components/PrimaryButton';
import headers from '../Services/API';
import { localConfig } from '../../localConfig';
import { getEndpoint } from '../Services/Endpoints';
import { useAuth } from '../Services/AuthContext';

type OTPScreenProps = NativeStackScreenProps<RootStackParamList, 'OTPScreen'>;

const OTPScreen = ({ route, navigation }: OTPScreenProps) => {


    const authId = route.params.mobile;

    const [input, setInput] = useState("");

    const handleInputChange = (txt) => {
        console.log("zxc", txt);
        setInput(txt);
    };


    const handlePress = async () => { 

        const apiUrl = getEndpoint('authVerify', { authId: authId.toString() });
        console.log("apiUrl ", apiUrl)

        const request = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                whatsappNotificationEnroll: "OPT_IN",
                otp: input,
                deviceToken: ""
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
            // const { authToken, setToken } = useAuth();
            // setToken(data.token);
            navigation.push('SetupAccountScreen')
          })
          .catch(error => {
            // Log the error message
            console.error('API Error:', error.message);
          });

    }
    return (
        <View>
            <View><PrimaryEditText
                config={edtConf}
                onChangeText={handleInputChange}
                value={input}
            /></View>


            <View style={styles.button}>
                <PrimaryButton
                    config={styles.button}
                    buttonText='Continue' onPress={handlePress} />
            </View>

        </View>
    );
};



const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },

    button: {
        main: {
            flex: 0
        },
        button: {
            backgroundColor: "#2C2F3A",
            fontSize: 24,
            margin: 10,
            padding: 10,
            color: "#FCC32C",
            textAlign: 'center',
            borderRadius: 8,
            shadowColor: 'black',
            shadowOpacity: 1,
            elevation: 10
        }
    }
};

export default OTPScreen;


const edtConf = {
    topLabel: "Enter OTP sent to your mobile",
    topLabelVisibility: true,
    style: {
        fontSize: 18,
        color: 'black',
        borderWidth: 2,          // Set the border width
        borderColor: '#E5E7EB',    // Set the border color
        margin: 16,
        marginBottom: 0,
        marginTop: 8,
        borderRadius: 10,
        padding: 16
    }
}