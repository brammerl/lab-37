import {
  SET_USER_INFO,
  SET_USERNAME,
  SET_REPOS
} from '../actions/reducerActions';

export const initialState = {
  user: {},
  username: '',
  repos: []
}

export default function reducer (state, action) {
  switch(action.type) {
    case SET_USER_INFO: 
      return {...state, user: action.payload};
    case SET_USERNAME:
      return {...state, username: action.payload}
    case SET_REPOS: 
      return {...state, repos: action.payload}
    default: 
      return state;
  } 
}