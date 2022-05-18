import React from 'react'
import { ScrollView, Text } from 'react-native'
import Input from './Input'
import KeyboardSpacer from './KeyboardSpacer'


const CameraIPAddress = () => {
  const [scrollEnabled, setScrollEnabled] = React.useState(false)

  return (
    <ScrollView scrollEnabled={scrollEnabled}>
      <Input text='Current IP' value='http://192.168.0.14' keyboardType='numeric' editable={false} />
      <Input text='Save IP' value='http://192.168.0.14' keyboardType='numeric' />
      <KeyboardSpacer onToggle={(keyboardIsVisible: boolean) => setScrollEnabled(keyboardIsVisible)} />
    </ScrollView>

  )
}

export default CameraIPAddress