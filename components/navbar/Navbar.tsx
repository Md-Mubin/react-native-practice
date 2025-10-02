import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {}

export default function Navbar({ }: Props) {
    return (
        <View style={navbarStyles.navbody}>
            <Text style={navbarStyles.navLogo}>
                Your Tasks
            </Text>

            <Link href={'./login'} style={navbarStyles.navLogin}>
                Login
            </Link>
        </View>
    )
}


const navbarStyles = StyleSheet.create({
    navbody: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#00000066",
        padding: 20
    },

    navLogo: {
        fontSize: 20,
        fontWeight: 600,
        color: "#fff",
    },

    navLogin: {
        fontSize: 20,
        fontWeight: 600,
        color: "#fff",
    }
})