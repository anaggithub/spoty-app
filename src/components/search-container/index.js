import React, { useState } from "react";
import "./index.scss";

import Input from "../forms/input"
import Button from "../forms/button"

const SearchContainer = ({classes}) => {

    // const [isSearchInputOpen, setSearchInputOpen] = useState(false);
    // let ref = React.useRef();

    return (
        <form  className={`search-container ${classes}`}  className="search-container" method="get"
        // onSubmit={handleSubmit}
        >
            {/* <Button text="Enviar"
                classes="search-container--button button-icon"
                onClick={(e) => {
                    e.preventDefault();
                    // setSearchInputOpen(!isSearchInputOpen);
                }} >
              
            </Button> */}
            <Input name="search" type="text"
                // onChange={handleChange}
                // error={nameError}
                errorMessage="artista"
                className="search-container--input searchinput"
                placeholder="Ingrese su artista favorito">
                      <i className="fas fa-search "></i>

                {/* // style={{ display: isSearchInputOpen ? "block" : "none" }}  */}
            </Input>


        </form>
    );
}

export default SearchContainer