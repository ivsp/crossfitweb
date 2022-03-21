import "./searching-area.scss";
import { ThemingContext } from "../../shared/theming/theming.context";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchingArea() {
  const [t] = useTranslation("header");

  const [theming] = useContext(ThemingContext);
  return (
    <Card
      bg={`${theming.primary.color}`}
      className="searching_conteiner"
      style={{
        fontFamily: "rubik-medium",
      }}
    >
      <Card className="searching_conteiner-info  ">
        <Form className="d-flex justify-content-evenly">
          <Form.Group
            className="pointer  text-center d-flex flex-column align-items-center"
            controlId="formBasicEmail"
            style={{ width: "45%" }}
          >
            <Form.Label
              style={{
                paddingTop: "0.3rem",
              }}
            >
              {t("busqueda.localización")}
            </Form.Label>
            <Form.Control
              style={{
                fontFamily: "rubik-regular",
              }}
              className=" border-0 bg-transparent text-center reset-inputs"
              type="text"
              placeholder={`${t("busqueda.loc_enter")}`}
            />
          </Form.Group>
          <Form.Group
            className="pointer  text-center d-flex justify-content-between align-items-center"
            controlId="formBasicPassword"
            style={{ width: "55%" }}
          >
            <Form.Group className="pointer  text-center d-flex flex-column align-items-center">
              <Form.Label
                style={{
                  paddingTop: "0.3rem",
                }}
              >
                {t("busqueda.categoria")}
              </Form.Label>
              <Form.Control
                style={{
                  fontFamily: "rubik-regular",
                }}
                className=" border-0 bg-transparent text-center"
                type="text"
                placeholder={`${t("busqueda.cat_enter")}`}
              />
            </Form.Group>
            <Button
              className="search_button"
              variant={`${theming.strong_details.color}`}
              type="submit"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </Button>
          </Form.Group>
          {/* <Form.Group
            className="p-1   text-center d-flex  align-self-center"
            controlId="formBasicPassword"
            style={{ width: "max-content" }}
          >
         
          </Form.Group> */}
        </Form>
      </Card>
    </Card>
  );
}

export default SearchingArea;
