import "./users-events-cards.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useContext, useEffect } from "react";
import { ThemingContext } from "../../../shared/theming/theming.context";
import blank from "./../../../assets/images/blank-user/user-none.png";
import { EventContext } from "../../../shared/event-info/event.context";
import { getAllAtheleteEvents } from "../../../APP/fetch/fetch-functions";
import { returnDateByTimeStamp } from "../../../APP/functions/functions";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function UsersEventsCards() {
  const [theming] = useContext(ThemingContext);
  const [t] = useTranslation("users");
  const navigate = useNavigate();

  const [currentBoxEventsData, setCurrentBoxEventsData, , , , ,] =
    useContext(EventContext);

  async function getAtheletesEvents() {
    const token = localStorage.getItem("token");
    const events = await getAllAtheleteEvents(token);
    setCurrentBoxEventsData(events);
  }

  useEffect(() => {
    getAtheletesEvents();
  }, []);

  return (
    <Row
      style={{
        margin: "0px",
        paddingBottom: "2rem",
      }}
    >
      <Col
        className="Xscroll display-events"
        xs={{ span: 10, offset: 1 }}
        sm={{ span: 10, offset: 1 }}
        md={{ span: 10, offset: 1 }}
        lg={{ span: 10, offset: 1 }}
        xl={{ span: 10, offset: 1 }}
        xxl={{ span: 10, offset: 1 }}
      >
        {currentBoxEventsData?.map((e, i) => {
          return (
            <Col
              key={i}
              xs={10}
              sm={6}
              md={5}
              lg={4}
              xl={3}
              xxl={3}
              style={{
                height: "100%",
              }}
            >
              <Card
                className="events-card__container"
                style={{
                  height: "100%",
                }}
              >
                <Card.Img
                  style={{
                    width: "100%",
                  }}
                  className="image_container"
                  variant="top"
                  src={
                    e.file ? `${process.env.REACT_APP_URL}/${e.file}` : blank
                  }
                />
                <Card.Body className="events-body__container">
                  <Card.Title className="card-body_tittle">
                    {e.eventName}
                  </Card.Title>
                  <div className="padding-bottom">
                    <Card.Text className="card-body_parr colorgey">
                      {t("eventsCards.evCardDate")}
                    </Card.Text>
                    <Card.Text className="card-body_parr ">
                      {returnDateByTimeStamp(e.eventStartDate)}
                    </Card.Text>
                  </div>
                  <div className="padding-bottom">
                    <Card.Text className="card-body_parr colorgey">
                      {t("eventsCards.evCardCity")}
                    </Card.Text>
                    <Card.Text className="card-body_parr ">
                      {e.eventCity}
                    </Card.Text>
                  </div>

                  <Button
                    // { Este boton hará un navigate a la página de detalle del evento}
                    className="event_button"
                    variant={theming.primary.color}
                    onClick={() => {
                      navigate(`/events/${e.eventName}`);
                    }}
                  >
                    {t("eventsCards.evAtheleCard")}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Col>
    </Row>
  );
}

export default UsersEventsCards;
