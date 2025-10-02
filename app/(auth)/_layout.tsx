import { Slot } from 'expo-router'
import React from 'react'
import { StatusBar, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {}

export default function _layout({ }: Props) {
  return (
    <View>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
      <SafeAreaView>
        <Slot />
      </SafeAreaView>
    </View>
  )
}