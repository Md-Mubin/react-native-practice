import React from 'react'
import { StatusBar, View } from 'react-native'
import { Slot } from 'expo-router'
import { Navbar } from '@/components'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {}

export default function _layout({ }: Props) {
    return (
        <SafeAreaView>
            <StatusBar barStyle={"light-content"} backgroundColor={"#00000066"} />

            {/* navbar */}
            <Navbar />

            {/* body */}
            <View style={{ paddingHorizontal: 20 }}>
                <Slot />
            </View>
        </SafeAreaView>
    )
}