import React from "react";

export default function Nav() {
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
    </div>
  );
}
