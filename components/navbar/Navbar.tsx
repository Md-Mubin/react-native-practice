import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Navbar() {
    return (
        <View style={navbarStyles.navbody}>
            <Text style={navbarStyles.navLogo}>
                Your Tasks
            </Text>

            <Text
                //  href={'./login'} 
                style={navbarStyles.navLogin}>
                More Comming Soon...
            </Text>
        </View>
    )
}


const navbarStyles = StyleSheet.create({
    navbody: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#919191",
        padding: 20
    },

    navLogo: {
        fontSize: 20,
        fontWeight: 600,
        color: "#fff",
    },

    navLogin: {
        fontSize: 10,
        fontWeight: 600,
        color: "#fff",
    }
})