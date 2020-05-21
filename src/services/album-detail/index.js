//import newsMock from './mock.json';
import config from "../../config";

const { HOST, TOKEN } = config.API_SPOTIFY;

const myHeaders = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/json",
};

const callAlbumByID = async (id) => {
  let request = new Request(`${HOST}albums/${id}`);
  let res = await fetch(request, {
    headers: myHeaders,
  });

  let artistDetail = await res.json();
 // console.log(artistDetail, typeof artistDetail);
  return artistDetail;
};

const callAlbumSongs = async (id) => {
  let request = new Request(`${HOST}artists/${id}/tracks`);
  let res = await fetch(request, {
    headers: myHeaders,
  });

  let artistDetail = await res.json();
 // console.log(artistDetail, typeof artistDetail);
  return artistDetail;
};

export default callAlbumByID;
export { callAlbumSongs };

