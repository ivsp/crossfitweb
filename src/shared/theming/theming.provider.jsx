import { ThemingContext, darkTheme, lightTheme } from "./theming.context";
import { useState } from "react";

// se encarga de actualizar los valores de las Custom Properties
// en funcion de el objeto que entre
const updateThemingCssVariables = (theme) => {
  document.body.style.setProperty("--color-primary", theme.primary.color);
  document.body.style.setProperty("--color-secondary", theme.secondary.color);
  document.body.style.setProperty("--color-typography", theme.typography.color);
};

// function que actualiza las CSS variables del theming en el body
const updateCurrentTheming = (currentTheming) => {
  switch (currentTheming) {
    case "L":
      updateThemingCssVariables(lightTheme);
      break;
    case "D":
      updateThemingCssVariables(darkTheme);
      break;
    default:
      updateThemingCssVariables(lightTheme);
  }
};

function ThemingProvider({ children }) {
  const [theming, updateTheming] = useState("L"); // L para light, D para dark

  updateCurrentTheming(theming);

  return (
    <ThemingContext.Provider value={[theming, updateTheming]}>
      {children}
    </ThemingContext.Provider>
  );
}

export default ThemingProvider;
