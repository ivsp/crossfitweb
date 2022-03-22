import { useTranslation } from "react-i18next";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//import { useState } from "react";
import { logInUser } from "../../APP/fetch/fetch-functions";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../shared/user-info/user.context";

function LogInCenteredModal(props) {
  const [userData, setUserData] = useContext(UserContext);

  const [t] = useTranslation("header");
  const [a] = useTranslation("alerts");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const data = await logInUser(body);
    setUserData(data);

    if (data.status === 404) {
      alert(`${a("alert.login_incorrecto")}`);
    } else if (data && data?.type === "user") {
      //redirijo a la pagina de usuario y guardo el token en el local/session access_token: token
      localStorage.setItem("token", data.access_token);
      props.onHide(false);
      navigate("/users");
    } else if (data && data?.type === "box") {
      localStorage.setItem("token", data.access_token);
      props.onHide(false);
      navigate("/boxes");
    }
  };

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      style={{
        opacity: "1",
      }}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {t("registro.bienvenida")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4> {t("registro.titulo_inicioSesion")}</h4>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{t("registro.email")}</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder={`${t("registro.introEmail")}`}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{t("registro.contraseña")}</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder={`${t("registro.contraseña")}`}
              required
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ width: "100%", padding: "0.5rem 0rem" }}
          >
            {t("registro.continua")}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default LogInCenteredModal;
