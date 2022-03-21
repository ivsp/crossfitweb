import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import React from "react";
import { useTranslation } from "react-i18next";
import { useState, useContext } from "react";
import RegisterCenteredModal from "../register-centered-modal/register-centered-modal";
import LogInCenteredModal from "../login-centered-modal/login-centered-modal";
import { ThemingContext } from "../../shared/theming/theming.context";

function NavToggle() {
  const [t] = useTranslation("header");
  const [modalRegisterShow, setModalRegisterShow] = useState(false);
  const [modalLoginShow, setModalLoginShow] = useState(false);

  const [theming] = useContext(ThemingContext);

  return (
    <React.Fragment>
      <Navbar className="navbar__container p-0" expand="none">
        <Container className="d-flex aling-items-center">
          <Navbar.Toggle
            style={{
              backgroundColor: "white",
              borderColor: "none",
              fontSize: "1rem",
            }}
            aria-controls="basic-navbar-nav p-0"
          />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav
              className="me-auto collapse__container"
              style={{
                position: "absolute",
                top: "3rem",
                zIndex: "1",
                right: "0.5rem",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              <Button
                id="btn1"
                className="nav_button"
                variant={`${theming.secondary.color}`}
                onClick={() => setModalRegisterShow(true)}
                style={{
                  borderColor: "none",
                }}
              >
                {t("header.registrate")}
              </Button>
              <Button
                id="btn2"
                className="nav_button"
                variant={`${theming.secondary.color}`}
                onClick={() => setModalLoginShow(true)}
                style={{
                  borderColor: "none",
                }}
              >
                {t("header.iniciaSesion")}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <RegisterCenteredModal
        show={modalRegisterShow}
        onHide={() => setModalRegisterShow(false)}
      ></RegisterCenteredModal>
      <LogInCenteredModal
        show={modalLoginShow}
        onHide={() => setModalLoginShow(false)}
      ></LogInCenteredModal>
    </React.Fragment>
  );
}

export default NavToggle;
