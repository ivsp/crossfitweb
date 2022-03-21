import "./header.scss";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ThemingContext } from "../../shared/theming/theming.context";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import LanguageButton from "../../common-components/language-buton/language-button";
import NavToggle from "../../common-components/navbar-toggle/navbar-toggle";
import { LanguageContext } from "../../shared/language/language.context";
import NavUserButton from "../../common-components/user-drop-down/nav-user-button";
import { UserContext } from "../../shared/user-info/user.context";
import { getUserData } from "../../APP/fetch/fetch-functions";

function Header() {
  const [language, setLanguage] = useContext(LanguageContext);
  const [userData, setUserData] = useContext(UserContext);
  const [t, i18n] = useTranslation("header");
  const [theming] = useContext(ThemingContext);
  //setUserLogged(localStorage.getItem("logged"));
  const token = localStorage.getItem("token");
  useEffect(() => {
    //obtengo el token del session

    //hacer un get para tener los datos del usuario
    async function fetchData(token) {
      const userdata = await getUserData(token);
      setUserData(userdata);
    }
    fetchData(token);
  }, []);

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
          fontFamily: "indiana",
          fontSize: "1rem",
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
            style={{
              color: `${theming.font_color.color}`,
            }}
            href=""
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
          {token ? (
            <NavUserButton placement="end" name="end"></NavUserButton>
          ) : (
            <NavToggle></NavToggle>
          )}
        </Col>
      </Container>
    </Navbar>
  );
}

export default Header;