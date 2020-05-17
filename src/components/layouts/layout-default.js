import React from "react"
import "./styles/general-styles.scss"
import "./styles/layout-default.scss"
import Header from "../header";
import Footer from "../footer";

const DefaultLayout = ({children, showSearch}) => {

    return (
        <div className="default-layout container">
            <Header showSearch = {showSearch}/>
            <div className="default-layout--content">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
