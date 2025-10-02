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
      onChangeText={onChangeText}
      value={value}
      {...others} />
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    width: 'auto',
    padding: 8,
    borderColor: "#00000099",
    borderRadius: 10,
    outline: "none",
    fontSize: 20,
    fontWeight: 400,
  }
})