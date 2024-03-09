import { View, Text, Button, StyleSheet, SafeAreaView, Alert } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const AlertScreen = () => {
    // 1 button:  neutral, "OK"
    // 2 buttons: left: "fail, bad", right: "continue", EXAMPLE: "cancel" "Continue"
    // 3 buttons: left: "neutral", middle: "fail, bad", right: "accept", EXAMPLE: "later" "cancel" "accept"

    const twoButtonAlert = () => {
        Alert.alert("This is an alert", "this alert is created by us", [
            {
                text: "Cancel",
                onPress: () => { console.log("cancel pressed") },
                style: "cancel"
            },
            {
                text: "OK",
                onPress: () => { console.log("ok pressed") },
            },

        ])
    }
    const threeButtonAlert = () => {
        Alert.alert("This is an alert", "this alert is created by us 3", [
            {
                text: "Ask me later",
                onPress: () => { console.log("later pressed") },
                style: "destructive"
            },
            {
                text: "Cancel",
                onPress: () => { console.log("cancel pressed") },
                style: "cancel"
            },
            {
                text: "OK",
                onPress: () => { console.log("ok pressed") },
            },

        ])
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <Button title='2 button' onPress={twoButtonAlert} />
            <Button title='3 button' onPress={threeButtonAlert} />
        </SafeAreaView>
    )
}

export default AlertScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})