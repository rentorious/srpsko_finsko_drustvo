import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { articleListReducer } from "./reducers/articleReducers";

const initialState = {};
const reducer = combineReducers({
  articleList: articleListReducer,
});
const composeEnhancer = window.___REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
