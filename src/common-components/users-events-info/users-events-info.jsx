import "./users-events-info.scss";
import Nav from "react-bootstrap/Nav";
import React, { useContext, useState } from "react";
import { ThemingContext } from "../../shared/theming/theming.context";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";
import UsersEventsCards from "./users-events-cards/users-events-cards";

function UsersEventsInfo() {
  const [theming] = useContext(ThemingContext);
  const [showActiveEvents, setShowActEvents] = useState(true);
  const [t] = useTranslation("users");

  const showActEvents = () => {
    setShowActEvents(true);
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
              </div>
            </Col>
          </Nav>
        </Col>
      </Row>
      <UsersEventsCards></UsersEventsCards>
    </React.Fragment>
  );
}

export default UsersEventsInfo;
