import { ThemingContext } from "../../../shared/theming/theming.context";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";

function HeroLogin() {
  const [theming] = useContext(ThemingContext);
  const [t] = useTranslation("header");

  return (
    <>
      <Card
        bg={`${theming.primary.color}`}
        style={{
          width: "100%",
          height: "8vh",
          borderRadius: "0px",
          border: "none",
          color: `${theming.font_color.color}`,
          padding: "1rem 0rem",
        }}
      >
        <Card.Body
          className="d-flex justify-content-center "
          style={{
            width: "80%",
            padding: "2rem",
            margin: "auto",
            textAlign: "center",
            backgroundColor: `${theming.strong_details.code}`,
            color: `${theming.font_color.color}`,

            borderBottom: `2px solid ${theming.soft_details.code}`,
            borderRadius: "5px",
          }}
        >
          <Card.Title
            style={{
              fontWeight: "bold",
              fontSize: "2rem",
              color: `${theming.primary.code}`,
            }}
          >
            {`${t("registro.bienvenida")}`}
          </Card.Title>
        </Card.Body>
      </Card>
      <Card
        style={{
          height: "5.5vh",
          borderRadius: "0px",
          border: "none",
          zIndex: "-1",
        }}
      ></Card>
    </>
  );
}

export default HeroLogin;
