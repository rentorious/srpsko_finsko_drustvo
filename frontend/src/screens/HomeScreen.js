import React, { useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listArticles } from "../actions/articleActions";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.articleList);
  const { loading, error, articles } = articleList;

  useEffect(() => {
    dispatch(listArticles());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <header>
            {articles[0] && <ArticleCard article={articles[0]} />}
          </header>
          <main>
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </main>
        </div>
      )}
    </div>
  );
}
