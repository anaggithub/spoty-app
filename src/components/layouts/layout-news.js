import React from "react"
import "./styles/general-styles.scss";
import "./styles/layout-news.scss";
import Header from "../header";
import Footer from "../footer";
import Weather from "../weather";

const LayoutNews = ({ children }) => {

    return (
        <div className="aside-layout container">
            <Header />
            <div className="aside-layout--content">
                <section className="aside-layout--content--main">{children}</section>
                <aside className="aside-layout--content--aside">
                    <Weather />
                </aside>
            </div>
            <Footer />
        </div>
    );
}

export default LayoutNews;
