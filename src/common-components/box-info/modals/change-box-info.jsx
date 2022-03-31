import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import { modifyUserData } from "../../../APP/fetch/fetch-functions";

function ChangeBoxInfo(props) {
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
            <Form.Label> {`${t("actualizar_datos.nombreBox")}`}</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder={`${t("actualizar_datos.nombreBox")}`}
              defaultValue={
                props.userdata?.name ? `${props.userdata.name}` : ""
              }
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddres">
            <Form.Label> {`${t("actualizar_datos.direccion")}`}</Form.Label>
            <Form.Control
              name="addres"
              type="text"
              placeholder={`${t("actualizar_datos.direccion")}`}
              defaultValue={
                props.userdata?.addres ? `${props.userdata.addres}` : ""
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

          <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Label> {`${t("actualizar_datos.ciudad")}`}</Form.Label>
            <Form.Control
              name="city"
              type="text"
              placeholder={`${t("actualizar_datos.ciudad")}`}
              defaultValue={
                props.userdata?.city ? `${props.userdata.city}` : ""
              }
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Label> {`${t("actualizar_datos.provincia")}`}</Form.Label>
            <Form.Control
              name="province"
              type="text"
              placeholder={`${t("actualizar_datos.provincia")}`}
              defaultValue={
                props.userdata?.province ? `${props.userdata.province}` : ""
              }
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCode">
            <Form.Label> {`${t("actualizar_datos.cp")}`}</Form.Label>
            <Form.Control
              name="postalCode"
              type="text"
              placeholder={`${t("actualizar_datos.cp")}`}
              defaultValue={
                props.userdata?.postal_code
                  ? `${props.userdata.postal_code}`
                  : ""
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

export default ChangeBoxInfo;
