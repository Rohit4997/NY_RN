import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

const PrimaryButton = (props) => {
  return (
    <View style = {styles.main}>
      <TouchableHighlight onPress={props.onPress} >
        <Text style = {styles.button}> {props.buttonText} </Text>
      </TouchableHighlight>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  main:{
    flex : 1
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
})