import jwt from "jsonwebtoken";
import { stripHtml } from "string-strip-html";

export const languageOptions = {
  srb: "srp",
  fin: "fin",
};

export const CARD_SHORT_LIMIT = 110;

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      username: user.username,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "somethingsecret",
    {
      expiresIn: "90m",
    }
  );
};

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // BEARER XXXXX
    jwt.verify(
      token,
      process.env.JWT_SECRET || "somethingsecret",
      (err, decode) => {
        if (err) {
          res.status(401).send({ message: "Invalid Token" });
        } else {
          req.user = decode;
          next();
        }
      }
    );
  } else {
    res.status(401).send({ message: "No Token" });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: "Invalid Admin Token" });
  }
};

export const trimArticlesForCards = (articles) => {
  for (let article of articles) {
    article.contentSerbian = stripHtml(article.contentSerbian).result.substring(
      0,
      CARD_SHORT_LIMIT
    );
    article.contentFinnish = stripHtml(article.contentFinnish).result.substring(
      0,
      CARD_SHORT_LIMIT
    );
  }

  return articles;
};
