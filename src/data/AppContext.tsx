import React, { createContext, useReducer } from 'react';
import { initialState, AppState, reducers } from './state'

export interface AppContextState {
  state: AppState;
  dispatch: React.Dispatch<any>;
}

export const AppContext = createContext<AppContextState>({
  state: initialState,
  dispatch: () => undefined
});

export const AppContextProvider: React.FC<any> = (({ children }) => {

  const [store, dispatch] = useReducer(reducers, initialState);

  return (
    <AppContext.Provider value={{
      state: store,
      dispatch
    }}>
      {children}
    </AppContext.Provider>
  )
});