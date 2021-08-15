import React, { createContext, useReducer } from 'react'
import AboutReducer from './AboutReducer'

const initialState = {
  // aboutData holds original source
  aboutData: [],
  // selectedInfo holds array of object for selected filter
  selectedInfo: [],
  aboutButtonFilters: [],
  error: null,
}

const AboutStore = ({ children }) => {
  const [state, dispatch] = useReducer(AboutReducer, initialState)
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
}

export const Context = createContext()
export default AboutStore
