import React, { useState, useEffect } from "react";
import "./index.scss";

import Input from "../forms/input";

import callFetch from "../../services/search-results";

import useArtists from "../../context/artists"


const SearchContainer = ({ classes, inputPlaceholder }) => {

  const [search, setSearch] = useState("");
  const [searchError, setSearchError] = useState(false);
  
   const { setArtists } = useArtists()



  const handleChange = (e) => {
    setSearch(e.target.value);
//    console.log(search)
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    !search ? setSearchError(true) : setSearchError(false);
    // console.log(searchError);
    //console.log(search);
    setArtists(await callFetch(search));
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     setArtists(await callFetch(search));
  //   //  updateArticle(article)
  //   }
  //   fetchData();
  // }, []);


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
