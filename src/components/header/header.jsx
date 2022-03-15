import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ThemingSelector from "../../shared/theming/theming-selector/theming-selector";
import "./header.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const [language, setLanguage] = useState("");
  const [t, i18n] = useTranslation("header");
  const onchangeLanguage = (e) => {
    console.log(e.target.id);
    if (e.target.id === "EN") {
      setLanguage("EN");
      i18n.changeLanguage("en");
    } else {
      setLanguage("ES");
      i18n.changeLanguage("es");
    }
  };

  /**
 * const [t, i18n] = useTranslation("header")
    const [h, setH] = useTranslation("home")
    const [reg, setReg] = useTranslation("registerLogin")

    const handleChange = e => {
        if (e.target.value === 'en') {
            i18n.changeLanguage("en") // change language viene de la libreria, se usa para cambiar el idioma segun hayas puesto en el index.js
            setH.changeLanguage("en")
            setReg.changeLanguage("en")
            updateFlag(KY)
            
        } else if (e.target.value === 'es') {
            i18n.changeLanguage("es")
            setH.changeLanguage("es")
            setReg.changeLanguage("es")
            updateFlag(ES)
        }
    }

 */

  return (
    <header className="header__container">
      <h1>My Awsome Themming</h1>
      <ThemingSelector></ThemingSelector>

      <DropdownButton
        variant="primary-400"
        as={ButtonGroup}
        title={language === "" ? `Lang` : `${language}`}
        id="bg-vertical-dropdown-3"
      >
        <Dropdown.Item
          onClick={onchangeLanguage}
          variant="primary-500"
          eventKey="1"
          id="EN"
        >
          EN
        </Dropdown.Item>
        <Dropdown.Item
          onClick={onchangeLanguage}
          variant="primary-500"
          eventKey="2"
          id="ES"
        >
          ES
        </Dropdown.Item>
      </DropdownButton>
      <p>{t("header.saludo")}</p>
    </header>
  );
}

export default Header;
