//import newsMock from './mock.json';
import config from "../../config";

const { HOST, TOKEN } = config.API_SPOTIFY;

const myHeaders = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/json",
};

const callArtistsFetch = async (artist) => {
  let request = new Request(`${HOST}search/?q=${artist}&type=artist`);
  let res = await fetch(request, {
    headers: myHeaders,
  });

  let artists = await res.json();
  return artists;
};

export default callArtistsFetch;
