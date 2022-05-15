import React from 'react'
import { ScrollView } from 'react-native'
import Input from './Input'
import KeyboardSpacer from './KeyboardSpacer'



const CameraIPAddress = () => {

  const [scrollEnabled, setScrollEnabled] = React.useState(false)
  return (
    <ScrollView scrollEnabled={scrollEnabled}>
      <Input text='Current IP' value='1859559.FASDFS' keyboardType='numeric' editable={false} />
      <Input text='Save IP' value='1859559.FASDFS' keyboardType='numeric' />
      <KeyboardSpacer onToggle={(keyboardIsVisible: boolean) => setScrollEnabled(keyboardIsVisible)} />
    </ScrollView>

  )
}

export default CameraIPAddress