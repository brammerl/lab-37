import React from 'react';
import { setUserInfo, setUsername, setRepos} from '../../actions/reducerActions';
import { useDispatch, useUsername } from '../../hooks/githubContext';
import fetchUser from '../../services/fetchUser';
import { fetchRepos } from '../../services/fetchRepos';

const SearchBar = () => {
  const dispatch = useDispatch();
  const username = useUsername();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    return Promise.all([fetchUser(username), fetchRepos(username)])
      .then(([userStats, repos]) => {
        dispatch(setUserInfo(userStats))
        dispatch(setRepos(repos))
      })
  }

  const handleChange = ({ target }) => {
    dispatch(setUsername(target.value))
  }
  
  return (
  <>
    <form onSubmit={handleSubmit}>
      <input type='text' value={username} onChange={handleChange}/>
      <button>Submit</button>
    </form>
  </>
  )
}

export default SearchBar;