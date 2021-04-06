import Axios from "axios";
import {
  ARTICLE_LIST_FAIL,
  ARTICLE_LIST_SUCCESS,
  ARTICLE_LIST_REQUEST,
  ARTICLE_DETAILS_FAIL,
  ARTICLE_DETAILS_SUCCESS,
  ARTICLE_DETAILS_REQUEST,
} from "../constants/articleConstants";

export const listArticles = () => async (dispatch) => {
  dispatch({
    type: ARTICLE_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/articles/");
    console.log(data);
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
