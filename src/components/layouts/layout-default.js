import React from "react"
import "./styles/general-styles.scss"
import "./styles/layout-default.scss"
import Header from "../header";
import Footer from "../footer";

const DefaultLayout = ({children}) => {

    return (
        <div className="default-layout container">
            <Header />
            <div className="default-layout--content">
                {children}
            </div>
            <Footer classes="default-layout--footer" />
        </div>
    );
}

export default DefaultLayout;
