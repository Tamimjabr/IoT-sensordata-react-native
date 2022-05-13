import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../constants/colors'

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonIcon: {
    marginRight: 10,
    transform: [{ rotate: '90deg' }],
    color: colors.white
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 10,
  }
})

const Button = ({ text, buttonIcon, onPress }: { text: string, buttonIcon?: React.ReactElement, onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {buttonIcon}
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button
