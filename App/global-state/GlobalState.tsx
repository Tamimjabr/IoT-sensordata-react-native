import React, { useState } from 'react'
import { Resolution } from '../types/img-resolutions'

interface State {
  imgResolution: Resolution
  setImgResolution: (value: Resolution) => void,
  cameraIPAddress: string,
  setCameraIPAddress: (value: string) => void
}

const initialState: State = {
  imgResolution: Resolution.HIGH,
  setImgResolution: (value: Resolution) => undefined,
  cameraIPAddress: 'http://192.168.0.14',
  setCameraIPAddress: (value: string) => undefined
}

export const GlobalStateContext = React.createContext(initialState)

const GlobalState = ({ children }: { children: React.ReactNode }) => {
  const [imgResolution, setImgResolution] = useState(initialState.imgResolution)
  const [cameraIPAddress, setCameraIPAddress] = useState(initialState.cameraIPAddress)

  const state: State = {
    imgResolution,
    setImgResolution,
    cameraIPAddress,
    setCameraIPAddress
  }

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState