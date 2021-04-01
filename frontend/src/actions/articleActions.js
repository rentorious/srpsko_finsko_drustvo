import Axios from "axios";
import {
  ARTICLE_LIST_FAIL,
  ARTICLE_LIST_SUCCESS,
  ARTICLE_LIST_REQUEST,
} from "../constants/articleConstants";

export const listArticles = () => async (dispatch) => {
  dispatch({
    type: ARTICLE_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/articles/");
    dispatch({ type: ARTICLE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ARTICLE_LIST_FAIL, payload: error.message });
  }
};
