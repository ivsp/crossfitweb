import { LanguageContext } from "./language.context";
import { useState } from "react";

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ES"); // L para light, D para dark

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
