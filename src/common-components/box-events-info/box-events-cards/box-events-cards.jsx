import "./box-events-cards.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useContext, useEffect, useState } from "react";
import { ThemingContext } from "../../../shared/theming/theming.context";
import taronja from "./../../../assets/images/taronja.png";
import madridCship from "./../../../assets/images/events/madridCship.png";
import blank from "./../../../assets/images/blank-user/user-none.png";

import ModifyEvent from "../modals/modal-modify-event/modal-modify-event";
import { EventContext } from "../../../shared/event-info/event.context";
import {
  deletePastEvent,
  getAllCurrentsEventsByEmail,
  getAllPastsEventsByEmail,
  modifyEvent,
} from "../../../APP/fetch/fetch-functions";
import { returnDateByTimeStamp } from "../../../APP/functions/functions";
import { useTranslation } from "react-i18next";
import DeleteEvent from "../modals/modal-delete-event/modal-delete-event";

function BoxEventsCards({ showActive }) {
  const [theming] = useContext(ThemingContext);
  const [showModifyEvent, setShowModifyEvent] = useState([]);
  const [showPastEvents, setShowPastEvents] = useState([]);
  const [t] = useTranslation("users");

  const [
    currentBoxEventsData,
    setCurrentBoxEventsData,
    pastBoxEventsData,
    setPastBoxEventsData,
    ,
    ,
  ] = useContext(EventContext);

  async function getCurrentBoxEvents() {
    const token = localStorage.getItem("token");
    const events = await getAllCurrentsEventsByEmail(token);
    const showEvents = Array(events.length).fill(false);
    setShowModifyEvent(showEvents);
    setCurrentBoxEventsData(events);
  }
  async function getPastBoxEvents() {
    const token = localStorage.getItem("token");
    const events = await getAllPastsEventsByEmail(token);
    const showEvents = Array(events.length).fill(false);
    setShowPastEvents(showEvents);
    setPastBoxEventsData(events);
  }

  const modifyCurrentEvent = async (body, token, currentName) => {
    await modifyEvent(body, token, currentName);
    getCurrentBoxEvents();
  };

  const deleteEvent = async (body, token) => {
    await deletePastEvent(body, token);
    getPastBoxEvents();
  };
  useEffect(() => {
    //traer los eventos de la base de datos y actualizar el currentEvents get a /boxes pasando email
    getCurrentBoxEvents();
    getPastBoxEvents();
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
          ? currentBoxEventsData?.map((e, i) => {
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
                      src={e.file ? `http://localhost:4000/${e.file}` : blank}
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
                          {returnDateByTimeStamp(e.eventStartDate)} -{" "}
                          {returnDateByTimeStamp(e.eventEndDate)}
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
                      <div className="padding-bottom">
                        <Card.Text className="card-body_parr colorgey">
                          {t("eventsCards.evCardDescription")}
                        </Card.Text>
                        <Card.Text className="card-body_parr ">
                          {e.shortDescription}
                        </Card.Text>
                      </div>
                      <div className="padding-bottom">
                        <Card.Text className="card-body_parr colorgey">
                          {t("eventsCards.evCardsAtletas")}
                        </Card.Text>
                        <Card.Text className="card-body_parr ">{`${e.eventJoinPerson?.length}/${e.eventLimitPerson}`}</Card.Text>
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
                        {t("eventsCards.evCardModify")}
                      </Button>
                    </Card.Body>
                  </Card>
                  <ModifyEvent
                    key={i}
                    showMod={showModifyEvent}
                    setShowMod={setShowModifyEvent}
                    eventData={e}
                    eventposition={i}
                    modifyCurrentEvent={modifyCurrentEvent}
                  ></ModifyEvent>
                </Col>
              );
            })
          : pastBoxEventsData.map((e, i) => {
              return (
                <Col key={i} xs={10} sm={6} md={5} lg={4} xl={3} xxl={3}>
                  <Card className="events-card__container">
                    <Card.Img
                      style={{
                        width: "100%",
                      }}
                      className="image_container"
                      variant="top"
                      src={e.file ? `http://localhost:4000/${e.file}` : blank}
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
                          {returnDateByTimeStamp(e.eventStartDate)} -{" "}
                          {returnDateByTimeStamp(e.eventEndDate)}
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
                      <div className="padding-bottom">
                        <Card.Text className="card-body_parr colorgey">
                          {t("eventsCards.evCardDescription")}
                        </Card.Text>
                        <Card.Text className="card-body_parr ">
                          {e.shortDescription}
                        </Card.Text>
                      </div>
                      <div className="padding-bottom">
                        <Card.Text className="card-body_parr colorgey">
                          {t("eventsCards.evCardsAtletas")}
                        </Card.Text>
                        <Card.Text className="card-body_parr ">{`${e.eventJoinPerson.length}/${e.eventLimitPerson}`}</Card.Text>
                      </div>
                      <Button
                        className="event_button"
                        variant={theming.primary.color}
                        onClick={() => {
                          showPastEvents[i] = true;
                          setShowPastEvents([
                            ...showPastEvents,
                            showPastEvents[i],
                          ]);
                        }}
                      >
                        {t("eventsCards.evCardDelete")}
                      </Button>
                    </Card.Body>
                  </Card>
                  <DeleteEvent
                    key={i}
                    showMod={showPastEvents}
                    setShowMod={setShowPastEvents}
                    eventData={e}
                    eventposition={i}
                    deleteEvent={deleteEvent}
                  ></DeleteEvent>
                </Col>
              );
            })}
      </Col>
    </Row>
  );
}

export default BoxEventsCards;
