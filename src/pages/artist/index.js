import React, { useState, useEffect } from "react";
import "./index.scss";

import Layout from "../../components/layouts";
import SearchContainer from "../../components/search-container";

import { Link } from "react-router-dom";

const Artist = () => {
  return (
    <Layout showSearch={true}>
      <section className="artist">
        <div className="artist--info">
          <h2 className="artist--title">Artist</h2>
          <p className="artist--paragraph">The Police</p>
     
          <p className="artist--location">Home > Artists > The Police</p>
        </div>

        <div className="artist-albums">
            LISTA DE ALBUMES DEL ARTISTA
        </div>
      </section>
    </Layout>
  );
};

export default Artist;
