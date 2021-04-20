import React, { useState, createContext, useContext } from "react";

import { languageOptions, dictionaryList } from "../languages";

// create the language context with default selected language
export const LanguageContext = createContext({
  userLanguage: "srb",
  dictionary: dictionaryList.srb,
});

// it provides the language context to app
export function LanguageProvider({ children }) {
  const defaultLanguage = window.localStorage.getItem("rcml-lang");
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || "srb");

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : "srb";
      setUserLanguage(newLanguage);
      window.localStorage.setItem("rcml-lang", newLanguage);
      console.log(newLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}

// get text according to id & current language
export function Text({ tid }) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[tid] || tid;
}
