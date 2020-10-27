import fetchUser from '../services/fetchUser';

export const SET_USER_INFO = 'SET_USER_INFO';
export const setUserInfo = (userinfo) => ({
  type: SET_USER_INFO,
  payload: userinfo
})

export const SET_USERNAME = 'SET_USERNAME';
export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username
})

export const SET_REPOS = 'SET_REPOS';
export const setRepos = (repos) => ({
  type: SET_REPOS,
  payload: repos
})