import config from "../../config";

const { HOST, TOKEN } = config.API_SPOTIFY;

const myHeaders = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/json",
};

const callArtistByID = async (id) => {
  let request = new Request(`${HOST}artists/${id}`);
  let res = await fetch(request, {
    headers: myHeaders,
  });

  let artistDetail = await res.json();
 // console.log(artistDetail, typeof artistDetail);
  return artistDetail;
};

const callArtistAlbums = async (id) => {
  let request = new Request(`${HOST}artists/${id}/albums`);
  let res = await fetch(request, {
    headers: myHeaders,
  });

  let albums = await res.json();
  //console.log(albums.items, typeof albums);
  return albums.items;
};

export default callArtistByID;
export { callArtistAlbums };
