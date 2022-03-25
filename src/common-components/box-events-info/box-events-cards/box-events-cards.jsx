import "./box-events-cards.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useContext, useEffect, useState } from "react";
import { ThemingContext } from "../../../shared/theming/theming.context";
import taronja from "./../../../assets/images/taronja.png";
import madridCship from "./../../../assets/images/events/madridCship.png";
import ModifyEvent from "../modals/modal-modify-event/modal-modify-event";
import { EventContext } from "../../../shared/event-info/event.context";
import { getAllEventsByEmail } from "../../../APP/fetch/fetch-functions";
import { returnDateByTimeStamp } from "../../../APP/functions/functions";

function BoxEventsCards({ showActive }) {
  const [theming] = useContext(ThemingContext);
  const [showModifyEvent, setShowModifyEvent] = useState([]);
  const [showPastEvents, setShowPastEvents] = useState([]);

  const [
    currentEventsData,
    setCurrentEventsData,
    pastEventsData,
    setPastEventsData,
  ] = useContext(EventContext);

  const historicEvents = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  async function getCurrentBoxEvents() {
    const token = localStorage.getItem("token");
    const events = await getAllEventsByEmail(token);
    console.log(events);
    const showEvents = Array(events.length).fill(false);
    setShowModifyEvent(showEvents);
    console.log(showEvents);
    setCurrentEventsData(events);
  }
  async function getPastBoxEvents() {
    const token = localStorage.getItem("token");
    const events = await getAllEventsByEmail(token);
    console.log(events);
    const showEvents = Array(events.length).fill(false);
    setShowPastEvents(showEvents);
    console.log(showEvents);
    setPastEventsData(events);
  }
  useEffect(() => {
    //traer los eventos de la base de datos y actualizar el currentEvents get a /boxes pasando email
    getCurrentBoxEvents();
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
        {showActive
          ? currentEventsData?.map((e, i) => {
              return (
                <Col key={i} xs={10} sm={6} md={5} lg={4} xl={3} xxl={3}>
                  <Card className="events-card__container">
                    <Card.Img
                      style={{
                        width: "100%",
                      }}
                      className="image_container"
                      variant="top"
                      src={taronja}
                    />
                    <Card.Body className="events-body__container">
                      <Card.Title className="card-body_tittle">
                        {e.eventName}
                      </Card.Title>
                      <div className="padding-bottom">
                        <Card.Text className="card-body_parr colorgey">
                          Fecha:
                        </Card.Text>
                        <Card.Text className="card-body_parr ">
                          {returnDateByTimeStamp(e.eventStartDate)} -{" "}
                          {returnDateByTimeStamp(e.eventEndDate)}
                        </Card.Text>
                      </div>
                      <div className="padding-bottom">
                        <Card.Text className="card-body_parr colorgey">
                          Cuidad:
                        </Card.Text>
                        <Card.Text className="card-body_parr ">
                          {e.eventCity}
                        </Card.Text>
                      </div>
                      <div className="padding-bottom">
                        <Card.Text className="card-body_parr colorgey">
                          Descripción:
                        </Card.Text>
                        <Card.Text className="card-body_parr ">
                          {e.shortDescription}
                        </Card.Text>
                      </div>
                      <div className="padding-bottom">
                        <Card.Text className="card-body_parr colorgey">
                          Atletas:
                        </Card.Text>
                        <Card.Text className="card-body_parr ">{`${e.eventJoinPerson}/${e.eventLimitPerson}`}</Card.Text>
                      </div>
                      <Button
                        className="event_button"
                        variant={theming.primary.color}
                        onClick={() => {
                          showModifyEvent[i] = true;
                          setShowModifyEvent([
                            ...showModifyEvent,
                            showModifyEvent[i],
                          ]);
                        }}
                      >
                        Datalles / Modificar
                      </Button>
                    </Card.Body>
                  </Card>
                  <ModifyEvent
                    key={i}
                    showMod={showModifyEvent}
                    setShowMod={setShowModifyEvent}
                    eventData={e}
                    eventposition={i}
                  ></ModifyEvent>
                </Col>
              );
            })
          : historicEvents.map((e, i) => {
              return (
                <Col key={i} xs={10} sm={6} md={5} lg={4} xl={3} xxl={3}>
                  <Card className="events-card__container">
                    <Card.Img
                      style={{
                        width: "100%",
                      }}
                      className="image_container"
                      variant="top"
                      src={madridCship}
                    />
                    <Card.Body className="events-body__container">
                      <Card.Title className="card-body_tittle">
                        Nombre del evento
                      </Card.Title>
                      <div className="padding-bottom">
                        <Card.Text className="card-body_parr colorgey">
                          Fecha:
                        </Card.Text>
                        <Card.Text className="card-body_parr ">
                          15.05.2022 - 17.05.2022
                        </Card.Text>
                      </div>
                      <div className="padding-bottom">
                        <Card.Text className="card-body_parr colorgey">
                          Cuidad:
                        </Card.Text>
                        <Card.Text className="card-body_parr ">
                          Valencia
                        </Card.Text>
                      </div>
                      <div className="padding-bottom">
                        <Card.Text className="card-body_parr colorgey">
                          Descripción:
                        </Card.Text>
                        <Card.Text className="card-body_parr ">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </div>
                      <div className="padding-bottom">
                        <Card.Text className="card-body_parr colorgey">
                          Atletas:
                        </Card.Text>
                        <Card.Text className="card-body_parr ">10/25</Card.Text>
                      </div>
                      <Button
                        className="event_button"
                        variant={theming.primary.color}
                      >
                        Ver / Borrar
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

export default BoxEventsCards;
