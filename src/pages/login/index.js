import React, { useEffect, useState } from 'react';

const Login = () => {
  const [userId, setUserId] = useState(null)
  const myHeaders = {
    'Authorization': 'Bearer BQC6cmQ9_GvwOO1wUuDCuH5CJJUKr6jng6Vgq3om9Qk_ssI3smpMC7ogqaope56ThN-mFY8xn47DCs08ji3Mx8iE-LiUscT34I6O0JyFLKEtXbtYbUnQ6l-S2J7LpKmWOBhTxD-BS5E1nFQAUjf7oRKMxZk65N1kMnWaP0sTnDCUXDmR',
    'Content-Type': 'application/json'
  }
//   useEffect(() => {
//     fetch('https://api.spotify.com/v1/me', {
//       headers: myHeaders
//     })
//     .then(res => res.json())
//     .then(({id}) => setUserId(id))
//     .catch(err => console.log(err))
//   }, [])
  
  useEffect(() => {
    fetch('https://api.spotify.com/v1/artists/', {
      headers: myHeaders
    })
    .then(res => res.json() )
  //  .then(({id}) => setUserId(id))
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }, [])
  

  const getPlayList = () => {
    fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      headers: myHeaders
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }
  // const getMyTopArtists = () => {
  //   fetch(`https://api.spotify.com/v1/me/top/artists?limit=5`, {
  //     method: 'GET',
  //     headers: myHeaders
  //   })
  //   .then(res =>res.json())
  //   .then(data => console.log(data))
  //   .catch(err => console.log(err))
  // }
  return (
    <div className="App">
      <p>{userId && userId}</p>
      <button onClick={getPlayList}>Get PlayList</button>
      {/* <button onClick={getMyTopArtists}>Get My Top Artists</button> */}
    </div>
  );
}

export default Login