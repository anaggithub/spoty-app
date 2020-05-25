import React, { useState, useEffect } from "react";
import "./index.scss";
import {LayoutWithSearch} from "../../components/layouts";
import useAlbumID from "../../context/album-id";
import useArtistID from "../../context/artist-id";
import callArtistByID, { callArtistAlbums } from "../../services/artist-detail";
import { Link, Redirect } from "react-router-dom";

const ArtistDetail = () => {

  const { artistID } = useArtistID();
  const { setAlbumID } = useAlbumID();
  const [artist, setArtist] = useState([]);
  const [artistGenres, setArtistGenres] = useState([]);
  const [artistImage, setArtistImage] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
 //   console.log(artistID)
    if (artistID) {
        async function fetchData() {
        let res1 = await callArtistByID(artistID);

        if (res1.error) {
          console.log("Error en el fetch de artista por ID: " + res1.error.message + ". Redirigiendo a home");
          setRedirect(true);
        }
        else {
          setArtist(res1);
          setArtistGenres(res1.genres);
          setArtistImage(res1.images[0]);
        }

        let res2 = await callArtistAlbums(artistID);
        if (res2.error) {
          console.log("Error en el fetch de albumes por Artista: " + res2.error.message + ". Redirigiendo a home");
          setRedirect(true);
        }
        else {
          let albumWithImages = res2.items.filter(elem => elem.images[0])
          setAlbums(albumWithImages)
        }
      }
      fetchData();
    }
    else{
      setRedirect(true);
    }
  }, [artistID]);

  return (
    <LayoutWithSearch>
      <section className="artist-detail">
        <div className="artist-detail--info">
          <img
            className="artist-detail--info--logo"
            alt="artist logo"
            src={artistImage && artistImage.url}
          ></img>
          <div className="artist-detail--info--content">
            <h2>{artist && artist.name}</h2>
            <p>
              Genres:{" "}
              {artistGenres &&
                artistGenres.map((elem) => <span key={elem + 1}>{elem} </span>)}
            </p>
          </div>
        </div>

        <p className="artist-detail--location">
          Home > Artists > {artist && artist.name}
        </p>

        <div className="artist-detail--grid">
          {albums &&
            albums.map((elem) => {
              return (
                <Link to="/home/artists/artist/album" key={elem.id}>
                  <AlbumBox
                    name={elem.name}
                    url={elem.images[0].url}
                    year={elem.release_date}
                    key={elem.id}
                    onClick={(e) => setAlbumID(elem.id)}
                  />
                </Link>
              );
            })}
        </div>
      </section>
      {redirect && <Redirect to="/home" />}
    </LayoutWithSearch>
  );
};

const AlbumBox = ({ url, name, year, onClick }) => {
  return (
    <div className="album-box" onClick={onClick}>
      <img className="album-box--image" alt="album logo" src={url} />
      <div className="album-box--content">
        <h3 className="album-box--name">{name}</h3>
        <p className="album-box--year">{year}</p>
      </div>
    </div>
  );
};

export default ArtistDetail;
