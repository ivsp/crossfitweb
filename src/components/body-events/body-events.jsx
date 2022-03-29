import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import imageTaronja from "../../assets/images/taronja.png";
import { useContext, useEffect } from "react";
import { ThemingContext } from "../../shared/theming/theming.context";
import { useTranslation } from "react-i18next";
import { EventContext } from "../../shared/event-info/event.context";
import { returnDateByTimeStamp } from "../../APP/functions/functions";
import { useNavigate } from "react-router-dom";
import { getAllCurrentsEvents } from "../../APP/fetch/fetch-functions";

function BodyEvents() {
  const [theming] = useContext(ThemingContext);
  const [t] = useTranslation("users");
  const [, , , , currentEventsData, setCurrentsEventsData] =
    useContext(EventContext);
  const navigate = useNavigate();

  async function getAllEvents() {
    const events = await getAllCurrentsEvents();
    setCurrentsEventsData(events);
  }

  useEffect(() => {
    //traer los eventos de la base de datos y actualizar el currentEvents
    getAllEvents();
  }, []);

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
          {currentEventsData?.map((e, i) => {
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
                        {e.eventName}
                      </Card.Title>
                      <Card.Title
                        style={{
                          fontFamily: "rubik-regular",
                          fontSize: "1rem",
                        }}
                      >
                        {returnDateByTimeStamp(e.eventStartDate)} /{" "}
                        {returnDateByTimeStamp(e.eventEndDate)}
                      </Card.Title>
                      <Card.Text
                        style={{
                          fontFamily: "rubik-regular",
                          fontSize: "0.9rem",
                        }}
                      >
                        {e.shortDescription}
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
                          {e.eventCity}
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
                          {e.eliteCategory ? "ELITE," : ""}
                          {e.rxCategory ? " RX," : ""}
                          {e.scCategory ? " SC," : ""}
                          {e.teamCategory ? " TEAM" : ""}
                        </Card.Text>
                      </div>
                      <Button
                        style={{
                          fontFamily: "rubik-semibold",
                          fontSize: "1rem",
                        }}
                        variant={`${theming.primary.color}`}
                        onClick={() => navigate(`/events/${e.eventName}`)}
                      >
                        {" "}
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

export default BodyEvents;
