import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import { useContext, useEffect } from "react";
import {
  getUserData,
  modifyUserData,
} from "../../../../APP/fetch/fetch-functions";
import { UserContext } from "../../../../shared/user-info/user.context";

function LateralMenu(props) {
  const [t] = useTranslation("users");
  const [userData, setUserData] = useContext(UserContext);
  //obtengo el token del session
  const token = localStorage.getItem("token");
  useEffect(() => {
    //hacer un get para tener los datos del usuario
    async function fetchData(token) {
      const userdata = await getUserData(token);
      setUserData(userdata);
    }
    fetchData(token);
  }, []);

  async function modifyAsyncUser(body, token) {
    const userdata = await modifyUserData(body, token);
    setUserData(userdata);
  }
  const onSubmit = (e) => {
    //hacer un post para cambiar los datos
    e.preventDefault();
    let body = {};
    if (userData.type === "user" && userData.gender) {
      body = {
        name: e.target.name.value,
        surname: e.target.surname.value,
        birthDate: e.target.date.value,
        phone: e.target.phone.value,
      };
    } else if (userData.type === "user") {
      body = {
        name: e.target.name.value,
        surname: e.target.surname.value,
        birthDate: e.target.date.value,
        phone: e.target.phone.value,
        gender: e.target.gender.value,
      };
    } else if (userData.type === "box") {
      body = {
        name: e.target.name.value,
        addres: e.target.addres.value,
        city: e.target.city.value,
        province: e.target.province.value,
        postal_code: e.target.postalCode.value,
        phone: e.target.phone.value,
      };
    }
    modifyAsyncUser(body, token);
    props.onHide(false);
  };
  return (
    <>
      {userData.type === "user" ? (
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
              {t("actualizar_datos.mis_datos")}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label> {t("actualizar_datos.nombre")}</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder={`${userData?.name}`}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicSurname">
                <Form.Label> {t("actualizar_datos.apellidos")}</Form.Label>
                <Form.Control
                  name="surname"
                  type="text"
                  placeholder={
                    userData.surname
                      ? `${userData.surname}`
                      : `${t("actualizar_datos.apellidos")}`
                  }
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> {t("actualizar_datos.email")}</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder={userData?.email}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label>
                  {" "}
                  {t("actualizar_datos.fecha_nacimiento")}
                </Form.Label>
                <Form.Control name="birthdate" type="date" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label> {t("actualizar_datos.telefono")}</Form.Label>
                <Form.Control
                  name="phone"
                  type="text"
                  placeholder={
                    userData.phone
                      ? `${userData.phone}`
                      : `${t("actualizar_datos.telefono")}`
                  }
                  required
                />
              </Form.Group>

              {!userData.gender ? (
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
                style={{ width: "100%", padding: "0.5rem 0rem" }}
              >
                {t("actualizar_datos.actualizar")}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      ) : (
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
              {t("actualizar_datos.mis_datos")}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label> {t("actualizar_datos.nombreBox")}</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder={`${userData?.name}`}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddres">
                <Form.Label> {t("actualizar_datos.direccion")}</Form.Label>
                <Form.Control
                  name="addres"
                  type="text"
                  placeholder={
                    userData.addres
                      ? `${userData.addres}`
                      : `${t("actualizar_datos.direccion")}`
                  }
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> {t("actualizar_datos.email")}</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder={userData?.email}
                  disabled
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Label> {t("actualizar_datos.ciudad")}</Form.Label>
                <Form.Control
                  name="city"
                  type="text"
                  placeholder={
                    userData.city
                      ? `${userData.city}`
                      : `${t("actualizar_datos.ciudad")}`
                  }
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Label> {t("actualizar_datos.provincia")}</Form.Label>
                <Form.Control
                  name="province"
                  type="text"
                  placeholder={
                    userData.province
                      ? `${userData.province}`
                      : `${t("actualizar_datos.provincia")}`
                  }
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCode">
                <Form.Label> {t("actualizar_datos.cp")}</Form.Label>
                <Form.Control
                  name="postalCode"
                  type="text"
                  placeholder={
                    userData.postal_code
                      ? `${userData.postal_code}`
                      : `${t("actualizar_datos.cp")}`
                  }
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label> {t("actualizar_datos.telefono")}</Form.Label>
                <Form.Control
                  name="phone"
                  type="text"
                  placeholder={
                    userData.phone
                      ? `${userData.phone}`
                      : `${t("actualizar_datos.telefono")}`
                  }
                  required
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{ width: "100%", padding: "0.5rem 0rem" }}
              >
                {t("actualizar_datos.actualizar")}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

export default LateralMenu;
