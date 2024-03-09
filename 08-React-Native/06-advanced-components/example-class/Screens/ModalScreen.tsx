import { View, Text, Modal, Pressable, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'

const ModalScreen = () => {
    const [modalVisibility, setModalVisibility] = useState<boolean>(false)

    return (
        <View style={styles.centeredView}>
            <Text>ModalScreen</Text>
            <Modal
                animationType="fade"
                visible={modalVisibility}
                onRequestClose={() => {
                    // Alert.alert("modal has been closed")
                    setModalVisibility(false)
                }}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hi!</Text>
                    <Pressable onPress={() => { setModalVisibility(false) }}>
                        <Text>Hide modal</Text>
                    </Pressable>
                </View>
            </Modal>

            <Pressable onPress={() => { setModalVisibility(true) }}>
                <Text>Show modal</Text>
            </Pressable>
        </View>
    )
}

export default ModalScreen

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "#9797ff",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000", //ios
        shadowOpacity: 0.25, // ios
        shadowRadius: 4, //ios
        shadowOffset: {
            width: 0,
            height: 2
        }, //ios
        elevation: 5
    },
    modalText: {}
})