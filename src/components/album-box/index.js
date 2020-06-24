import React from "react"
import "./index.scss"

const AlbumBox = ({ url, name, year, onClick }) => {
    return (
        <div className="album-box" onClick={onClick}>
            <img className="album-box--image" alt="album logo" src={url} />
            <div className="album-box--content">
                <h3 className="album-box--name">{name}</h3>
                <p className="album-box--year">{year}</p>
            </div>
        </div>
    );
};

export default AlbumBox