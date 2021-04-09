import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import FullArticleScreen from "./screens/FullArticleScreen";
import ArticleEditorScreen from "./screens/ArticleEditorScreen";
import SigninScreen from "./screens/SigninScreen";

function App() {
  return (
    <BrowserRouter>
      <div id="language">
        <div id="serbian">
          <img
            src="/img/srb_icon.png"
            alt="Serbian language button"
            className="responsive"
          />
        </div>
        <div id="finnish">
          <img
            src="/img/fin_icon.png"
            alt="Finnish language button"
            className="responsive"
          />
        </div>
      </div>
      <nav>
        <div id="brand">
          <a href="/">
            <img
              className="responsive"
              src="/img/banner.png"
              alt="logo srpsko finskog drustva"
            />
          </a>
        </div>
        <div className="navigation">
          <a href="/" className="navItem active">
            Naslovna
          </a>
          <a href="/about" className="navItem">
            O nama
          </a>
          <a href="/postanite-clan" className="navItem">
            Postanite član
          </a>
          <a href="/pisite-nam" className="navItem">
            Pišite nam
          </a>
          <div className="toggle">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
      <Route path="/" component={HomeScreen} exact />
      <Route path="/articles/:slug/" component={FullArticleScreen} />
      <Route path="/new-article" component={ArticleEditorScreen} />
      <Route path="/signin" component={SigninScreen} />
    </BrowserRouter>
  );
}

export default App;
