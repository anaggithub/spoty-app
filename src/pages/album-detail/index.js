import React, { useState, useEffect } from "react";
import "./index.scss";
import Layout from "../../components/layouts";

import useAlbumID from "../../context/album-id";
import callAlbumByID, { callAlbumSongs } from "../../services/album-detail";

const Album = () => {
  const { albumID } = useAlbumID();

  console.log(albumID, typeof albumID, "album id desde album-detail");

  const [album, setAlbum] = useState([]);
  const [albumArtist, setAlbumArtist] = useState([]);
  const [albumImage, setAlbumImage] = useState([]);
  const [songsByCD, setSongsByCD] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let res1 = await callAlbumByID(
        albumID || window.localStorage.getItem("albumID")
      );
      setAlbum(res1);
      setAlbumArtist(res1.artists[0])
      setAlbumImage(res1.images[0]);

      let res2 = await callAlbumSongs(
        albumID || window.localStorage.getItem("albumID")
      );

      const songsByCd = res2.items.reduce((accumulator, song) => {
        const { disc_number } = song;
        const previousSongs = accumulator[disc_number] || [];

        return { ...accumulator, [disc_number]: [...previousSongs, song] };
      }, {});

      //   console.log(songsByCd)
      setSongsByCD(songsByCd);

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
          Home > Artists > {albumArtist && albumArtist.name} > {album && album.name}
        </p>

        <div className="album-detail--grid">
          {songsByCD &&
            Object.keys(songsByCD).map(key => {
              return (
                <div className="CD-Box" key={key + 1}>
                  <h4 className="CD-Box--name" >CD {key}</h4>
                  {songsByCD[key].map(song =>
                    <div key={song.id + 1}>
                      <div className="CD-Box--song"  >
                        <p className="CD-Box--song--name" >{song.name}</p>
                        <div className="CD-Box--song--isFav"> F </div>
                      </div>
                      {song.preview_url &&
                        <div className="CD-Box--player">
                          <audio controls src={song.preview_url}></audio>
                        </div>}
                    </div>
                  )}
                </div>
              )
            })
          }
        </div>
      </section>
    </Layout>
  );
};

export default Album;
