import React from "react";
import "./index.scss";

function Button({ classes, onClick, children }) {
    return (
        <div>
            <button className={`button ${classes}`} onClick={onClick}>
                {children}
            </button>
        </div>
    );
}

export default Button