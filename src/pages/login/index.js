import React, { useEffect } from 'react';

const token = "BQB936e2MigQOatm3Y_ejqO-UgTGNvWnhaNUiITT2n_cXEDgi5gr3aujeg0rOxWQn_2OpTmUiQYpvjHRjJCoCJ2W99EN7U5Mo8d3BpdXLUjEpKJ6TemYvsCSn9DgXxSRUEtp5j5CWmJ4UdO-phhQj69ukOj4CxDs8kT-hXdBVb-TXX-r"

const Login = () => {
  //const [userId, setUserId] = useState(null)
  const myHeaders = {
    'Authorization': `Bearer ${token}`,
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
    fetch('https://api.spotify.com/v1/search/?q=zeppelin&type=artist', {
      headers: myHeaders
    })
    .then(res => res.json() )
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }, [])
  

//   const getPlayList = () => {
//     fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
//       headers: myHeaders
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
//   }
//   const getMyTopArtists = () => {
//     fetch(`https://api.spotify.com/v1/me/top/artists?limit=5`, {
//       method: 'GET',
//       headers: myHeaders
//     })
//     .then(res =>res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//   }
  return (
    <div className="App">
     
      <button >PlayList</button>
      {/* <button onClick={getMyTopArtists}>Get My Top Artists</button> */}
    </div>
  );
}

export default Login