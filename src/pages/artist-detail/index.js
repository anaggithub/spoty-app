import React, { useState, useEffect } from "react";
import "./index.scss";
import DefaultLayout from "../../components/layouts";

import useArtistID from "../../context/artist-id";
import callArtistByID, { callArtistAlbums } from "../../services/artist-detail";

//import { Link } from "react-router-dom";

const ArtistDetail = () => {
  const [artist, setArtist] = useState([]);
  const [artistGenres, setArtistGenres] = useState([]);
  const [artistImage, setArtistImage] = useState([]);
  const { artistID } = useArtistID();

  useEffect(() => {
    async function fetchData() {
      let res = await callArtistByID(artistID);
      setArtist(res);
      setArtistGenres(res.genres);
      setArtistImage(res.images[0]);
    }
    fetchData();
  }, []);

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

        <div className="artist-detail--grid">LISTA DE ALBUMS AQUI</div>
      </section>
    </DefaultLayout>
  );
};

export default ArtistDetail;
