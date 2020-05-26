import React, { useState, useEffect } from "react";
import "./index.scss";
import LayoutDefault from "../../components/layouts";
import SearchContainer from "../../components/search-container";
import useFavorites from "../../context/favorites";
import { UseSearchError, UseSearchErrorMessage } from "../../context/search-errors";
import callTracks from "../../services/favorites";

const Home = () => {
  const { favorites } = useFavorites();
  const [favoriteSongs, setFavoriteStongs] = useState([]);

  const { setSearchError } = UseSearchError();
  const { setSearchErrorMessage } = UseSearchErrorMessage();

  useEffect(() => {

    setSearchError(false)
    setSearchErrorMessage("")

    if (favorites.length > 0) {
      async function fetchData() {
        let res = await callTracks(favorites);
        if (res.error) {
          console.log("Error en el fetch de favoritos: " + res.error.message);
        } else {
          console.log(res, typeof res)
          setFavoriteStongs(res.tracks);
        }
      }
      fetchData();
    }
  }, [favorites]);

  return (
    <LayoutDefault>
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
      <section className="favorites">
        {favorites.length >0 && <h2 className="favorites--title">Favorites: </h2>}
        <div className="favorites--grid">
          {favoriteSongs &&
            favoriteSongs.map(elem =>
              <SongBox
                name={elem.name}
                url={elem.album.images[0].url}
                artist={elem.artists[0].name}
                album={elem.album.name}
                key={elem.id}
              //  onClick={(e) => setAlbumID(elem.id)
              />
            )
          }
        </div>
      </section>
    </LayoutDefault>
  );
};

const SongBox = ({ url, name, artist, album }) => {
  return (
    <div className="song-box" >
      <img className="song-box--image" alt="album logo" src={url} />
      <div className="song-box--content">
        <h3 className="song-box--name">{name}</h3>
        <p className="song-box--artist">Artist: {artist}</p>
        <p className="song-box--album">Album: {album}</p>
      </div>
    </div>
  );
};


export default Home;
