import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import { modifyUserData } from "../../../APP/fetch/fetch-functions";

function ChangeUserInfo(props) {
  const [t] = useTranslation("users");
  //const [userData, setUserData] = useContext(UserContext);
  const modUserData = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const body = new FormData(e.target);
    const data = await modifyUserData(body, token);
    if (data.status !== 404) {
      props.setUserdata(data);
      console.log(data);
      props.onHide(false);
    }
  };
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      style={{
        opacity: "1",
        fontFamily: "rubik-regular",
      }}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {`${t("actualizar_datos.actualizar")}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={modUserData}>
          <Form.Group className="mb-3" controlId="formBasicFile">
            <Form.Label> {`${t("actualizar_datos.imagen")}`}</Form.Label>
            <Form.Control
              name="file"
              type="file"
              placeholder="select an image"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label> {`${t("actualizar_datos.nombre")}`}</Form.Label>
            <Form.Control
              name="name"
              type="text"
              defaultValue={
                props.userdata?.name ? `${props.userdata.name}` : ""
              }
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSurname">
            <Form.Label> {t("actualizar_datos.apellidos")}</Form.Label>
            <Form.Control
              name="surname"
              type="text"
              defaultValue={
                props.userData?.surname
                  ? `${props.userData?.surname}`
                  : `${t("actualizar_datos.apellidos")}`
              }
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> {`${t("actualizar_datos.email")}`}</Form.Label>
            <Form.Control
              name="email"
              type="email"
              defaultValue={
                props.userdata?.email ? `${props.userdata.email}` : ""
              }
              disabled
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>{t("actualizar_datos.fecha_nacimiento")}</Form.Label>
            <Form.Control
              name="birthdate"
              type="date"
              defaultValue={
                props.userdata?.birthDate ? `${props.userdata.birthDate}` : ""
              }
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>{`${t("actualizar_datos.telefono")}`}</Form.Label>
            <Form.Control
              name="phone"
              type="text"
              placeholder={`${t("actualizar_datos.telefono")}`}
              defaultValue={
                props.userdata?.phone ? `${props.userdata.phone}` : ""
              }
              required
            />
          </Form.Group>

          {props.userData?.gender ? (
            <Form.Group
              className="mb-3 d-flex gap-3"
              controlId="formBasicCheckbox"
              required
            >
              <Form.Check
                name="gender"
                type="radio"
                value="male"
                label={`${t("actualizar_datos.sexo_h")}`}
                required
              />
              <Form.Check
                name="gender"
                type="radio"
                value="female"
                label={`${t("actualizar_datos.sexo_m")}`}
                required
              />
            </Form.Group>
          ) : (
            ""
          )}

          <Button
            variant="primary"
            type="submit"
            style={{
              width: "100%",
              padding: "0.5rem 0rem",
            }}
          >
            {`${t("actualizar_datos.actualizar")}`}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ChangeUserInfo;
