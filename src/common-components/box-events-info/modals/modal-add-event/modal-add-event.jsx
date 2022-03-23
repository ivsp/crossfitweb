import "./modal-add-event.scss";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { ThemingContext } from "../../../../shared/theming/theming.context";
import giraldaCr from "./../../../../assets/images/boxes/giralda.png";
function AddEvent({ show, setShow }) {
  const [theming] = useContext(ThemingContext);

  const addEvent = (e) => {
    e.preventDefault();
    console.log("subi el evento");
    //hago el post
    setShow(false);
  };
  return (
    <Modal
      show={show}
      fullscreen={true}
      backdrop="static"
      keyboard={false}
      onHide={() => setShow(false)}
      style={{
        minHeight: "100vh",
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title
          style={{
            fontFamily: "rubik-bold",
            padding: "1rem",
          }}
        >
          Añadir un evento
        </Modal.Title>
        {/* <Modal.Body>Modal body content</Modal.Body> */}
      </Modal.Header>
      <Form onSubmit={addEvent}>
        <Row
          style={{
            margin: "0px",
            padding: "2rem 0rem",
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
            <Card
              className="event-info_container"
              style={{
                border: "none",
                borderRadius: "0px",
                borderBottom: "0.5px solid #e5e5e5e5",
              }}
            >
              <Col
                xs={{ span: 4, offset: 4 }}
                sm={{ span: 2, offset: 1 }}
                md={{ span: 2, offset: 1 }}
                lg={{ span: 2, offset: 1 }}
                xl={{ span: 2, offset: 0 }}
                xxl={{ span: 2, offset: 0 }}
              >
                <div className="d-flex flex-column align-items-center">
                  <Card.Img
                    className="image_profile"
                    variant="top"
                    src={giraldaCr}
                  />
                  <Button
                    className="change-image-button"
                    variant={theming.primary.color}
                    style={{
                      fontFamily: "rubik-regular",
                    }}
                  >
                    Cambiar Imagen
                  </Button>
                </div>
              </Col>
              <Col
                xs={{ span: 11, offset: 1 }}
                sm={{ span: 6, offset: 1 }}
                md={{ span: 8, offset: 1 }}
                lg={{ span: 8, offset: 1 }}
                xl={{ span: 9, offset: 1 }}
                xxl={{ span: 9, offset: 1 }}
              >
                <Row>
                  <Col
                    xs={{ span: 10, offset: 1 }}
                    sm={{ span: 9, offset: 1 }}
                    md={{ span: 6, offset: 0 }}
                    lg={{ span: 5, offset: 0 }}
                    xl={{ span: 4, offset: 0 }}
                    xxl={{ span: 4, offset: 0 }}
                  >
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        name="eventName"
                        type="name"
                        placeholder="Enter a name"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCity">
                      <Form.Label>Ciudad</Form.Label>
                      <Form.Control
                        nme="eventCity"
                        type="city"
                        placeholder="Enter the city"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDirection">
                      <Form.Label>Dirección</Form.Label>
                      <Form.Control
                        name="EventDirection"
                        type="direction"
                        placeholder="Enter a direction"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col
                    xs={{ span: 7, offset: 1 }}
                    sm={{ span: 9, offset: 1 }}
                    md={{ span: 5, offset: 0 }}
                    lg={{ span: 5, offset: 1 }}
                    xl={{ span: 4, offset: 0 }}
                    xxl={{ span: 4, offset: 0 }}
                  >
                    <Form.Group className="mb-3" controlId="formBasicDate">
                      <Form.Label>Fecha de inicio</Form.Label>
                      <Form.Control
                        name="eventStartDate"
                        type="date"
                        placeholder="Enter a direction"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDate">
                      <Form.Label>Fecha de fin</Form.Label>
                      <Form.Control
                        name="eventEndDate"
                        type="date"
                        placeholder="Enter a direction"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col
                    xs={{ span: 9, offset: 1 }}
                    sm={{ span: 10, offset: 1 }}
                    md={{ span: 6, offset: 0 }}
                    lg={{ span: 6, offset: 0 }}
                    xl={{ span: 4, offset: 0 }}
                    xxl={{ span: 4, offset: 0 }}
                  >
                    <Form.Group className="mb-3" controlId="formBasicNumber">
                      <Form.Label>Límite de participantes:</Form.Label>
                      <Form.Control
                        name="eventLimitPerson"
                        type="number"
                        placeholder="Enter a number"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
            </Card>
          </Col>
        </Row>
        <Row
          style={{
            margin: "0px",
          }}
        >
          <Card
            className="box-info_container"
            style={{
              border: "none",
              borderRadius: "0px",
              borderBottom: "0.5px solid #e5e5e5e5",
              fontFamily: "rubik-regular",
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
              <Row>
                <Col
                  xs={{ span: 10, offset: 1 }}
                  sm={{ span: 10, offset: 1 }}
                  md={{ span: 8, offset: 2 }}
                  lg={{ span: 6, offset: 0 }}
                  xl={{ span: 6, offset: 0 }}
                  xxl={{ span: 6, offset: 0 }}
                >
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Descripción corta:</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="shortDescription"
                      placeholder="Enter a short description"
                      maxLength="95"
                      style={{ height: "90px" }}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Descripción larga:</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="longDescription"
                      placeholder="Enter a short description"
                      style={{ height: "300px" }}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col
                  xs={{ span: 10, offset: 1 }}
                  sm={{ span: 10, offset: 1 }}
                  md={{ span: 6, offset: 2 }}
                  lg={{ span: 5, offset: 1 }}
                  xl={{ span: 5, offset: 0 }}
                  xxl={{ span: 5, offset: 1 }}
                >
                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-3 "
                        controlId="formBasicCheckbox"
                        required
                      >
                        <Form.Label>Clasificacion:</Form.Label>

                        <div className="d-flex gap-2">
                          <Form.Check
                            name="clasificationType"
                            type="radio"
                            value="presencial"
                            label="Presencial"
                            required
                          />
                          <Form.Check
                            name="clasificationType"
                            type="radio"
                            value="online"
                            label="online"
                            required
                          />
                        </div>
                      </Form.Group>
                      <div className="d-flex gap-2">
                        <Form.Group className="mb-3" controlId="formBasicDate">
                          <Form.Label>Fecha de inicio</Form.Label>
                          <Form.Control
                            name="cladificationStartDate"
                            type="date"
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDate">
                          <Form.Label>Fecha de fin</Form.Label>
                          <Form.Control
                            name="cladificationEndDate"
                            type="date"
                            required
                          />
                        </Form.Group>
                      </div>
                    </Col>
                    <Col>
                      <Form.Group
                        className="mb-3 "
                        controlId="formBasicCheckbox"
                        required
                      >
                        <Form.Label>Semi final:</Form.Label>

                        <div className="d-flex gap-2">
                          <Form.Check
                            name="semifinalType"
                            type="radio"
                            value="presencial"
                            label="Presencial"
                            required
                          />
                          <Form.Check
                            name="semifinalType"
                            type="radio"
                            value="online"
                            label="online"
                            required
                          />
                        </div>
                      </Form.Group>
                      <div className="d-flex gap-2">
                        <Form.Group className="mb-3" controlId="formBasicDate">
                          <Form.Label>Fecha de inicio</Form.Label>
                          <Form.Control
                            name="semiFinalStartDate"
                            type="date"
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDate">
                          <Form.Label>Fecha de fin</Form.Label>
                          <Form.Control
                            name="semiFinalEndDate"
                            type="date"
                            required
                          />
                        </Form.Group>
                      </div>
                    </Col>
                    <Col>
                      <Form.Group
                        className="mb-3 "
                        controlId="formBasicCheckbox"
                        required
                      >
                        <Form.Label>Final:</Form.Label>

                        <div className="d-flex gap-2">
                          <Form.Check
                            name="finalType"
                            type="radio"
                            value="presencial"
                            label="Presencial"
                            required
                          />
                          <Form.Check
                            name="finalType"
                            type="radio"
                            value="online"
                            label="online"
                            required
                          />
                        </div>
                      </Form.Group>
                      <div className="d-flex gap-2">
                        <Form.Group className="mb-3" controlId="formBasicDate">
                          <Form.Label>Fecha de inicio</Form.Label>
                          <Form.Control
                            name="finalStartDate"
                            type="date"
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDate">
                          <Form.Label>Fecha de fin</Form.Label>
                          <Form.Control
                            name="finalEndDate"
                            type="date"
                            required
                          />
                        </Form.Group>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Card>
        </Row>
        <Row
          style={{
            margin: "0px",
            paddingBottom: "3.5rem",
          }}
        >
          <Card
            className="box-info_container"
            style={{
              border: "none",
              borderRadius: "0px",
            }}
          >
            <Col
              xs={{ span: "auto", offset: 5 }}
              sm={{ span: "auto", offset: 6 }}
              md={{ span: "auto", offset: 8 }}
              lg={{ span: "auto", offset: 9 }}
              xl={{ span: "auto", offset: 9 }}
              xxl={{ span: "auto", offset: 9 }}
            >
              <Button type="submit">Save changes</Button>
            </Col>
            <Col
              xs={{ span: 1, offset: 0 }}
              sm={{ span: 1, offset: 0 }}
              md={{ span: 1, offset: 0 }}
              lg={{ span: 1, offset: 0 }}
              xl={{ span: 1, offset: 0 }}
              xxl={{ span: 1, offset: 0 }}
            >
              <Button onClick={() => setShow(false)}>Cancel</Button>
            </Col>
          </Card>
        </Row>
      </Form>
    </Modal>
  );
}

export default AddEvent;
