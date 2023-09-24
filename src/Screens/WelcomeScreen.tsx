import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack';


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

      <View style={styles.view1}>
        <Image
          style={styles.image2}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/a-square-gym.appspot.com/o/items%2Fnyl%2Fcarousel_1.png?alt=media&token=9232eae0-bf5e-4d14-a00d-f787991efe88'
          }}
        />
        <Text style={styles.title}> The fastest auto booking\napp is here!</Text>
        <Text style={styles.description}> Our speedly booking process means\nyou get a ride quickly an easily.</Text>
        <View 
          style = {styles.button}>
        <Button
          title='Get Started'
          onPress={() => navigation.push('AuthenticationScreen', {
            productId: 'rf'
          })}
        />

        </View>

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
    textAlign : 'center',
    fontWeight : 'bold'
  },
  description: {
    marginTop: 20

  },
  button: {
    marginTop: 20,
    justifyContent : 'flex-end',
    alignItems : 'flex-end',
    position : 'relative',
    flex : 0
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
  }
})