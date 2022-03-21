import "./nav-user-button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import { ThemingContext } from "../../shared/theming/theming.context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../shared/user-info/user.context";
import { useTranslation } from "react-i18next";
import { logOutUser } from "../../APP/fetch/fetch-functions";
import LateralMenu from "../../pages/users-pages/users/menu-desplegable/menu-desplegable";

function NavUserButton(props) {
  //const [theming] = useContext(ThemingContext);
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useContext(UserContext);
  const [t, i18n] = useTranslation("users");
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
            }}
          >
            {userData.name}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Nav className="flex-column p-3">
          <Nav.Link>{t("menu_lateral.eventos")}</Nav.Link>
          <Nav.Link onClick={() => setModalMenuShow(true)}>
            {t("menu_lateral.datos")}
          </Nav.Link>
          <Nav.Link onClick={logOut}>
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
