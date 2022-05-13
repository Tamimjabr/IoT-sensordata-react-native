import React, { useState } from 'react'

interface State {
  imgResolution: string
  setImgResolution: (value: string) => void,
}

const initialState: State = {
  imgResolution: 'high',
  setImgResolution: (value: string) => undefined
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