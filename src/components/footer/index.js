import React from "react"
import "./index.scss"
import APILogo from "../api-logo";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer--socialmedia">
        <li>
          <i className="footer--socialmedia--icon fab fa-facebook-f"></i>
        </li>
        <li>
          <i className="footer--socialmedia--icon fab fa-twitter"></i>
        </li>
        <li>
          <i className="footer--socialmedia--icon fab fa-instagram"></i>
        </li>
        <li>
          <i className="footer--socialmedia--icon fab fa-youtube"></i>
        </li>
      </ul>
      <div className="footer--info">
        <APILogo className="footer--info--apititle"/> 
        <p className="footer--info--paragraph">
          Todos Los Derechos Reservados © 2020 
        </p>
      </div>
    </footer>
  );
}

export default Footer;
