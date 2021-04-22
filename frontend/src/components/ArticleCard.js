import React, { useContext, useMemo, useState } from "react";
import { LanguageContext } from "../containers/Language";

export default function ArticleCard(props) {
  const { article } = props;
  const { userLanguage } = useContext(LanguageContext);
  const [card, setCard] = useState({
    title: "",
    short: "",
    readMore: "",
  });

  useMemo(() => {
    if (userLanguage === "srb") {
      setCard((card) => ({
        ...card,
        title: article.title,
        short: article.contentSerbian,
        readMore: " ...detaljnije",
      }));
    } else {
      setCard((card) => ({
        ...card,
        title: article.titleFin,
        short: article.contentFinnish,
        readMore: " ...lue lisää",
      }));
    }
  }, [
    userLanguage,
    article.contentSerbian,
    article.title,
    article.titleFin,
    article.contentFinnish,
  ]);

  return (
    <div className="card">
      <div className="image">
        <a href={`/articles/article/${article.slug}`}>
          <img
            src={article.titleImage}
            alt={article.titleImageAlt}
            className="responsive"
          />
        </a>
      </div>
      <div className="description">
        <div className="date date-text">{article.date} </div>
        <h2>{card.title}</h2>
        <div className="short">
          {card.short}
          <a href={`/articles/article/${article.slug}`}>
            <span className="learnMore">{card.readMore}</span>
          </a>
        </div>
        <div className="footer">
          {/* TODO: ADD PRINT AND SHARE OPTIONS */}
          {/* <a href="/share">
            <i className="fas fa-share-alt"></i>
          </a>
          <a href="/print">
            <i className="fas fa-print"></i>
          </a> */}
          <a
            className="card-category"
            href={`/articles/category/${article.category}`}
          >
            {article.category}
          </a>
        </div>
      </div>
    </div>
  );
}
