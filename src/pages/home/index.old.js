import React, { useState, useEffect } from "react";
import "./index.scss";

import Layout from "../../components/layouts";
import SearchContainer from "../../components/search-container";

import callFetch from "../../services/search-results";

import { Link } from "react-router-dom";

const Home = () => {
  //  const [favourites, setFavourites] = useState([]);

  return (
    <Layout>
      <main className="hero">
        <div className="hero--info">
          <p>Welcome to</p>
          <h1 className="hero--title">Spotisearch</h1>
          <p className="hero--paragraph">
            Search your favourite songs over Spotify, just enter an artist's
            name in the following search box and enjoy!
          </p>
        </div>
        <SearchContainer
          classes="hero--search"
          inputPlaceholder="Type the name of your favourite artist"
        />
      </main>
      <section className="favourites"></section>
    </Layout>
  );
};

export default Home;
