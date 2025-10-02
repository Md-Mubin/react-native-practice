import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

type inputProps = {
  placeholder: string;
  value: any;
  onChangeText?: any;
  style?: any
}

export default function CommonInput({ placeholder, onChangeText, value, style, ...others }: inputProps) {
  return (
    <TextInput
      style={[styles.inputStyle, style]}
      placeholder={placeholder}
      placeholderTextColor={"#00000088"}
      onChangeText={onChangeText}
      value={value}
      {...others} />
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    flex : 1,
    padding: 8,
    borderWidth : 2,
    borderColor: "#00000055",
    borderRadius: 5,
    fontSize: 20,
    fontWeight: "400"
  }
})