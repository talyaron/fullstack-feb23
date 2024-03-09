import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'

const STYLES = ["default", "dark-content", "light-content"]
const StatusBarScreen = () => {
    const [style, setStyle] = useState<string>(STYLES[0])

    const changeBarStyle = () => {
        const styleIdx = STYLES.indexOf(style) + 1
        if (styleIdx === STYLES.length) {
            setStyle(STYLES[0])
        } else {
            setStyle(STYLES[styleIdx])
        }
    }

    return (
        <View>
            <StatusBar animated={true} />
            <Text>StatusBarScreen</Text>
            <Pressable onPress={changeBarStyle} style={{ backgroundColor: "red" }}>
                <Text>Change style</Text>
            </Pressable>
        </View>
    )
}

export default StatusBarScreen