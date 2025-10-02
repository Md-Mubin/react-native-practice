import React from 'react'
import { Button, Pressable, StyleSheet, Text } from 'react-native'

type btnProps = {
  btnName: any;
  onPress?: any;
  styles?: any;
}

export default function CommonButton({ btnName, onPress, styles }: btnProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[commonButtonStyle.button, styles]}>
      <Text style={commonButtonStyle.buttonText}>
        {btnName}
      </Text>
    </Pressable>
  )
}

const commonButtonStyle = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#00000055",
    alignItems: "center",
    borderRadius: 8
  },

  buttonText: {
    fontSize: 20,
    color : "#fff",
  }

})