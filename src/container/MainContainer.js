import React from 'react';
import SearchBar from '../components/Input/SearchBar';
import UserInfo from '../components/user-info/UserInfo';
import RepoDisplay from '../components/repo-display/RepoDisplay'

const MainContainer = () => {
  return (
    <>
      <SearchBar />
      <UserInfo />
      <RepoDisplay />
    </>
  )
}

export default MainContainer;