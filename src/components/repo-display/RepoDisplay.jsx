import React from 'react';
import { useRepos } from '../../hooks/githubContext';

const RepoDisplay = () => {
 const repos  = useRepos()
return (
  <ul>
    <h3>Repositories</h3>
    {
      repos.map(repo => <li key={repo.name}>{repo.name}</li>)
    }
  </ul>
)
}

export default RepoDisplay;