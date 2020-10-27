export const fetchRepos = username => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then(array => {
      return array.map(repo => ({
        name: repo.name
      }));
    })
}