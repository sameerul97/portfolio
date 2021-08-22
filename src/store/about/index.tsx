import React, { createContext, useReducer, Dispatch } from 'react'
import type { ReactNode } from 'react'
import AboutReducer from './reducers'
import type { InitialStateType } from './state'
import { Action } from './actions'

const initialState: InitialStateType = {
  // aboutData holds original source
  aboutData: [],
  // selectedInfo holds array of object for selected filter
  selectedInfo: [],
  aboutButtonFilters: [],
  error: null,
}

const Context = createContext<{
  state: InitialStateType
  dispatch: Dispatch<Action>
}>({
  state: initialState,
  dispatch: () => null,
})

const AboutStore = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AboutReducer, initialState)

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}

export { Context }

// const AboutStore = ({ children }) => {
//     const [state, dispatch] = useReducer(AboutReducer, initialState)
//     return <Context.Provider value={ [state, dispatch] }> { children } < /Context.Provider>
// }

// export const Context = createContext()
export default AboutStore
