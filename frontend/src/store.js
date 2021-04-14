import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  articleListReducer,
  articleDetailsReducer,
  articleCreateReducer,
  categoryListReducer,
} from "./reducers/articleReducers";
import { userSigninReducer } from "./reducers/userReducers";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};
const reducer = combineReducers({
  articleList: articleListReducer,
  categoryList: categoryListReducer,
  articleDetails: articleDetailsReducer,
  articleCreate: articleCreateReducer,
  userSignin: userSigninReducer,
});
const composeEnhancer = window.___REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
