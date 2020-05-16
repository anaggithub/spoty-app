import React from "react";
import "./index.scss";

function APILogo({classes}) {
    return (
        <div className={` ${classes}`}>
            <img className="logo" src={process.env.PUBLIC_URL + '/images/spotify-logo.png'}></img>
        </div>
    );
}

export default APILogo