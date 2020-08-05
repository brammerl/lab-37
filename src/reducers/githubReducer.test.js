const { SET_USER_INFO, SET_USERNAME, SET_REPOS } = require("../actions/reducerActions");
import reducer from './githubReducer'

describe('app reducers', () => {
  it('sets user info with SET_USER_INFO', () => {
    const state = {
      user: {}
    }

    const action = {
      type: SET_USER_INFO,
      payload: {
        name: 'lucia'
      }
    }

    const newState = reducer(state, action);

    expect(newState).toEqual({
      user: {
        name: 'lucia'
      }
    });
  });

  it('sets the username to state with the SET_USERNAME', () => {
    const state = {
      username: ''
    };

    const action = {
      type: SET_USERNAME,
      payload: 'username'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      username: 'username'
    });

  });

  it('sets repositories using SET_REPOS', () => {
    const state = {
      repos: []
    };

    const action = {
      type: SET_REPOS,
      payload: [{
        name: 'name 1'
      }, {
        name: 'name 2'
      }]
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      repos: [
      {
        name: 'name 1'
      }, {
        name: 'name 2'
      }
    ]})
  })
})