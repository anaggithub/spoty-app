import React from "react";
import "./index.scss";
import APILogo from "../api-logo";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="header">
      <Link to="/home/">
        <APILogo className="header--logo" />
      </Link>
    </header>
  );
};

export default Header;

