import React from "react";
import { stripHtml } from "string-strip-html";

export default function ArticleCard(props) {
  const { article } = props;
  return (
    <div className="card">
      <div className="image">
        <a href={`/articles/${article.slug}`}>
          <img src="/img/1.jpg" alt={article.alt} className="responsive" />
        </a>
      </div>
      <div className="description">
        <div className="date date-text">{article.date} </div>
        <h2>{article.title}</h2>
        <div className="short">
          {stripHtml(article.contentSerbian).result.substring(0, 100)}
          {/* {article.contentSerbian.substring(0, 100)} */}
          <a className="card-category" href={`/articles/${article.slug}`}>
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
          <a className="card-category" href={`articles/${article.category}`}>
            {article.category}
          </a>
        </div>
      </div>
    </div>
  );
}
