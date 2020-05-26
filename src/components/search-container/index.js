import React, { useState } from "react";
import "./index.scss";
import Input from "../forms/input";
import { Redirect } from "react-router-dom";
import useSearchValue from "../../context/search-value";
import { UseSearchError, UseSearchErrorMessage } from "../../context/search-errors";

const SearchContainer = ({ classes, inputPlaceholder }) => {
  const [search, setSearch] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { searchError, setSearchError } = UseSearchError();
  const { searchErrorMessage, setSearchErrorMessage } = UseSearchErrorMessage();

  const { setSearchValue } = useSearchValue();

  const handleSubmit = async (e) => {
    setSearchError(false);
    setSearchErrorMessage("");
    e.preventDefault();
    let letters = /^[A-Za-z ]+$/;

    if (search.trim() === "") {
      setSearchErrorMessage("Ingrese un artista para buscar!!");
      setSearchError(true);
    } else if (!search.match(letters)) {
      setSearchErrorMessage("Solo se aceptan letras.");
      setSearchError(true);
    } else {
      setSearchValue(search);
      setRedirect(true);
      setSearchError(false);
      setSearchErrorMessage("");
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
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
