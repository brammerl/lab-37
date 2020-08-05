import React from 'react';
import { useUser } from '../../hooks/githubContext'

const UserInfo = () => {
  const { avatar_url, followers, following, html_url, name } = useUser();
  return (
  <>
    <img src={avatar_url}/>
    <h2>{name}</h2>
    <ul>
      <h3>About</h3>
      <li>Followers: {followers}</li>
      <li>Following: {following}</li>
      <a href={html_url}>GitHub Profile</a>
    </ul>
  </>
  )
}

export default UserInfo;