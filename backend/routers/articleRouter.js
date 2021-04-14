import express from "express";
import Article from "../models/articleModel.js";
import expressAsyncHandler from "express-async-handler";
import slugify from "slugify";
import { isAuth, isAdmin } from "../utils.js";

const articleRouter = express.Router();

articleRouter.delete(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    await Article.deleteMany({});

    res.send("Deleted");
  })
);

articleRouter.get(
  "/category/:category",
  expressAsyncHandler(async (req, res) => {
    const articles = await Article.find({ category: req.params.category });
    res.send(articles);
  })
);

articleRouter.post(
  "/add",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const {
      title,
      contentSerbian,
      contentFinnish,
      category,
      titleImage,
    } = req.body.article;
    const slug = slugify(title);
    const titleImageAlt = `${title} ${category} title image.`;

    var existing = await Article.findOne({ slug: slug });
    if (existing) {
      res.status(500).send({ message: "Article title already exists" });
    } else {
      const newArticle = new Article({
        title,
        titleImage,
        titleImageAlt,
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
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const article = await Article.findOne({ slug: req.params.slug });
    const newArticle = req.body.article;
    if (article) {
      article.title = newArticle.title;
      // TODO: Remove previous image
      article.titleImage = newArticle.titleImage;
      article.titleImageAlt = `${newArticle.title} ${newArticle.category} title image.`;
      // NOTE: Should I change the slug as well
      article.contentSerbian = newArticle.contentSerbian;
      article.contentFinnish = newArticle.contentFinnish;
      article.category = newArticle.category;
      try {
        const updatedArticle = await article.save();
        res.send({ message: "Article Updated", article: updatedArticle });
      } catch (error) {
        res.status(500).send({ message: error });
        // console.log(error);
      }
    } else {
      res.status(404).send({ message: "Article Not Found" });
    }
  })
);

export default articleRouter;
