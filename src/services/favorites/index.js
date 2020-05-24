import config from "../../config";

const { HOST, TOKEN } = config.API_SPOTIFY;

const myHeaders = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/json",
};

const callTracks = async (tracks) => {

  let tracksString = tracks.join(",")
  console.log(tracksString)
  let string = `${HOST}tracks/?ids=${tracksString}`
  
  console.log(string)
  let request = new Request(string);
  let res = await fetch(request, {
    headers: myHeaders,
  });

  let favorites = await res.json();
//  console.log(favorites, typeof favorites)
  return favorites.tracks;
};

export default callTracks;
