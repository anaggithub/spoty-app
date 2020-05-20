import React from "react";
import "./index.scss";

import Layout from "../../components/layouts";
import useArtists from "../../context/artists";

import useArtistID from "../../context/artist-id";

//import { Link } from "react-router-dom";

const Artist = () => {

  const { artists } = useArtists();
  const { artistID } = useArtistID();
  console.log(artists)
  console.log(artistID)
  
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
