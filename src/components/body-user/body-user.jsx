import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import imageTaronja from "../../assets/images/taronja.png";
import { useContext } from "react";
import { ThemingContext } from "../../shared/theming/theming.context";
import { useTranslation } from "react-i18next";

function BodyUser() {
  const events = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [theming] = useContext(ThemingContext);
  const [t] = useTranslation("users");

  return (
    <Card>
      <Row
        style={{
          margin: "0px",
          padding: "1rem 0rem",
        }}
      >
        <Col
          style={{
            padding: "0px",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          xxl={6}
        >
          {events.map((e, i) => {
            return (
              <Row
                className="p-md-3 d-flex justify-content-center"
                key={i}
                style={{
                  margin: "0px",
                  borderTop: "1px solid #CCCCCC",
                }}
              >
                <Col
                  style={{
                    padding: "0px",
                  }}
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={6}
                  xxl={6}
                >
                  <Card.Img className="mt-xl-3 " src={imageTaronja} />
                </Col>
                <Col
                  style={{
                    padding: "0px",
                  }}
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={6}
                  xxl={6}
                >
                  <Card
                    style={{
                      height: "100%",
                      border: "none",
                    }}
                  >
                    <Card.Body
                      className="d-flex flex-column justify-content-around align-items-stretch"
                      style={{
                        height: "100%",
                      }}
                    >
                      <Card.Title
                        style={{
                          fontFamily: "rubik-semibold",
                        }}
                      >
                        Taronja Games
                      </Card.Title>
                      <Card.Title
                        style={{
                          fontFamily: "rubik-regular",
                          fontSize: "1rem",
                        }}
                      >
                        19.06.2022
                      </Card.Title>
                      <Card.Text
                        style={{
                          fontFamily: "rubik-regular",
                          fontSize: "0.9rem",
                        }}
                      >
                        Vuelve el Taronja Games 2022, la VII edición de un
                        evento bajo licencia CrossFit con el que podrás volver a
                        romper tus límites y encontrar tu mejor versión. ¿te lo
                        vas a perder?
                      </Card.Text>
                      <div className="d-flex gap-3">
                        <Card.Text
                          style={{
                            fontFamily: "rubik-medium",
                            fontSize: "0.9rem",
                          }}
                        >
                          {t("eventos.localización")}
                        </Card.Text>
                        <Card.Text
                          style={{
                            fontFamily: "rubik-regular",
                            fontSize: "0.9rem",
                          }}
                        >
                          Valencia
                        </Card.Text>
                      </div>
                      <div className="d-flex gap-3">
                        <Card.Text
                          style={{
                            fontFamily: "rubik-medium",
                            fontSize: "0.9rem",
                          }}
                        >
                          {t("eventos.categorias")}
                        </Card.Text>
                        <Card.Text
                          style={{
                            fontFamily: "rubik-regular",
                            fontSize: "0.9rem",
                            paddingBottom: "0.3rem",
                          }}
                        >
                          ÉLITE, RX, SC, TEAM, TEAM SC
                        </Card.Text>
                      </div>
                      <Button
                        style={{
                          fontFamily: "rubik-semibold",
                          fontSize: "1rem",
                        }}
                        variant={`${theming.primary.color}`}
                      >
                        {t("eventos.mas_info")}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            );
          })}
        </Col>
        <Col
          style={{
            padding: "0px",
            backgroundColor: "grey",
            maxHeight: "100%",
          }}
          xs={0}
          sm={0}
          md={12}
          lg={6}
          xl={6}
          xxl={6}
        >
          MAPA
        </Col>
      </Row>
    </Card>
  );
}

export default BodyUser;
