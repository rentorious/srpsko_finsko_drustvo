import React, { useState } from "react";
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
import { LanguageProvider } from "./containers/Language";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const [currentArticle, setCurrentArticle] = useState("");

  const clearCurrentArticle = () => {
    setCurrentArticle("");
  };

  return (
    <LanguageProvider>
      <BrowserRouter>
        {userInfo && userInfo.isAdmin && (
          <AdminSidebar currentArticle={currentArticle} />
        )}
        <LanguagePicker />
        <Nav />
        <Route path="/" component={HomeScreen} exact />
        <Route
          path="/articles/article/:slug"
          render={(props) => (
            <FullArticleScreen
              {...props}
              setCurrentArticle={setCurrentArticle}
              onLeave={clearCurrentArticle}
            />
          )}
          exact
        />
        <Route
          path="/articles/category/:category/"
          component={CategoryScreen}
        />
        <AdminRoute
          path="/articles/new"
          component={ArticleEditorScreen}
          exact
        />
        <AdminRoute
          path="/articles/edit/:slug/"
          component={ArticleEditorScreen}
        />
        <Route path="/signin" component={SigninScreen} />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
