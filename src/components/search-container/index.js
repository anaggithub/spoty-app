import React, { useState } from "react";
import "./index.scss";
import Input from "../forms/input";
import callArtistsFetch from "../../services/search-results";
import useArtists from "../../context/artists";
import { Redirect } from "react-router-dom";

const SearchContainer = ({ classes, inputPlaceholder }) => {
  const [search, setSearch] = useState("");
  const [redirect, setRedirect] = useState(false);

  const [searchError, setSearchError] = useState(false);
  const [searchErrorMessage, setSearchErrorMessage] = useState("");

  const { setArtists } = useArtists();

  const handleSubmit = async (e) => {
    setSearchError(false);
    e.preventDefault();
    let letters = /^[A-Za-z ]+$/;

    if (search.trim() === "") {
      setSearchErrorMessage("Ingrese un artista para buscar!!");
      setSearchError(true);
    } else if (!search.match(letters)) {
      setSearchErrorMessage("Solo se aceptan letras.");
      setSearchError(true);
    } else {
      const res = await callArtistsFetch(search);
      console.log(res);
      let data = res.artists.items;
      //console.log(data, typeof data);

      if (!data || !data.length) {
        //ESTA VALIDACION NO ENTIENDO POR QUE SOLO FUNCIONA CON .LENGHT :(
        console.log("plis entra aqui!");
        setSearchErrorMessage("No se encontraron resultados.");
        setSearchError(true);
      } else {
        //  console.log("entro al else");
        setArtists(data);
        setRedirect(true);
      }
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    //    console.log(search)
  };

  return (
    <div className={`search-container ${classes}`}>
      <form method="get" onSubmit={handleSubmit}>
        <Input
          name="search"
          type="text"
          onChange={handleChange}
          error={searchError}
          errorMessage={searchErrorMessage}
          classes="search-container--input"
          placeholder={inputPlaceholder}
        >
          <i className="fas fa-search "></i>
        </Input>
      </form>
      {redirect && <Redirect to="/home/artists" />}
    </div>
  );
};

export default SearchContainer;
