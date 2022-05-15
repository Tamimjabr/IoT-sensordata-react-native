import React from 'react'
import { Keyboard, View, Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0
  }
})

const KeyboardSpacer = ({ onToggle }: { onToggle?: any }) => {
  const [keyboardSpace, setKeyboardSpace] = React.useState(0)

  React.useEffect(() => {
    const showSubscription = Keyboard.addListener(
      'keyboardDidShow',
      (event) => {
        onToggle(true)
        const screenHeight = Dimensions.get('window').height
        const endY = event.endCoordinates.screenY
        // add a view that is that exact height of the keyboard
        setKeyboardSpace(screenHeight - endY)
      }
    )
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      onToggle(false)
      // remove the view for the spacer
      setKeyboardSpace(0)
    })

    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  })

  return <View style={[styles.container, { height: keyboardSpace }]} />
}

export default KeyboardSpacer
