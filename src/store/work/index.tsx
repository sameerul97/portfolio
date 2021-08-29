import React, { createContext, useReducer, Dispatch } from 'react'
import type { ReactNode } from 'react'
import WorkReducer from './reducers'
import type { InitialStateType } from './state'
import { Actions } from './actions'

const initialState: InitialStateType = {
  workData: [],
  selectedInfo: [],
  workFilterButtons: [],
  error: null,
}

const Context = createContext<{
  state: InitialStateType
  dispatch: Dispatch<Actions>
}>({
  state: initialState,
  dispatch: () => null,
})

const AboutStore = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(WorkReducer, initialState)

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}

export { Context }

export default AboutStore
