import "./header.scss";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemingContext } from "../../shared/theming/theming.context";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import LanguageButton from "../../common-components/language-buton/language-button";
import NavToggle from "../../common-components/navbar-toggle/navbar-toggle";
import { LanguageContext } from "../../shared/language/language.context";
import NavUserButton from "../../common-components/nav-user-bottom/nav-user-button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [language, setLanguage] = useContext(LanguageContext);
  const [t, i18n] = useTranslation("header");
  const [theming] = useContext(ThemingContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
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
      <Container
        className="header-container"
        style={{
          fontFamily: "rubik-semibold",
          fontSize: "1rem",
          paddingTop: "0.3rem",
        }}
        fluid
      >
        <Col
          md={{ span: 2, offset: 1 }}
          lg={{ span: 2, offset: 1 }}
          xl={{ span: 2, offset: 1 }}
          xxl={{ span: 2, offset: 1 }}
        >
          <Navbar.Brand
            className="link"
            onClick={() => navigate("/")}
            style={{
              color: `${theming.font_color.color}`,
            }}
          >
            {/* The Best Battles/Be a Warrior */}W
            <FontAwesomeIcon icon={faCrosshairs}></FontAwesomeIcon>D TARGET
          </Navbar.Brand>
        </Col>
        <Col
          className="d-none d-lg-block"
          xs={{ span: 3, offset: 1 }}
          sm={{ span: 3, offset: 1 }}
          md={{ span: 3, offset: 1 }}
          lg={{ span: 3, offset: 1 }}
          xl={{ span: 3, offset: 1 }}
          xxl={{ span: 3, offset: 1 }}
        >
          <Nav className="header-links">
            <Nav.Link
              onClick={() => navigate("/events")}
              style={{ color: `${theming.font_color.color}` }}
              href=""
            >
              {t("header.eventos")}
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
          {token ? (
            <NavUserButton placement="end" name="end"></NavUserButton>
          ) : (
            <NavToggle></NavToggle>
          )}
          <LanguageButton
            onchangeLanguage={onchangeLanguage}
            language={language}
          ></LanguageButton>
        </Col>
      </Container>
    </Navbar>
  );
}

export default Header;
