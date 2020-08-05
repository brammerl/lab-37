import React, { useContext } from 'react';


export const AppContext = React.createContext();

export const useState = () => {
  const { state } = useContext(AppContext);
  return state;
}

export const useDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch;
}

export const useUser = () => {
  const { state } = useContext(AppContext);
  return state.user;
}

export const useUsername = () => {
  const { state } = useContext(AppContext);  
  return state.username;
}

export const useRepos = () => {
  const { state } = useContext(AppContext);
  return state.repos;
}

