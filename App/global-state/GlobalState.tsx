import React, { useState } from 'react'
import { Resolution } from '../types/img-resolutions'

interface State {
  imgResolution: Resolution
  setImgResolution: (value: Resolution) => void,
}

const initialState: State = {
  imgResolution: Resolution.HIGH,
  setImgResolution: (value: Resolution) => undefined
}

export const GlobalStateContext = React.createContext(initialState)

const GlobalState = ({ children }: any) => {
  const [imgResolution, setImgResolution] = useState(initialState.imgResolution)

  const state: State = {
    imgResolution,
    setImgResolution
  }

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState