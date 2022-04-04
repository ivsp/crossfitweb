import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import blank from "../../assets/images/blank-user/user-none.png";
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
  const [
    ,
    ,
    ,
    ,
    currentEventsData,
    setCurrentsEventsData,
    filterCurrentEventsData,
    setFilterCurrentEventsData,
  ] = useContext(EventContext);
  const navigate = useNavigate();

  async function getAllEvents() {
    const events = await getAllCurrentsEvents();
    setCurrentsEventsData(events);
    setFilterCurrentEventsData(events);
  }

  useEffect(() => {
    //traer los eventos de la base de datos y actualizar el currentEvents
    getAllEvents();
  }, []);

  return (
    <Row
      style={{
        margin: "0px",
        padding: "1rem 0rem",
        paddingBottom: "10rem",
      }}
    >
      {filterCurrentEventsData.length !== 0 ? (
        filterCurrentEventsData?.map((e, i) => {
          return (
            <Col
              style={{
                padding: "1rem 1rem",
              }}
              xs={{ span: 10, offset: 1 }}
              sm={{ span: 10, offset: 1 }}
              md={{ span: 6, offset: 0 }}
              lg={{ span: 4, offset: 1 }}
              xl={{ span: 3, offset: 1 }}
              xxl={{ span: 3, offset: 1 }}
            >
              <Card
                className="p-md-3 d-flex flex-row  flex-lg-column justify-content-between align-items-center"
                key={i}
                style={{
                  margin: "0px",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Col
                  style={{
                    padding: "0px",
                  }}
                  xs={4}
                  sm={6}
                  md={4}
                  lg={12}
                  xl={12}
                  xxl={12}
                >
                  <Card.Img
                    className="mt-xl-3 "
                    src={
                      e.file ? `${process.env.REACT_APP_URL}/${e.file}` : blank
                    }
                  />
                </Col>
                <Col
                  style={{
                    padding: "0px",
                  }}
                  xs={8}
                  sm={6}
                  md={8}
                  lg={12}
                  xl={12}
                  xxl={12}
                >
                  <Card
                    style={{
                      height: "100%",
                      border: "none",
                    }}
                  >
                    <Card.Body
                      className="d-flex flex-column justify-content-between align-items-stretch"
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
              </Card>
            </Col>
          );
        })
      ) : (
        <div
          style={{
            height: "80vh",
            backGroundColor: "#FFFFFF",
          }}
        ></div>
      )}
    </Row>
  );
}

export default BodyEvents;
