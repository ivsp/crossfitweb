/*
* 1. Crear el contexto para el theming (ThemingContext)
* 2. Crear el componente provider (ThemingProvider)
* 3. Utilizar el theming provider, en este caso, en el index.js envolviendo al App.js
     Esto lo hago cuando quiero que el App.js utilice el useContext
  4. Crear las variables JS que tengan los valores CSS del theming (lo que va a cambiar cuando el theming cambie)
     (estos son en este caso lightTheme y darkTheme)
  5. Crear la función de generación y actualización de las variables CSS en el body, 
     en función del theming actual (updateThemingCssVariables y updateCurrentTheming del archivo theming.provider.jsx)
  
  6. Crear el componente de actualización del Theming (ThemingSelector)
  7. En los componentes de la página, utilizar en sus CSS las CSS Variables del theming en lugar 
     de valores fijos
*
*/

// Creo un array con 2 posiciones, que tendrán los valores para cada tipo de tema
// [0] --> para ligth
// [1] --> para dark
import { createContext } from "react";

export const theme = [
  {
    primary: {
      color: "primary",
      code: "#333333 ",
    },
    secondary: {
      color: "secondary",
      code: "#FFFFFF ",
    },
    strong_details: {
      color: "strong-details",
      code: "#F8E71C ",
    },
    soft_details: {
      color: "soft-details",
      code: "#CCB300 ",
    },
    neutral_100: {
      color: "neutral-100",
      code: "#CCCCCC ",
    },
    neutral_200: {
      color: "neutral-200",
      code: "#999999 ",
    },
    neutral_300: {
      color: "neutral-300",
      code: "#696969 ",
    },
    typography: {
      color: "black",
    },
    font_color: {
      color: "#FFFFFF",
    },
    bg: {
      color: "#FFFFFF",
    },
  },
  {
    primary: {
      color: "neutral-700",
    },
    secondary: {
      color: "neutral-100",
    },
    typography: {
      color: "red",
    },
  },
];

export const ThemingContext = createContext();
