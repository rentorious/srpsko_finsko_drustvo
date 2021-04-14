const {
  ARTICLE_LIST_REQUEST,
  ARTICLE_LIST_SUCCESS,
  ARTICLE_LIST_FAIL,
  ARTICLE_DETAILS_REQUEST,
  ARTICLE_DETAILS_SUCCESS,
  ARTICLE_DETAILS_FAIL,
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
  UPDATE_ARTICLE_REQUEST,
  UPDATE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_FAIL,
} = require("../constants/articleConstants");

export const articleListReducer = (
  state = { loading: true, articles: [] },
  action
) => {
  switch (action.type) {
    case ARTICLE_LIST_REQUEST:
      return { loading: true };
    case ARTICLE_LIST_SUCCESS:
      return { loading: false, articles: action.payload };
    case ARTICLE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const categoryListReducer = (
  state = { loading: true, articles: [] },
  action
) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: true, error: undefined };
    case CATEGORY_LIST_SUCCESS:
      return { loading: false, articles: action.payload, error: undefined };
    case CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const articleDetailsReducer = (
  state = { article: {}, loading: true },
  action
) => {
  switch (action.type) {
    case ARTICLE_DETAILS_REQUEST:
      return { loading: true };
    case ARTICLE_DETAILS_SUCCESS:
      return { loading: false, article: action.payload };
    case ARTICLE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const articleCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ARTICLE_REQUEST:
      return { loading: true };
    case CREATE_ARTICLE_SUCCESS:
      return { loading: false, success: true, article: action.payload };
    case CREATE_ARTICLE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const articleUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ARTICLE_REQUEST:
      return { loading: true };
    case UPDATE_ARTICLE_SUCCESS:
      return { loading: false, success: true, article: action.payload };
    case UPDATE_ARTICLE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
