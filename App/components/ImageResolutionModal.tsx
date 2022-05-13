import React from 'react'
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: '50%',
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    marginBottom: 10
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  contentContainer: {
    marginTop: 20
  }
});

const ImageResolutionModal = ({ modalVisible, onClose, content }: any) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        onClose(!modalVisible)
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.contentContainer}>
          {content}
        </View>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => onClose(!modalVisible)}
        >
          <Text style={styles.textStyle}>Hide</Text>
        </Pressable>
      </View>
    </Modal>
  )
}

export default ImageResolutionModal