import "./box-events-cards.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { ThemingContext } from "../../../shared/theming/theming.context";
import taronja from "./../../../assets/images/taronja.png";
import madridCship from "./../../../assets/images/events/madridCship.png";

function BoxEventsCards({ showActive }) {
  const [theming] = useContext(ThemingContext);
  const activeEvents = [1, 2, 3, 4];
  const historicEvents = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
          ? activeEvents.map((e, i) => {
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
                        Datalles / Modificar
                      </Button>
                    </Card.Body>
                  </Card>
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
                        Datalles / Modificar
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
