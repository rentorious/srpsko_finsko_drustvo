import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import FullArticleScreen from "./screens/FullArticleScreen";
import ArticleEditorScreen from "./screens/ArticleEditorScreen";
import SigninScreen from "./screens/SigninScreen";
import AdminSidebar from "./components/AdminSidebar";
import { useSelector } from "react-redux";
import AdminRoute from "./components/AdminRoute";
import Nav from "./components/Nav";
import LanguagePicker from "./components/LanguagePicker";
import CategoryScreen from "./screens/CategoryScreen";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <BrowserRouter>
      {userInfo && userInfo.isAdmin && <AdminSidebar />}
      <LanguagePicker />
      <Nav />
      <Route path="/" component={HomeScreen} exact />
      <Route path="/articles/:slug/" component={FullArticleScreen} exact />
      <Route path="/articles/category/:category/" component={CategoryScreen} />
      <AdminRoute path="/new-article" component={ArticleEditorScreen} />
      <Route path="/signin" component={SigninScreen} />
    </BrowserRouter>
  );
}

export default App;
