import React from "react";
import "./index.scss";

const Article = ({ firstArticleClass = "", title, description, content, author, image, onClick }) => {

    return (
        <article className={`article ${firstArticleClass}`} onClick={onClick}>
            <h3 className="article--title">
                {title.substring(0, 80)}
            </h3>
            <p className="article--description">{description}</p>
            <figure>
                <img
                    src={image}
                    alt="article "
                    className="article--image"
                />
            </figure>
            <p className="article--content">{content}</p>
            <button className="article--button button button-secondary"> {author || "Anonimo"}</button>
        </article>
    );
}

export default Article;
