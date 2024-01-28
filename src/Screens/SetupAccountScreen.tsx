import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import { RootStackParamList } from '../App';

type SetupAccountScreenProps = NativeStackScreenProps<RootStackParamList, 'AuthenticationScreen'>;

const SetupAccountScreen = ({navigation}: SetupAccountScreenProps) => {
  return (
    <View>
      <Text>Hello, World!</Text>
    </View>
  );
};

export default SetupAccountScreen;