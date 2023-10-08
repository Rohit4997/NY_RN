import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { RootStackParamList } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Style from '../Style/Style';
import PrimaryButton from '../Components/PrimaryButton';
import Carousel from '../Components/Carousel';


// const [index, setIndex] = useState("");

type WelcomeProps = NativeStackScreenProps<RootStackParamList, 'WelcomeScreen'>;

const WelcomeScreen = ({ navigation }: WelcomeProps) => {
  return (
    <View style={styles.view}>
      <Image
        style={styles.image1}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/a-square-gym.appspot.com/o/items%2Fnyl%2Fic_namma_yatri_logo.png?alt=media&token=1e989967-0778-4481-99a4-733d1cc15d0f'
        }}
      />
        <View style = {styles.carousel}>
        <Carousel />
        </View>
        <View style={styles.button}>
          <PrimaryButton buttonText = 'Get Started' onPress={() => navigation.push('AuthenticationScreen', {
              productId: 'rf'
            })}/>
        </View>
     
    </View>
  )
}

export default WelcomeScreen


const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    flex: 1
  },

  view1: {
    alignItems: 'center',
    flexDirection: 'column'
  },

  title: {
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  description: {
    marginTop: 20,
    textAlignVertical: 'center',
    textAlign: 'center'

  },
  button: {
    flex: 1,
    flexDirection : 'row',
    justifyContent : 'center'
  },
  image1: {
    height: 50,
    width: 147,
    marginTop: 50
  },
  image2: {
    height: 300,
    width: 300,
    marginTop: 18
  },
  carousel : {
    flex : 7,
    justifyContent : 'center',
  }
})