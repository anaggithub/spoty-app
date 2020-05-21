import React, { useState, useEffect } from "react";
import "./index.scss";
import Layout from "../../components/layouts";

import useAlbumID from "../../context/album-id";
import callAlbumByID, { callAlbumSongs } from "../../services/album-detail";

import { Link } from "react-router-dom";

const Album = () => {
  const { albumID } = useAlbumID();

  console.log(albumID, typeof albumID, "album id desde album-detail");

  const [album, setAlbum] = useState([]);
  const [albumImage, setAlbumImage] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let res1 = await callAlbumByID(
        albumID || window.localStorage.getItem("albumID")
      );
      setAlbum(res1);
      setAlbumImage(res1.images[0]);
      //  let res2 = await callArtistAlbums(
      //   albumID ||  window.localStorage.getItem("albumID")
      //  );
      //  setSongs(res2);
    }
    fetchData();
  }, [albumID]);

  return (
    <Layout>
      <section className="album-detail">
        <div className="album-detail--info">
          <img
            className="album-detail--info--logo"
            alt="album logo"
            src={albumImage && albumImage.url}
          ></img>
          <div className="album-detail--info--content">
            <h2>{album && album.name}</h2>
            <p>{album && album.release_date}</p>
          </div>
        </div>

        <p className="album-detail--location">
          Home > Artists > Artista > {album && album.name}
        </p>

        <div className="album-detail--grid">
          {/* {albums &&
            albums.map((elem) => {
              if (elem.images[0]) {
                //   console.log(elem.id, typeof elem.id);
                return (
                  <SongBox
                    name={elem.name}
                    url={elem.images[0].url}
                    year={elem.release_date}
                    key={elem.id}
                    onClick={(e) => setAlbumID(elem.id)}
                  />
                );
              }
            })} */}
        </div>
      </section>
    </Layout>
  );
};

export default Album;
