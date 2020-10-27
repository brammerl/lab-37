import React, { useReducer } from 'react';
import { AppContext } from '../hooks/githubContext';
import reducer, { initialState } from '../reducers/githubReducer'

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;