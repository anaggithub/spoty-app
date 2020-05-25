import React, { useEffect, useState } from "react";
import "./index.scss";
import {LayoutArtists} from "../../components/layouts";
import SearchContainer from "../../components/search-container";
import useSearchValue from "../../context/search-value";
import useArtistID from "../../context/artist-id";
import callArtists from "../../services/artists";
import { Link, Redirect } from "react-router-dom";

const Artists = () => {

  const { searchValue } = useSearchValue();
  const { setArtistID } = useArtistID();
  const [artists, setArtists] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {

    if (searchValue) {
      async function fetchData() {

        const res = await callArtists(searchValue);

        if (res.error) {
          console.log("Error en el fetch de artistas: " + res.error.message + ". Redrigiendo a home");
           setRedirect(true);

        } else {
          console.log(res)
          let data = res.artists.items;
          if (!data.length) {
            console.log("no se encontraron resultados!, ups cagué jajajajaja ")
          } else {
            setArtists(data);
          }
        }
      }
      fetchData()
    }
    else {
      console.log("No hay valor de busqueda  en context, redirigiendo a home")
      setRedirect(true);
    }
  }, [searchValue]);

  return (
    <LayoutArtists>
      <section className="artist-list">
        <div className="artist-list--info">
          <h2 className="artist-list--title">Artists</h2>
          <p className="artist-list--paragraph">You are currently searching: "{searchValue && searchValue}"</p>
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
              return null
            })}
        </div>
      </section>
      {redirect && <Redirect to="/home" />}
    </LayoutArtists>
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
