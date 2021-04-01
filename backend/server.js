import express from "express";
import data from "./data.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/articles/:slug", (req, res) => {
  const article = data.articles.find((x) => x.slug === req.params.slug);
  if (article) {
    res.send(article);
  } else {
    res.status(404).send({ message: "Article Not Found" });
  }
});

app.get("/api/articles/", (req, res) => {
  res.send(data.articles);
});

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log("Serve at hpp://localhost:5000");
});
