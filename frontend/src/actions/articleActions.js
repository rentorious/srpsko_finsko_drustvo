import Axios from "axios";
import {
  ARTICLE_LIST_FAIL,
  ARTICLE_LIST_SUCCESS,
  ARTICLE_LIST_REQUEST,
  ARTICLE_DETAILS_FAIL,
  ARTICLE_DETAILS_SUCCESS,
  ARTICLE_DETAILS_REQUEST,
  CREATE_ARTICLE_FAIL,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_REQUEST,
} from "../constants/articleConstants";
import { parseTimestamp } from "../helpers.js";

export const listArticles = () => async (dispatch) => {
  dispatch({
    type: ARTICLE_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/articles/");
    for (let article of data) article.date = parseTimestamp(article.createdAt);
    dispatch({ type: ARTICLE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ARTICLE_LIST_FAIL, payload: error.message });
  }
};

export const detailsArticle = (slug) => async (dispatch) => {
  dispatch({ type: ARTICLE_DETAILS_REQUEST, payload: slug });
  try {
    const { data } = await Axios.get(`/api/articles/${slug}`);
    dispatch({ type: ARTICLE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ARTICLE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createArticle = (article) => async (dispatch) => {
  dispatch({ type: CREATE_ARTICLE_REQUEST });

  try {
    const { data } = await Axios.post("/api/articles/add", {
      article,
    });
    dispatch({ type: CREATE_ARTICLE_SUCCESS, payload: data.article });
  } catch (error) {
    dispatch({
      type: CREATE_ARTICLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
