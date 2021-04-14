import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    titleImage: { type: String, requred: true },
    titleImageAlt: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    contentSerbian: { type: String, required: true },
    contentFinnish: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", articleSchema);
export default Article;
