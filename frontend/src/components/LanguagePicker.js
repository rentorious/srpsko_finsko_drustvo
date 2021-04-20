import React, { useContext } from "react";

import { LanguageContext } from "../containers/Language";

export default function LanguagePicker() {
  const { userLanguageChange } = useContext(LanguageContext);

  const handlePickSerbian = () => userLanguageChange("srb");
  const handlePickFinnish = () => userLanguageChange("fin");

  return (
    <div id="language">
      <div id="serbian" onClick={handlePickSerbian}>
        <img
          src="/img/srb_icon.png"
          alt="Serbian language button"
          className="responsive"
        />
      </div>

      <div id="finnish" onClick={handlePickFinnish}>
        <img
          src="/img/fin_icon.png"
          alt="Finnish language button"
          className="responsive"
        />
      </div>
    </div>
  );
}
