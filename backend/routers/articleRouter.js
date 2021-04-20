import express from "express";
import Article from "../models/articleModel.js";
import expressAsyncHandler from "express-async-handler";
import slugify from "slugify";
import fs from "fs";
import { promisify } from "util";

import { isAuth, isAdmin, trimArticlesForCards } from "../utils.js";

const articleRouter = express.Router();
const unlinkAsync = promisify(fs.unlink);

// DELETE ALL ARTICLES
articleRouter.delete(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    await Article.deleteMany({});

    res.send("Deleted");
  })
);

// ALL ARTICLES OF A CATRGORY
articleRouter.get(
  "/category/:category",
  expressAsyncHandler(async (req, res) => {
    const articles = await Article.find({ category: req.params.category });
    res.send(articles);
  })
);

// CREATE NEW ARTICLE
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
      titleFin,
    } = req.body.article;
    const slug = slugify(title);
    const titleImageAlt = `${title} ${category} title image.`;

    var existing = await Article.findOne({ slug: slug });
    if (existing) {
      res.status(500).send({ message: "Article title already exists" });
    } else {
      const newArticle = new Article({
        title,
        titleFin,
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

// GET ALL ARTICLE CARD DATA
articleRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    try {
      const articles = await Article.find({}).sort({ createdAt: "desc" });
      const cardData = trimArticlesForCards(articles);
      res.send(cardData);
    } catch (err) {
      console.log(err);
      res.status(500).send({ err });
    }
  })
);

articleRouter.get(
  "/:slug/",
  expressAsyncHandler(async (req, res) => {
    const article = await Article.findOne({ slug: req.params.slug });
    console.log(article);
    if (article) {
      res.send(article);
      res.status(404).send({ message: "Article Not Found" });
    } else {
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
      article.titleFin = newArticle.titleFin;
      // TODO: Remove previous image
      // await unlinkAsync(article.titleImage);
      article.titleImage = newArticle.titleImage;
      article.titleImageAlt = `${newArticle.title} ${newArticle.category} title image.`;
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
