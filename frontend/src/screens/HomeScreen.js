import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";

export default function HomeScreen() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/articles/");
      setArticles(data);
    };

    console.log("AM I EVEN ALIVE");
    fetchData();
  }, []);

  return (
    <div>
      <header>
        {console.log(articles)}
        <ArticleCard article={articles[0]} />
      </header>
      <main>
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </main>
    </div>
  );
}
