import React, { useState } from "react";
import "./index.scss";

import Input from "../forms/input";

import callArtistsFetch from "../../services/search-results";

import useArtists from "../../context/artists";

const SearchContainer = ({ classes, inputPlaceholder }) => {
  const [search, setSearch] = useState("");
  const [searchError, setSearchError] = useState(false);

  const { setArtists } = useArtists();

  const handleSubmit = async (e) => {
    e.preventDefault();
    !search ? setSearchError(true) : setSearchError(false);
    const res = await callArtistsFetch(search);
    const items = res.artists.items;
    setArtists(items);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    //    console.log(search)
  };

  return (
    <form
      className={`search-container ${classes}`}
      method="get"
      onSubmit={handleSubmit}
    >
      <Input
        name="search"
        type="text"
        onChange={handleChange}
        error={searchError}
        errorMessage="Ingrese algo para buscar!"
        classes="search-container--input"
        placeholder={inputPlaceholder}
      >
        <i className="fas fa-search "></i>
      </Input>
    </form>
  );
};

export default SearchContainer;
