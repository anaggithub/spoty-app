import React, { useState } from "react";
import "./index.scss";

import Layout from "../../components/layouts";
import SearchContainer from "../../components/search-container";
import useArtists from "../../context/artists";
import useArtistID from "../../context/artist-id";

import { Link } from "react-router-dom";

const Artists = () => {
  const { artists } = useArtists();
  const { setArtistID } = useArtistID();

  return (
    <Layout>
      <section className="artist-list">
        <div className="artist-list--info">
          <h2 className="artist-list--title">Artists</h2>
          <p className="artist-list--paragraph">You are currently searching:</p>
          <SearchContainer
            classes="artist-list--search"
            inputPlaceholder="Type the name of your favourite artist"
          />
          <p className="artist-list--location">Home > Artists</p>
        </div>

        <div className="artist-list--grid">
          {artists &&
            artists.map((elem) => {
              if (elem.images[0]) {
                // console.log(elem.id, typeof elem.id);
                return (
                  <Link to="/home/artists/artist" key={elem.id}>
                    <ArtistBox
                      name={elem.name}
                      url={elem.images[0].url}
                      key={elem.id}
                      onClick={(e) => setArtistID(elem.id)}
                    />
                  </Link>
                );
              }
            })
            }
        </div>
      </section>
    </Layout>
  );
};

const ArtistBox = ({ url, name, onClick }) => {
  return (
    <div className="artist-box" onClick={onClick}>
      <img className="artist-box--image" alt="artist logo" src={url} />
      <h3 className="artist-box--tittle">{name}</h3>
    </div>
  );
};

export default Artists;
