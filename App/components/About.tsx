import React from 'react'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 20,

  }, title: {
    fontWeight: "bold",
    fontSize: 20
  }
})

const About = () => {
  return (
    <>
      <Text style={[styles.text, styles.title]}>About</Text>
      <Text style={styles.text}>IoT project that consists of: Motion sensor and ESP32 camera.</Text>
      <Text style={styles.text}>
        This application visualize the data from the motion sensor in form of a chart showing motions by day for the last 7 days. As well as, the user will be able to take live images using the camera that is connected to the local network and send them to the cloud (Cloudinary is used).
      </Text>
    </>

  )
}

export default About