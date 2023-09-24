import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type AuthenticationProps = NativeStackScreenProps<RootStackParamList, 'AuthenticationScreen'>;

const AuthenticationScreen = ({navigation}: AuthenticationProps ) => {
  return (
    <View>
      <Text>AuthenticationScreen</Text>
      <Button title='Go to Home'
      onPress={() => navigation.push('HomeScreen')}
      />
    </View>
  )
}

export default AuthenticationScreen

const styles = StyleSheet.create({})