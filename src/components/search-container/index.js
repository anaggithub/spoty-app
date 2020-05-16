import React, {useState} from "react";
import "./index.scss";

import Input from "../forms/input"


const SearchContainer = ({ classes }) => {

    const [search, setSearch] = useState("")
    const [searchError, setSearchError] = useState(false)

    const handleChange = e => {
        console.log(search)
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        !search ? setSearchError(true) : setSearchError(false)
        console.log(searchError)
    }

    return (
        <form className={`search-container ${classes}`} method="get" onSubmit={handleSubmit}>
            <Input name="search" type="text"
                onChange={handleChange}
                error={searchError}
                errorMessage="Ingrese algo para buscar!"
                classes="search-container--input"
                placeholder="Ingrese su artista favorito">
                <i className="fas fa-search "></i>
            </Input>
        </form>
    );
}

export default SearchContainer