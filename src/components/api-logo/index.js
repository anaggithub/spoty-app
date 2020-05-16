import React from "react";
import "./index.scss";

function APILogo() {
    return (
        <img className="logo" src={process.env.PUBLIC_URL + '/images/spotify-logo.png'}></img>
    );
}

export default APILogo