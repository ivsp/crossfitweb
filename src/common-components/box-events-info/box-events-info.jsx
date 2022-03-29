import "./box-events-info.scss";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import React, { useContext, useState } from "react";
import { ThemingContext } from "../../shared/theming/theming.context";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BoxEventsCards from "./box-events-cards/box-events-cards";
import AddEvent from "./modals/modal-add-event/modal-add-event";
import { useTranslation } from "react-i18next";

function BoxEventsInfo() {
  const [theming] = useContext(ThemingContext);
  const [showActiveEvents, setShowActEvents] = useState(true);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [t] = useTranslation("users");

  const showActEvents = () => {
    setShowActEvents(true);
  };

  const showHistoricEvents = () => {
    setShowActEvents(false);
  };

  return (
    <React.Fragment>
      <Row
        style={{
          margin: "0px",
          padding: "3rem 0rem",
        }}
      >
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 10, offset: 1 }}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 10, offset: 1 }}
          xl={{ span: 10, offset: 1 }}
          xxl={{ span: 10, offset: 1 }}
        >
          <Nav variant="tabs" defaultActiveKey="link-1">
            <Col
              xs={{ span: 4, offset: 0 }}
              sm={{ span: 4, offset: 0 }}
              md={{ span: 4, offset: 0 }}
              lg={{ span: 4, offset: 0 }}
              xl={{ span: 4, offset: 0 }}
              xxl={{ span: 4, offset: 0 }}
            >
              <div className="links__container">
                <Nav.Item>
                  <Nav.Link onClick={showActEvents} eventKey="link-1">
                    {t("userInfo.evActivos")}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={showHistoricEvents} eventKey="link-2">
                    {t("userInfo.evPasados")}
                  </Nav.Link>
                </Nav.Item>
              </div>
            </Col>
            <Col
              xs={{ span: 2, offset: 6 }}
              sm={{ span: 2, offset: 6 }}
              md={{ span: 2, offset: 6 }}
              lg={{ span: 2, offset: 6 }}
              xl={{ span: 2, offset: 6 }}
              xxl={{ span: 2, offset: 6 }}
            >
              <Nav.Item>
                <Button
                  className="add-event-button"
                  variant={theming.primary.color}
                  onClick={() => setShowAddEvent(true)}
                >
                  {t("userInfo.añadirEvento")}
                </Button>
              </Nav.Item>
            </Col>
          </Nav>
        </Col>
      </Row>
      <BoxEventsCards showActive={showActiveEvents}></BoxEventsCards>
      <AddEvent show={showAddEvent} setShow={setShowAddEvent}></AddEvent>
    </React.Fragment>
  );
}

export default BoxEventsInfo;
