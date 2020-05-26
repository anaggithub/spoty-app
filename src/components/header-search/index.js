import React from "react";
import "./index.scss";
import APILogo from "../api-logo";
import SearchContainer from "../search-container";
import { Link } from "react-router-dom";

const HeaderWithSearch = () => {
  const handleClick = () => {
    const search = document.getElementsByClassName("header--search");
    search[0].classList.contains("active")
      ? search[0].classList.remove("active")
      : search[0].classList.add("active");
  };
  return (
    <header className="header">
      <nav className="header--nav container">
        <div className="header--invisiblediv"></div>
        <Link to="/home/">
          <APILogo className="header--logo" />
        </Link>
        <div className="header--icon" onClick={handleClick}>
          <i className="fas fa-search "></i>
        </div>
      </nav>
      <SearchContainer
        classes="header--search"
        inputPlaceholder="Type the name of your favourite artist"
      ></SearchContainer>
    </header>
  );
 };

export default HeaderWithSearch;

