import React, { useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import LoadingBox from "../components/LoadingBox";
import { useDispatch, useSelector } from "react-redux";
import { listCategory } from "../actions/articleActions";

export default function CategoryScreen(props) {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, articles } = categoryList;

  useEffect(() => {
    dispatch(listCategory(props.match.params.category));
  }, [dispatch, props.match.params.category]);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : (
        <div>
          {/* <h1 className="category-heading">
            <small>Kategorija: </small>
            <span className="category-name">
              {" "}
              {props.match.params.category}{" "}
            </span>
          </h1> */}
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
