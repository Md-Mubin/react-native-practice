import React from 'react'
import { StyleSheet, Text } from 'react-native'

type headerProps = {
  headerName: string;
  extraStyle?: any;
}

export default function CommonHeader({ headerName, extraStyle }: headerProps) {
  return (
    <Text style={[style.headerStyle, extraStyle]}>
      {headerName}
    </Text>
  )
}

const style = StyleSheet.create({
  headerStyle: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: "center",
    marginHorizontal: 10
  }
})