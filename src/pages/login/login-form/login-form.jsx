import "./login-form.scss";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { UserContext } from "../../../shared/user-info/user.context";
import { useTranslation } from "react-i18next";
import { ThemingContext } from "../../../shared/theming/theming.context";
import { useNavigate } from "react-router-dom";
import { logInUser } from "../../../APP/fetch/fetch-functions";
function LoginForm() {
  const [userData, setUserData] = useContext(UserContext);

  const [t] = useTranslation("header");
  const [a] = useTranslation("alerts");
  const [theming] = useContext(ThemingContext);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const data = await logInUser(body);
    setUserData(data);
    console.log(data);
    if (data.status === 404) {
      alert(`${a("alert.login_incorrecto")}`);
    } else if (data.type === "user") {
      console.log(1);
      //redirijo a la pagina de usuario y guardo el token en el local/session access_token: token
      localStorage.setItem("token", data.access_token);
      navigate("/users");
    } else if (data.type === "box") {
      //redirijo a la pagina de centtros y guardo el token en el local/session access_token: token
      localStorage.setItem("token", data.access_token);
      navigate("/boxes");
    }
  };

  return (
    <>
      <h1
        style={{
          padding: "1rem",
          textAlign: "center",
          color: `${theming.primary.code}`,
          opacity: "0.9",
        }}
      >
        {userData
          ? `${t("registro.saludo")} ${userData.name}! ${t(
              "registro.bienvenida_login"
            )}`
          : `${t("registro.bienvenida_login")}`}
      </h1>

      <Container
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          width: "50%",
          paddingBottom: "1.5rem",
        }}
      >
        <Form
          style={{
            padding: "2rem",
            width: "40%",
            border: "1px solid #CCCCCC ",
            borderRadius: "5px",
          }}
          onSubmit={onSubmit}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{t("registro.email")}</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder={`${t("registro.introEmail")}`}
              required
              style={{
                color: `${theming.neutral_300.code}`,
              }}
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

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label={`${t("registro.mantener_sesion")}`}
            />
          </Form.Group>
          <Button
            className="button"
            variant="primary"
            type="submit"
            style={{ width: "100%", padding: "0.5rem 0rem" }}
          >
            {t("registro.continua")}
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default LoginForm;
