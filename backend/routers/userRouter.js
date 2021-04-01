import express from "express";
import User from "../models/userModel.js";
import data from "../data.js";
import expressAsyncHandler from "express-async-handler";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // REMOVE NEXT LINE LATER TO NOT DELETE ALL USERS
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

export default userRouter;
