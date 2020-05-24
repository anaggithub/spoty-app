import React from "react"
import "./index.scss"

const Footer = ({classes}) => {
  return (
    <footer className={`footer ${classes}`}>
      <p className="footer--info">
        Todos Los Derechos Reservados © 2020
      </p>
    </footer >
  );
}

export default Footer;
