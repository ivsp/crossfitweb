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
import giraldaimg from "./../../../assets/images/boxes/giralda.png";
import undergroundimg from "./../../../assets/images/boxes/underground.png";
import murallaimg from "./../../../assets/images/boxes/muralla.jpg";
import { useTranslation } from "react-i18next";

function FindEvent() {
  const [theming] = useContext(ThemingContext);
  const navigate = useNavigate();
  const [t] = useTranslation("landing");

  const madrid = {
    name: "Madrid",
    description:
      "Vuelve a Madrid la competición de crossFit más cañera y exigente de España. Apúntate y demuestra de que estás hecho!",
  };

  const sevilla = {
    name: "Sevilla",
    description:
      "Sevilla realiza de nuevo una nueva edición de de su competición por excelencia. Los mejores atletas de toda Andalucía juntos para pasar un fin de semana increíble!",
  };
  const malaga = {
    name: "Málaga",
    description:
      "Málaga, verano, sol, playa y CROSSFIT. No te puedes perder esta magnífica competición y disfrutar de un fin de semana inolvidable.",
  };
  const cities = [madrid, sevilla, malaga];

  const events = [madridCship, andalusiImg, malagaTd];
  const boxesimg = [giraldaimg, undergroundimg, murallaimg];

  const giraldaCr = {
    name: "Giralda CrossFit",
    description:
      "Gracias a Wod Target pudimos juntar a la mayoría de los boxes de Sevilla y crear una comunidad de crossfit en la ciudad.",
  };

  const underground = {
    name: "CrossFit Underground",
    description:
      "Una experiencia increíble. Disfrutamos de un fin de semana espectacular!",
  };

  const muralla = {
    name: "CrossFit la Muralla",
    description:
      "Reunimos a atletas de diferentes ciudades de Málaga en una combinación de crossfit y buen ambiente.",
  };

  const boxesNames = [giraldaCr, underground, muralla];
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
              {t("events_area.events_area_tittle")}
            </h2>
            <p className="find-event_container-parr">
              {t("events_area.events_area_body1")}
            </p>
            <p className="find-event_container-parr">
              {t("events_area.events_area_body2")}
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
            onClick={() => navigate("/events")}
            className="event_button"
            variant={theming.soft_details.color}
          >
            {t("events_area.events_area_button")}
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
          <h2 className="find-event_container-title">
            {t("events_area.popular_events_tittle")}
          </h2>
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
          <h2 className="find-event_container-title">
            {t("boxes_area.boxes_area_tittle")}
          </h2>
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
                  <BoxesCards key={i} box={b} image={boxesimg[i]}></BoxesCards>
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
