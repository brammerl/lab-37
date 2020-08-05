const fetchUser = username => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(({name, followers, following, html_url, avatar_url}) => { 
      return {
      name,
      avatar_url,
      followers,
      following,
      html_url
    };
  })
}

export default fetchUser;