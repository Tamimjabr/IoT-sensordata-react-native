import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import colors from '../constants/colors'

const styles = StyleSheet.create({
  row: {
    marginVertical: 10,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 16,
    color: colors.white
  },
  divider: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    height: StyleSheet.hairlineWidth
  }
})

export const RowItem = ({ title, rightIcon, onPress, textStyle }: { title: string, rightIcon?: React.ReactElement, onPress: () => void, textStyle?: { [key: string]: string | number } }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
      {rightIcon}
    </TouchableOpacity>
  )
}

export const RowDivider = () => {
  return <View style={styles.divider} />
}
