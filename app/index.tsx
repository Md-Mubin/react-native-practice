import { CommonHeader } from '@/components'
import { Link } from 'expo-router'
import React from 'react'
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'

export default function Home() {
 
    const handleBtn = ()=>{
        console.log("clickig")
    }

    return (
        <>
        <View style={styles.headerStyle}>
            <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
            <Text style={styles.headerText}>Hello World1</Text>
            <Link href={"/contact"}>
                <Text style={styles.headerText}>Contact Page</Text>
            </Link>

            <Text style={styles.headerText}>Hello World3</Text>

        </View>
            <Button title='Hrllo' onPress={handleBtn}/>

        <CommonHeader headerName='Hello'/>
        </>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: "row",
        padding: 20,
        margin: 20,
        backgroundColor: "#00000099",
        justifyContent: "space-around",
        alignItems: "center"

    },

    headerText: {
        color: "#fff"
    }
})