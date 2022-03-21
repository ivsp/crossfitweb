import { useTranslation } from "react-i18next";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//import { useState } from "react";
import { registerNewUser } from "../../APP/fetch/fetch-functions";

function RegisterCenteredModal(props) {
  const [t] = useTranslation("header");
  const [a] = useTranslation("alerts");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.type.value);
    const body = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      type: e.target.type.value,
      logged: "NO",
    };
    const r = await registerNewUser(body);

    if (r && r.status === 201) {
      props.onHide(false);
      alert(`${a("alert.creacion_usuario")}`);
    } else {
      alert(`${a("alert.usuarioexistente")}`);
    }
    //abrir un modal que diga que se ha enviado un correo electrónico con un enlace para validar
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
        <h4> {t("registro.titulo_registro")}</h4>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{t("registro.nombre")}</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder={`${t("registro.introNombre")}`}
              required
            />
          </Form.Group>
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
          <Form.Group
            className="mb-3 d-flex gap-3"
            controlId="formBasicCheckbox"
            required
          >
            <Form.Check
              name="type"
              type="radio"
              value="user"
              label={`${t("registro.usuario")}`}
              required
            />
            <Form.Check
              name="type"
              type="radio"
              value="box"
              label={`${t("registro.box")}`}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label={`${t("registro.condiciones")}`}
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

export default RegisterCenteredModal;
