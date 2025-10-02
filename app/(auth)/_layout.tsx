import { Slot } from 'expo-router'
import React from 'react'
import { StatusBar, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function _layout() {
  return (
    <SafeAreaView>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
      <Slot />
    </SafeAreaView>
  )
}