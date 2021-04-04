import express from "express";
import Article from "../models/articleModel.js";
import expressAsyncHandler from "express-async-handler";
import slugify from "slugify";

const articleRouter = express.Router();

articleRouter.post(
  "/add",
  expressAsyncHandler(async (req, res) => {
    const { title, contentSerbian, contentFinnish, category } = req.body;
    const slug = slugify(title);

    console.log(slug);

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

    res.send({ articles });
  })
);

export default articleRouter;
