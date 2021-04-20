import React, { useContext } from "react";
import { LanguageContext } from "../containers/Language";

export default function Nav() {
  const { dictionary } = useContext(LanguageContext);

  return (
    <div>
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
            {dictionary.nav.home}
          </a>
          <a href="/about" className="navItem">
            {dictionary.nav.about}
          </a>
          <a href="/postanite-clan" className="navItem">
            {dictionary.nav.joinUs}
          </a>
          <a href="/pisite-nam" className="navItem">
            {dictionary.nav.contact}
          </a>
          <div className="toggle">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
