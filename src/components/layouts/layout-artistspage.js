import React from "react"
import "./styles/general-styles.scss"
import "./styles/layout-default.scss"
import "./styles/layout-artists.scss"
import HeaderWithSearch from "../header-search";
import Footer from "../footer";

const LayoutCaca = ({ children }) => {

    return (
        <div className="default-layout layout-artists container">
            <HeaderWithSearch />
            <div className="default-layout--content">
                {children}
            </div>
            <Footer classes="default-layout--footer" />
        </div>
    );
}

export default LayoutCaca;
