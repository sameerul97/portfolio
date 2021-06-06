import React, { createContext, useReducer } from 'react'
import WorkReducer from './WorkReducer'

const initialState = {
  // aboutData holds original source
  workData: [],
  // selectedInfo holds array of object for selected filter
  selectedInfo: [],
  workFilterButtons: [],
  error: null,
}

const Workstore = ({ children }) => {
  const [state, dispatch] = useReducer(WorkReducer, initialState)
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
}

export const Context = createContext(initialState)
export default Workstore
