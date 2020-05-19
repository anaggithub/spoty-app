import React from "react";
import "./index.scss";

import Layout from "../../components/layouts";
import SearchContainer from "../../components/search-container";
import useArtists from "../../context/artists";

//import { Redirect } from "react-router-dom";

const ArtistList = () => {
  const { artists } = useArtists();

  return (
    <Layout>
      <section className="artist-list">
        <div className="artist-list--info">
          <h2 className="artist-list--title">Artists</h2>
          <p className="artist-list--paragraph">
            You are currently searching the:
          </p>
          <SearchContainer
            classes="artist-list--search"
            inputPlaceholder="Type the name of your favourite artist"
          />
          <p className="artist-list--location">Home > Artists</p>
        </div>

        <div className="artist-list-grid">
          {artists &&
            artists.map((e) => {
              if (e.images[0]) {
                return (
                  <ArtistBox name={e.name} key={e.id} url={e.images[0].url} />
                );
              }
            })}
        </div>
      </section>
    </Layout>
  );
};

const ArtistBox = ({ url, name }) => {
  return (
    <div className="artist-box">
      <img className="artist-box--image" alt="artist logo" src={url} />
      <h3 className="artist-box--tittle">{name}</h3>
    </div>
  );
};

export default ArtistList;
