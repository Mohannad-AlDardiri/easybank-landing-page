import React from "react";
import ArticlesCards from './ArticlesCards'
const Articles = () => {
  return (
    //   the alt in the adavantages
    <div className="articles-container">
      <h2>Latest Articles</h2>
      <div className="articlesCards-container">
      <ArticlesCards/>
      </div>
    </div>
  );
};

export default Articles;
