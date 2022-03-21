import { ThemingContext } from "./theming.context";
import { useState } from "react";
import { theme } from "./theming.context";

function ThemingProvider({ children }) {
  const [theming, updateTheming] = useState(theme[0]); // L para light, D para dark

  return (
    <ThemingContext.Provider value={[theming, updateTheming]}>
      {children}
    </ThemingContext.Provider>
  );
}

export default ThemingProvider;
