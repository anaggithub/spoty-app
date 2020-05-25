import React, { useState, useEffect } from "react";
import "./index.scss";
import Layout from "../../components/layouts";
import SearchContainer from "../../components/search-container";
import useFavorites from "../../context/favorites";
import callTracks from "../../services/favorites";

const Home = () => {
  const { favorites } = useFavorites();
  const [favoriteSongs, setFavoriteStongs] = useState([]);

  useEffect(() => {
    //console.log(favorites)
    if (favorites.length > 0) {
      async function fetchData() {
        let res = await callTracks(favorites);
        if (res.error) {
          console.log("Error en el fetch de favoritos: " + res.error.message);
        } else {
          const songsByArtist = res.tracks.reduce((accumulator, song) => {
            const previousSongs = accumulator[song.artists[0].name] || [];
            return { ...accumulator, [song.artists[0].name]: [...previousSongs, song] };
          }, {});
          setFavoriteStongs(songsByArtist);
        }
      }
      fetchData();
    }
  }, [favorites]);

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
      <section className="favorites">
        {favorites.length < 0 && <h2>Favorites: </h2>}
        {favoriteSongs &&
          Object.keys(favoriteSongs).map(key => {
            return (
              <div className="favorites--box" key={key + 1}>
                <h4 className="favorites--box--artist" >{key}</h4>
                {favoriteSongs[key].map(song =>
                  <div key={song.id + 1}>
                    <p className="favorites--box--song" >{song.name}</p>
                    {song.preview_url &&
                      <div className="favorites--box--player">
                        <audio controls src={song.preview_url}></audio>
                      </div>}
                  </div>
                )}
              </div>
            )
          })
        }
      </section>
      
    </Layout>
  );
};

export default Home;
