import React, { useState, useEffect } from "react"
import "./index.scss";

import Layout from "../../components/layouts";
import SearchContainer from "../../components/search-container"
// import DollarRate from "../../components/dollar-rate";
// import Article from "../../components/article";

// import rates from "../../services/dollar-rate";
// import news from "../../services/news";

import { Link } from "react-router-dom"

//import useArticle from "../../context/article"

const Home = () => {

    // const [dollarRates, setDollarRates] = useState([]);
    // const [articles, setArticles] = useState([]);

    // const { updateArticle } = useArticle()

    // useEffect(() => {
    //     async function fetchData() {
    //         setDollarRates(rates())
    //         setArticles(await news())
    //     }
    //     fetchData()
    // }, [])

    return (
        <Layout>
            <section className="hero">
                <div className="hero--info">
                    <p>Welcome to</p>
                    <h1>SpotySearch</h1>
                    <p>Search your favourite songs over Spotify, just enter an artist's name in the following search box and enjoy</p>
                </div>
                <SearchContainer classes=" hero--search" />
            </section>
            {/* <section className="news">
                <div className="news--grid">
                    {articles.map(article =>
                        <Link to="/articledetail" key={article.title + 1}>
                            <Article
                                title={article.title}
                                author={article.author}
                                description={article.description}
                                image={article.urlToImage}
                                content={article.content}

                                onClick={e => {
                                    updateArticle(article)
                                }}
                            />
                        </Link>)
                    }
                </div>
            </section> */}
        </Layout>
    );
}

export default Home;
