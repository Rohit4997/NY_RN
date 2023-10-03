import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

const [input, setInput] = useState("");

const PrimaryEditText = () => {
  return (
    <View>
      <Text>PrimaryEditText</Text>
      <TextInput placeholder='Enter your text' 
      style = {styles.textInput}
      onChangeText={(txt) => {setInput(txt)}}
      value = {input}
      />
    </View>
  )
}

export default PrimaryEditText

const styles = StyleSheet.create({
  textInput : {
    fontSize : 18,
    color : 'blue',
    borderWidth : 2,
    borderColor : 'blue',
    margin : 10,
    borderRadius : 10
  }
})