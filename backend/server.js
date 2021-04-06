import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import articleRouter from "./routers/articleRouter.js";
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

app.use(express.json());

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
app.listen(5000, () => {
  console.log("Serve at hpp://localhost:5000");
});
