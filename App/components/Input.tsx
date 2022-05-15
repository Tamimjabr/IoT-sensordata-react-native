import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet
} from 'react-native'
import colors from '../constants/colors'

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
    backgroundColor: colors.white
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
  const containerStyles: any = [styles.container]
  if (!editable) {
    containerStyles.push(styles.containerDisabled)
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
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Input
