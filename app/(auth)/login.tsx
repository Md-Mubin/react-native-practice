import { CommonButton } from '@/components'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

export default function Login() {

  const router = useRouter()
  const { height } = useWindowDimensions()

  return (
    <View style={[loginStyles.loginBody, { height: height }]}>

      <Image src=''/>

      <Text style={loginStyles.loginHeader}>Login</Text>

      <CommonButton
        btnName={"Login"}
        onPress={() => router.replace("/")} />
    </View>
  )
}

const loginStyles = StyleSheet.create({
  loginHeader: {
    fontSize: 25,
    fontWeight: 600,

  },
  loginBody: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20
  }
})