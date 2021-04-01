import React from "react";

export default function ArticleCard(props) {
  const { article } = props;
  return (
    <div className="card">
      <div className="image">
        <a href={`/articles/${article.slug}`}>
          <img src={article.image} alt={article.alt} className="responsive" />
        </a>
      </div>
      <div className="description">
        <div className="date date-text">{article.date} </div>
        <h2>{article.title}</h2>
        <div className="short">
          {article.description}
          <a href={`/articles/${article.slug}`}>
            <span className="learnMore">...detaljnije</span>
          </a>
        </div>
        <div className="footer">
          <a href="/share">
            <i className="fas fa-share-alt"></i>
          </a>
          <a href="/print">
            <i className="fas fa-print"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
