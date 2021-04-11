import express from "express";
import Article from "../models/articleModel.js";
import expressAsyncHandler from "express-async-handler";
import slugify from "slugify";

const articleRouter = express.Router();

articleRouter.delete(
  "/",
  expressAsyncHandler(async (req, res) => {
    await Article.deleteMany({});

    res.send("Deleted");
  })
);

articleRouter.post(
  "/add",
  expressAsyncHandler(async (req, res) => {
    const {
      title,
      contentSerbian,
      contentFinnish,
      category,
    } = req.body.article;
    const slug = slugify(title);

    var existing = await Article.findOne({ slug: slug });
    if (existing) {
      res.status(500).send({ message: "Article title already exists" });
    } else {
      const newArticle = new Article({
        title,
        contentSerbian,
        contentFinnish,
        category,
        slug,
      });
      await newArticle.save((err, doc) => {
        if (err) console.log("ERROR!: " + err);
      });

      res.send({ data: newArticle });
    }
  })
);

articleRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const articles = await Article.find({});
    res.send(articles);
  })
);

articleRouter.get(
  "/:slug",
  expressAsyncHandler(async (req, res) => {
    const article = await Article.findOne({ slug: req.params.slug });
    if (article) {
      res.send(article);
    } else {
      res.status(404).send({ message: "Article Not Found" });
    }
  })
);

articleRouter.put(
  "/:slug",
  expressAsyncHandler(async (req, res) => {
    const article = await Article.findOne({ slug: req.params.slug });
    if (article) {
      article.title = req.body.title;
      article.contentSerbian = req.body.contentSerbian;
      article.contentFinnish = req.body.contentFinnish;
      article.categories = req.body.categories;
      article.titleImage = req.body.titleImage;
    } else {
      res.status(404).send({ message: "Article Not Found" });
    }
  })
);

export default articleRouter;
