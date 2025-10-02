import React from 'react'
import { StyleSheet, Text } from 'react-native'

type headerProps = {
  headerName: string;
}

export default function CommonHeader({ headerName }: headerProps) {
  return (
    <Text style={style.headerStyle}>
      {headerName}
    </Text>
  )
}

const style = StyleSheet.create({
  headerStyle  : {
    fontSize : 30,
    fontWeight : 600,
    textAlign: "center",
    marginHorizontal : 10
  }
})