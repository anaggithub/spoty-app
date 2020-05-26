import React from "react";
import "./index.scss";

function Input({ name, type, placeholder, onChange, error, errorMessage, classes, children }) {
    return (
        <div className={`input ${classes}`}>
            <div className="input--row input--row--main">
                <div className="input--row--chilchen">{children}</div>
                <input
                    className={`input--row--input ${error ? 'errorClass' : ""}`}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                >
                </input>
            </div>
            <div className="input--row">
                {error && <p className="input--row--error">{`${errorMessage}`}</p>}
            </div>
        </div>
    );
}

export default Input