import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

const PrimaryEditText = (props) => {
  const [input, setInput] = useState("");
  return (
    <View>
      {
        props.config.topLabelVisibility && (<Text>{props.config.topLabel}</Text>)
      }

      <TextInput placeholder='Enter your text' 
      onChangeText = {props.onChangeText}
      value = {props.value}
      style = {StyleSheet.create(props.config.style)}
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