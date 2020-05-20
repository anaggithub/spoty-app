import React from "react"
import "./index.scss"
import APILogo from "../api-logo";

const Footer = ({classes}) => {
  return (
    <footer className={`footer ${classes}`}>
      <APILogo classes="footer--logo" />
      <p className="footer--info">
        Todos Los Derechos Reservados © 2020
      </p>
    </footer >
  );
}

export default Footer;
