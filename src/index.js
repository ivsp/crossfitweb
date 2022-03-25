import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemingProvider from "./shared/theming/theming.provider";
import i18next from "i18next";
import header_en from "./routes/i18n/translations/en/header.json";
import header_es from "./routes/i18n/translations/es/header.json";
import alerts_en from "./routes/i18n/translations/en/alerts.json";
import alerts_es from "./routes/i18n/translations/es/alerts.json";
import users_es from "./routes/i18n/translations/es/users.json";
import users_en from "./routes/i18n/translations/en/users.json";
import { I18nextProvider } from "react-i18next";
import LanguageProvider from "./shared/language/language.provider";
import UserProvider from "./shared/user-info/user.provider";
import EventProvider from "./shared/event-info/event.provider";

i18next.init({
  interpolation: { escapeValue: false },

  lng: "es",

  resources: {
    es: {
      header: header_es,
      alerts: alerts_es,
      users: users_es,
      //aqui incluyo cada uno de los archivos json que quiera incluir
    },
    en: {
      header: header_en,
      alerts: alerts_en,
      users: users_en,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <ThemingProvider>
        <LanguageProvider>
          <UserProvider>
            <EventProvider>
              <App />
            </EventProvider>
          </UserProvider>
        </LanguageProvider>
      </ThemingProvider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
