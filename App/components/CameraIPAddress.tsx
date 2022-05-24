import React from 'react'
import { ScrollView, Text } from 'react-native'
import { GlobalStateContext } from '../global-state/GlobalState'
import Input from './Input'
import KeyboardSpacer from './KeyboardSpacer'


const CameraIPAddress = () => {
  const [scrollEnabled, setScrollEnabled] = React.useState(false)

  // GLOBAL STATE
  const { cameraIPAddress, setCameraIPAddress } = React.useContext(GlobalStateContext)
  const [enteredIPAddress, setEnteredIPAddress] = React.useState(cameraIPAddress)

  return (
    <ScrollView scrollEnabled={scrollEnabled}>
      <Input text='Current IP'
        value={cameraIPAddress}
        keyboardType='default'
        editable={false} />
      <Input text='Save IP'
        value={enteredIPAddress}
        keyboardType='default'
        onChangeText={(value) => setEnteredIPAddress(value)}
        onButtonPress={() => setCameraIPAddress(enteredIPAddress)} />
      <KeyboardSpacer onToggle={(keyboardIsVisible: boolean) => setScrollEnabled(keyboardIsVisible)} />
    </ScrollView>

  )
}

export default CameraIPAddress