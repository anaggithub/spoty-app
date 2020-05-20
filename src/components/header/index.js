import React from "react";
import "./index.scss";
import APILogo from "../api-logo";
import SearchContainer from "../search-container";
import { Link } from "react-router-dom";

const Header = () => {
  const handleClick = () => {
    const search = document.getElementsByClassName("header--search");
    search[0].classList.contains("active")
      ? search[0].classList.remove("active")
      : search[0].classList.add("active");
  };

  return (
    <header className="header">
      <nav className="header--nav container">
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

export default Header;

//   const handleMenu = () => {
//   let menuCollection = document.getElementsByClassName('header--nav--list')
// //  console.log(menuCollection)
//   if (menuCollection[0].style.display === "block") {
//     menuCollection[0].style.display = "none";
//   }
//   else {
//     menuCollection[0].style.display = "block";
//   }
// }

// return (
//     <header className="header">
//       <APILogo />
//       <nav className="header--nav" >
//         <i className="header--nav--icon fas fa-bars" onClick={handleMenu}></i>
//         <ul className="header--nav--list">
//           <li className="header--nav--list--item">
//             <Link to="/"> <i className="fas fa-home"></i>Inicio</Link>
//           </li>
//           <li className="header--nav--list--item">
//             <Link to="/contact">Contacto</Link>
//           </li>
//           <li className="header--nav--list--item">
//             <Link to="/about">Acerca de </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
