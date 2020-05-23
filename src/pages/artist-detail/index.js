import React, { useState, useEffect } from "react";
import "./index.scss";
import DefaultLayout from "../../components/layouts";

import useAlbumID from "../../context/album-id";
import useArtistID from "../../context/artist-id";
import callArtistByID, { callArtistAlbums } from "../../services/artist-detail";

import { Link } from "react-router-dom";

const ArtistDetail = () => {

  const { artistID } = useArtistID();
  //console.log(artistID, typeof artistID, "artist id desde artist-detail");
  const { setAlbumID } = useAlbumID();

  const [artist, setArtist] = useState([]);
  const [artistGenres, setArtistGenres] = useState([]);
  const [artistImage, setArtistImage] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let res1 = await callArtistByID(
        artistID || window.localStorage.getItem("artistID")
      );
      setArtist(res1);
      setArtistGenres(res1.genres);
      setArtistImage(res1.images[0]);
      let res2 = await callArtistAlbums(
        artistID || window.localStorage.getItem("artistID")
      );
      setAlbums(res2);
    }
    fetchData();
  }, [artistID]);

  return (
    <DefaultLayout>
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
              if (elem.images[0]) {
                //   console.log(elem.id, typeof elem.id);
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
              }
              return null
            })}
        </div>
      </section>
    </DefaultLayout>
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
