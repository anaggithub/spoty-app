import React, { Children } from "react";
import "./index.scss";

function Input({ name, type, placeholder, onChange, error, errorMessage, children}) {
    return (
        <div className="input">
            <div className={`input--row ${error ? 'errorClass' : ""}`}>
                {children}
                <input
                    className="input--row--input"
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                >
                </input>
            </div>
            <div className="input--row">
                {error && <p className="input--row--error">{`Ingrese un ${errorMessage} válido!`}</p>}
            </div>
        </div>
    );
}

export default Input