import React, {useState} from "react";
import "./index.scss";

import Layout from "../../components/layouts";
import SearchContainer from "../../components/search-container";
import useArtists from "../../context/artists";
import useArtistID from "../../context/artist-id";

import { Redirect } from "react-router-dom";

const ArtistList = () => {
  const { artists } = useArtists();
  const { setArtistID } = useArtistID();
  const [redirect, setRedirect] = useState(false);

  return (
    <Layout>
      <section className="artist-list">
        <div className="artist-list--info">
          <h2 className="artist-list--title">Artists</h2>
          <p className="artist-list--paragraph">
            You are currently searching: 
          </p>
          <SearchContainer
            classes="artist-list--search"
            inputPlaceholder="Type the name of your favourite artist"
          />
          <p className="artist-list--location">Home > Artists</p>
        </div>

        <div className="artist-list--grid">
          {artists &&
            artists.map((e) => {
              if (e.images[0]) {
                return (
                  <ArtistBox name={e.name} key={e.id} url={e.images[0].url }  
                //    onClick={event => {
                //     setArtistID(e.id)
                  
                // }}
                 />
                );
              }
            })}
        </div>
      </section>
      {redirect && <Redirect to="/home/artists/album" />}
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
