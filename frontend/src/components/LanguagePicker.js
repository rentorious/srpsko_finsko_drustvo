import React from "react";

export default function LanguagePicker() {
  return (
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
  );
}
