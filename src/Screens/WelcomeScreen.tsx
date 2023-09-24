import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type WelcomeProps = NativeStackScreenProps<RootStackParamList, 'WelcomeScreen'>;

const WelcomeScreen = ({navigation}: WelcomeProps) => {
  return (
    <View>
      <Button title='Go to Authentication'
      onPress={() => navigation.push('AuthenticationScreen', {
        productId : 'rf'
      })}
      />
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})