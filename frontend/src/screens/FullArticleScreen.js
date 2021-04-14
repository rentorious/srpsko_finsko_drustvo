import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsArticle } from "../actions/articleActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function FullArticleScreen(props) {
  const dispatch = useDispatch();
  const slug = props.match.params.slug;
  const articleDetails = useSelector((state) => state.articleDetails);
  const { loading, error, article } = articleDetails;
  const { setCurrentArticle } = props;

  useEffect(() => {
    setCurrentArticle(slug);
  }, [article, slug, setCurrentArticle]);

  useEffect(() => {
    dispatch(detailsArticle(slug));
  }, [dispatch, slug]);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <header>
            <div className="card detail-header">
              <div className="image">
                <img
                  src={article.titleImage}
                  // src="/img/1.jpg"
                  alt={article.titleImageAlt}
                  className="responsive"
                />
              </div>
              <div className="description">
                <div className="date-text">{article.date}</div>
                <h1>{article.title}</h1>

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
          </header>
          <main
            className="detail"
            dangerouslySetInnerHTML={{ __html: article.contentSerbian }}
          ></main>
        </div>
      )}
    </div>
  );
}
