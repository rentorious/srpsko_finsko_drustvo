import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import articleRouter from "./routers/articleRouter.js";
import userRouter from "./routers/userRouter.js";

dotenv.config();

const app = express();
mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost/srpsko_finsko_drustvo",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use("/api/users", userRouter);
app.use("/api/articles", articleRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// error catcher
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Serve at hpp://localhost:5000");
});
