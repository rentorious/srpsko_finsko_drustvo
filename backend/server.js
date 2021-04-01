import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import userRouter from "./routers/userRouter.js";

const app = express();
mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost/srpsko_finsko_drustvo",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use("/api/users", userRouter);

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

// error catcher
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log("Serve at hpp://localhost:5000");
});
