import React, { useState, useEffect } from "react";
import "./index.scss";
import Layout from "../../components/layouts";
import useAlbumID from "../../context/album-id";
import useFavorites from "../../context/favorites";
import callAlbumByID, { callAlbumSongs } from "../../services/album-detail";
import { Redirect } from "react-router-dom";

const Album = () => {
  const { albumID } = useAlbumID();
  const { favorites, setFavorites } = useFavorites();
  const [album, setAlbum] = useState([]);
  const [albumArtist, setAlbumArtist] = useState([]);
  const [albumImage, setAlbumImage] = useState([]);
  const [songsByCD, setSongsByCD] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
 //   console.log(albumID)
     if (albumID) {
      async function fetchData() {
        let res1 = await callAlbumByID(albumID);
        if (res1.error) {
          console.log("Error en el fetch de album por ID: " + res1.error.message + ". Redirigiendo a home");
          setRedirect(true);
        }
        else {
          setAlbum(res1);
          setAlbumArtist(res1.artists[0])
          setAlbumImage(res1.images[0]);
        }
        let res2 = await callAlbumSongs(albumID);
        if (res2.error) {
          console.log("Error en el fetch de canciones por album: " + res2.error.message + ". Redirigiendo a home");
          setRedirect(true);
        }
        else {
          const songsByCd = res2.items.reduce((accumulator, song) => {
            const { disc_number } = song;
            const previousSongs = accumulator[disc_number] || [];
            return { ...accumulator, [disc_number]: [...previousSongs, song] };
          }, {});
          setSongsByCD(songsByCd);
        }
      }
      fetchData();
    }
    else{
      console.log("No hay id de album en context, redirigiendo a home")
      setRedirect(true);
    }
  }, [albumID]);

  const handleClick = (id) => {
    if (favorites.includes(id)) {
      let newfavorites = favorites
      const index = newfavorites.indexOf(id);
      if (index > -1) {
        newfavorites.splice(index, 1);
        setFavorites(newfavorites)
      }
    }
    else {
      let newfavorites = favorites
      newfavorites.push(id)
      console.log(newfavorites)
      setFavorites(newfavorites)
    }
  }

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
                        <div className="CD-Box--song--isFav" onClick={e => handleClick(song.id)}>
                          {
                            favorites.includes(song.id) ? <i className="fas fa-star"></i> : <i className="far fa-star"></i>
                          }
                        </div>
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
      {redirect && <Redirect to="/home" />}
    </Layout>
  );
};

export default Album;
