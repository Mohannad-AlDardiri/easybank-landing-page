import React from "react";
import ArticlesObg from "./Articlesobj";

const ArticlesCards = () => {
  return ArticlesObg.map((el) => {
    return (
      <div className="article">
        <div >
          <img src={el.img} alt={el.imgAlt} className="article-img"/>
        </div>
        <div className="article-text">
          <h4 className="article-auther">By {el.auther}</h4>
          <h3 className="article-heading">{el.title}</h3>
          <p className="article-parg">{el.parg}</p>
        </div>
      </div>
    );
  });
};

export default ArticlesCards;
