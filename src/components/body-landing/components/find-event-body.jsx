import "./find-event-body.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React, { useContext } from "react";
import { ThemingContext } from "../../../shared/theming/theming.context";
import { useNavigate } from "react-router-dom";
import CitiesCards from "../../../common-components/cities-cards/cities-cards";
import andalusiImg from "./../../../assets/images/events/andalusiC.jpg";
import madridCship from "./../../../assets/images/events/madridCship.png";
import malagaTd from "./../../../assets/images/events/malagaTd.png";
import BoxesCards from "../../../common-components/boxes-cards/boxes-cards";
import giralda from "./../../../assets/images/boxes/giralda.png";
import underground from "./../../../assets/images/boxes/underground.png";
import muralla from "./../../../assets/images/boxes/muralla.jpg";

function FindEvent() {
  const [theming] = useContext(ThemingContext);
  const navigate = useNavigate();
  const cities = ["Madrid", "Sevilla", "Málaga"];
  const events = [madridCship, andalusiImg, malagaTd];
  const boxes = [giralda, underground, muralla];
  const boxesNames = [
    "Giralda CrossFit",
    "CrossFit Underground",
    "CrossFit la Muralla",
  ];
  return (
    <React.Fragment>
      <Row
        className="row_container"
        style={{
          margin: "0px",
        }}
      >
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 10, offset: 1 }}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 8, offset: 1 }}
          xl={{ span: 8, offset: 1 }}
          xxl={{ span: 8, offset: 1 }}
        >
          <div className="find-event_container">
            <h2 className="find-event_container-title">
              Encuentra un Evento cerca de ti
            </h2>
            <p className="find-event_container-parr">
              Ya son más de 200 propietarios de centros deportivos de diferentes
              ciudades españolas ofreciendo eventos de diferentes categorías.
            </p>
            <p className="find-event_container-parr">
              Todos ellos unidos en torno a un objetivo común. Hacer visible
              este deporte y a la gran cantidad de atletas desonocidos.
            </p>
          </div>
        </Col>
        <Col
          className="button_container"
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 6, offset: 3 }}
          md={{ span: 4, offset: 4 }}
          lg={{ span: 2, offset: 0 }}
          xl={{ span: 2, offset: 0 }}
          xxl={{ span: 2, offset: 0 }}
        >
          <Button
            onClick={() => navigate("/users")}
            className="event_button"
            variant={theming.soft_details.color}
          >
            Encuentra un evento
          </Button>
        </Col>
      </Row>
      <Row
        className="row_container"
        style={{
          margin: "0px",
        }}
      >
        <Col
          xs={{ span: 11, offset: 1 }}
          sm={{ span: 9, offset: 2 }}
          md={{ span: 8, offset: 4 }}
          lg={{ span: 5, offset: 7 }}
          xl={{ span: 5, offset: 7 }}
          xxl={{ span: 4, offset: 7 }}
        >
          <h2 className="find-event_container-title">Eventos populares</h2>
        </Col>
        <Col>
          <Row>
            <Col
              className="cards_container"
              xs={{ span: 10, offset: 1 }}
              sm={{ span: 10, offset: 1 }}
              md={{ span: 10, offset: 1 }}
              lg={{ span: 10, offset: 1 }}
              xl={{ span: 10, offset: 1 }}
              xxl={{ span: 10, offset: 1 }}
            >
              {/* {'Esto deberia ser un map de cards'} */}
              {cities.map((c, i) => {
                return (
                  <CitiesCards key={i} city={c} image={events[i]}></CitiesCards>
                );
              })}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          margin: "0px",
          paddingTop: "2rem",
          paddingBottom: "3rem",
        }}
      >
        <Col
          xs={{ span: 11, offset: 1 }}
          sm={{ span: 10, offset: 2 }}
          md={{ span: 10, offset: 2 }}
          lg={{ span: 10, offset: 2 }}
          xl={{ span: 10, offset: 1 }}
          xxl={{ span: 10, offset: 1 }}
        >
          <h2 className="find-event_container-title">Opiniones de los boxes</h2>
        </Col>
        <Col>
          <Row>
            <Col
              className="cards_container"
              xs={{ span: 10, offset: 1 }}
              sm={{ span: 10, offset: 1 }}
              md={{ span: 10, offset: 1 }}
              lg={{ span: 10, offset: 1 }}
              xl={{ span: 10, offset: 1 }}
              xxl={{ span: 10, offset: 1 }}
            >
              {/* {'Esto deberia ser un map de cards'} */}
              {boxesNames.map((b, i) => {
                return (
                  <BoxesCards key={i} box={b} image={boxes[i]}></BoxesCards>
                );
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default FindEvent;
