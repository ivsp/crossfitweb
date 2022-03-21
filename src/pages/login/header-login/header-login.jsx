import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemingContext } from "../../../shared/theming/theming.context";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import LanguageButton from "../../../common-components/language-buton/language-button";

function HeaderLogIn() {
  const [language, setLanguage] = useState("");
  const [t, i18n] = useTranslation("header");
  const [theming] = useContext(ThemingContext);
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
  return (
    <Navbar bg={`${theming.primary.color}`} expand="none">
      <Container fluid>
        <Col
          md={{ span: 2, offset: 1 }}
          lg={{ span: 2, offset: 1 }}
          xl={{ span: 2, offset: 1 }}
          xxl={{ span: 2, offset: 1 }}
        >
          <Navbar.Brand
            style={{ color: `${theming.font_color.color}` }}
            href="#home"
          >
            {/* The Best Battles/Be a Warrior */}
            LOGO+NAME
          </Navbar.Brand>
        </Col>
        <Col
          md={{ span: 3, offset: 1 }}
          lg={{ span: 3, offset: 1 }}
          xl={{ span: 3, offset: 1 }}
          xxl={{ span: 3, offset: 1 }}
        >
          <Nav className="header-links">
            <Nav.Link style={{ color: `${theming.font_color.color}` }} href="">
              {t("header.eventos")}
            </Nav.Link>
            <Nav.Link style={{ color: `${theming.font_color.color}` }} href="">
              {t("header.entrenamientos")}
            </Nav.Link>
          </Nav>
        </Col>
        <Col
          md={{ span: 3, offset: 0 }}
          lg={{ span: 3, offset: 0 }}
          xl={{ span: 3, offset: 0 }}
          xxl={{ span: 3, offset: 0 }}
          className="header-buttons justify-content-center"
        >
          <LanguageButton
            onchangeLanguage={onchangeLanguage}
            language={language}
          ></LanguageButton>
        </Col>
      </Container>
    </Navbar>
  );
}

export default HeaderLogIn;
