import "./nav-user-button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../shared/user-info/user.context";
import { useTranslation } from "react-i18next";
import { logOutUser } from "../../APP/fetch/fetch-functions";
import LateralMenu from "../../pages/users-pages/users/menu-desplegable/menu-desplegable";

function NavUserButton(props) {
  const [show, setShow] = useState(false);
  const [userData] = useContext(UserContext);
  const [t] = useTranslation("users");
  const [modalLoginShow, setModalMenuShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const logOut = async () => {
    const token = localStorage.getItem("token");
    const data = await logOutUser(token);
    if (data) {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  return (
    <>
      <FontAwesomeIcon
        className="icon"
        icon={faCircleUser}
        style={{
          color: "white",
          fontSize: "2rem",
        }}
        onClick={handleShow}
      ></FontAwesomeIcon>

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title
            style={{
              fontSize: "1.5rem",
              fontFamily: "rubik-semibold",
            }}
          >
            {userData.name}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Nav
          style={{
            fontSize: "1rem",
            fontFamily: "rubik-regular",
          }}
          className="flex-column "
        >
          <Nav.Link className="nav_link p-3">
            {t("menu_lateral.eventos")}
          </Nav.Link>
          <Nav.Link
            className="nav_link p-3"
            onClick={() => setModalMenuShow(true)}
          >
            {t("menu_lateral.datos")}
          </Nav.Link>
          <Nav.Link className="nav_link p-3" onClick={logOut}>
            {t("menu_lateral.cerrar_sesion")}
          </Nav.Link>
        </Nav>
      </Offcanvas>

      <LateralMenu
        show={modalLoginShow}
        onHide={() => setModalMenuShow(false)}
      ></LateralMenu>
    </>
  );
}

export default NavUserButton;
