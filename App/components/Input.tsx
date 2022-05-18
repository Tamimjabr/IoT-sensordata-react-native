import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet
} from 'react-native'
import colors from '../constants/colors'
import { StylesArray } from '../types/styles-array'


const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row'
  },
  containerDisabled: {
    backgroundColor: colors.gray
  },
  text: {
    fontSize: 18,
    color: colors.white,
    fontWeight: '700'
  },
  input: {
    paddingHorizontal: 10,
    flex: 1,
    color: colors.dark
  },
  button: {
    width: '40%',
    padding: 15,
    borderLeftColor: colors.dark,
    borderLeftWidth: StyleSheet.hairlineWidth,
    backgroundColor: colors.blue,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  }, buttonDisabled: {
    backgroundColor: colors.gray,
  }, darkText: {
    color: colors.dark
  }
})

const Input = ({
  text,
  value,
  onButtonPress,
  keyboardType,
  onChangeText,
  editable = true
}: { text: string, value: string, onButtonPress?: () => void, keyboardType: any, onChangeText?: () => void, editable?: boolean }) => {
  const containerStyles: StylesArray = [styles.container]
  const buttonStyle: StylesArray = [styles.button]
  const darkText: StylesArray = [styles.text]
  
  if (!editable) {
    containerStyles.push(styles.containerDisabled)
    buttonStyle.push(styles.buttonDisabled)
    darkText.push(styles.darkText)
  }

  return (
    <View style={containerStyles}>
      <TextInput
        value={value}
        style={styles.input}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        editable={editable}
      />
      <TouchableOpacity onPress={onButtonPress} style={buttonStyle}>
        <Text style={darkText}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Input
