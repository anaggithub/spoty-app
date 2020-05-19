import React from "react";
import "./index.scss";

import Layout from "../../components/layouts";
import SearchContainer from "../../components/search-container";

//import { Link } from "react-router-dom";

const ArtistList = () => {
  return (
    <Layout>
      <section className="artist-list">
        <div className="artist-list--info">
          <h2 className="artist-list--title">Artists</h2>
          <p className="artist-list--paragraph">You are currently searching the:</p>
          <SearchContainer
            classes="artist-list--search"
            inputPlaceholder="Type the name of your favourite artist"
          />
          <p className="artist-list--location">Home > Artists</p>
        </div>

        <div className="artist-list-albums">
            
        </div>
      </section>
    </Layout>
  );
};

export default ArtistList;
