import React, { useState, useEffect } from "react";
import "./index.scss";

import Layout from "../../components/layouts";
import SearchContainer from "../../components/search-container";

import { Link } from "react-router-dom";

const Album = () => {
  return (
    <Layout>
      <section className="album">
        <div className="album--info">
          <h2 className="album--title">Album</h2>
          <p className="album--paragraph">Greatests Hits</p>
     
          <p className="album--location">Home > Artists > The Police > Album</p>
        </div>

        <div className="album-songs">
            LISTA DE CANCIONES DEL ALBUM
        </div>
      </section>
    </Layout>
  );
};

export default Album;
