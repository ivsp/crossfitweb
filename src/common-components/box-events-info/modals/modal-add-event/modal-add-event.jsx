import "./modal-add-event.scss";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { ThemingContext } from "../../../../shared/theming/theming.context";
import { EventContext } from "../../../../shared/event-info/event.context";
import { createNewEvent } from "../../../../APP/fetch/fetch-functions";
import { getCurrentDate } from "../../../../APP/functions/functions";
import { useTranslation } from "react-i18next";
function AddEvent({ show, setShow }) {
  const [theming] = useContext(ThemingContext);
  const [currentBoxEventsData, setCurrentBoxEventsData, , , , ,] =
    useContext(EventContext);
  const [t] = useTranslation("users");

  async function addEvents(body, token) {
    const events = await createNewEvent(body, token);
    setCurrentBoxEventsData([...currentBoxEventsData, events]);
  }
  const addEvent = (e) => {
    e.preventDefault();

    if (
      new Date(e.target.eventStartDate.value).getTime() >=
      new Date(e.target.eventEndDate.value).getTime()
    ) {
      alert(
        "la fecha de inicio del evento debe ser inferior a la de finalizacion "
      );
    } else if (
      new Date(e.target.clasificationStartDate.value).getTime() >=
      new Date(e.target.eventEndDate.value).getTime()
    ) {
      alert(
        "la fecha de inicio del clasificatorio debe ser inferior a la de finalizacion del evento"
      );
    } else if (
      new Date(e.target.clasificationEndDate.value).getTime() <=
      new Date(e.target.clasificationStartDate.value).getTime()
    ) {
      alert(
        "la fecha de fin del clafificatorio debe ser superior a la de inicio"
      );
    } else if (
      new Date(e.target.clasificationEndDate.value).getTime() >=
      new Date(e.target.eventEndDate.value).getTime()
    ) {
      alert(
        "la fecha de inicio del clafificatorio no puede ser superior a la de finalización del evento"
      );
    } else if (
      new Date(e.target.semifinalStartDate.value).getTime() <=
      new Date(e.target.clasificationEndDate.value).getTime()
    ) {
      alert(
        "la fecha de inicio de la semifinal debe ser superior a la de finalización del clasificatorio"
      );
    } else if (
      new Date(e.target.semifinalStartDate.value).getTime() >
      new Date(e.target.eventEndDate.value).getTime()
    ) {
      alert(
        "la fecha de inicio de la semifinal no puede ser superior a la de finalización del evento"
      );
    } else if (
      new Date(e.target.semifinalEndDate.value).getTime() <=
      new Date(e.target.semifinalStartDate.value).getTime()
    ) {
      alert("la fecha de fin de la semifinal debe ser superior a la de inicio");
    } else if (
      new Date(e.target.semifinalEndDate.value).getTime() >
      new Date(e.target.eventEndDate.value).getTime()
    ) {
      alert(
        "la fecha de fin de la semifinal debe no puede ser superior a la de finalizacion del evento"
      );
    } else if (
      new Date(e.target.finalStartDate.value).getTime() <=
      new Date(e.target.semifinalEndDate.value).getTime()
    ) {
      alert(
        "la fecha de inicio de la final debe ser superior a la de fin de la semifinal"
      );
    } else if (
      new Date(e.target.finalStartDate.value).getTime() >=
      new Date(e.target.eventEndDate.value).getTime()
    ) {
      alert(
        "la fecha de inicio de la final no puede ser superior a la de fin del evento"
      );
    } else if (
      new Date(e.target.finalEndDate.value).getTime() <=
      new Date(e.target.finalStartDate.value).getTime()
    ) {
      alert("la fecha de fin de la final debe ser superior a la de inicio");
    } else if (
      new Date(e.target.finalEndDate.value).getTime() >
      new Date(e.target.eventEndDate.value).getTime()
    ) {
      alert(
        "la fecha de fin de la final no puede ser superior a la de finalización del evento"
      );
    } else {
      const token = localStorage.getItem("token");
      const body = new FormData(e.target);
      body.set(
        "eventStartDate",
        new Date(e.target.eventStartDate.value).getTime()
      );
      body.set("eventEndDate", new Date(e.target.eventEndDate.value).getTime());
      body.set("eliteCategory", e.target.elite_category.checked);
      body.set("rxCategory", e.target.rx_category.checked);
      body.set("scCategory", e.target.sc_category.checked);
      body.set("teamCategory", e.target.team_category.checked);
      body.set(
        "clasificationStartDate",
        new Date(e.target.clasificationStartDate.value).getTime()
      );
      body.set(
        "clasificationEndDate",
        new Date(e.target.clasificationEndDate.value).getTime()
      );
      body.set(
        "semifinalStartDate",
        new Date(e.target.semifinalStartDate.value).getTime()
      );
      body.set(
        "semifinalEndDate",
        new Date(e.target.semifinalEndDate.value).getTime()
      );
      body.set(
        "finalStartDate",
        new Date(e.target.finalStartDate.value).getTime()
      );
      body.set("finalEndDate", new Date(e.target.finalEndDate.value).getTime());

      addEvents(body, token);
      setShow(false);
    }
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
          {t("eventInfo.evAddTittle")}
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
                  <Form.Group className="mb-3" controlId="formBasicFile">
                    <Form.Label>
                      {" "}
                      {`${t("actualizar_datos.imagen")}`}
                    </Form.Label>
                    <Form.Control
                      name="file"
                      type="file"
                      placeholder="select an image"
                      required
                    />
                  </Form.Group>
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
                      <Form.Label> {t("eventInfo.evName")} </Form.Label>
                      <Form.Control
                        name="eventName"
                        type="name"
                        placeholder={`${t("eventInfo.evNameHolder")}`}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCity">
                      <Form.Label>{t("eventInfo.evCity")}</Form.Label>
                      <Form.Control
                        name="eventCity"
                        type="city"
                        placeholder={`${t("eventInfo.evCityHolder")}`}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDirection">
                      <Form.Label>{t("eventInfo.evDirection")}</Form.Label>
                      <Form.Control
                        name="eventAddres"
                        type="addres"
                        placeholder={`${t("eventInfo.evDirectinHolder")}`}
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
                      <Form.Label>{t("eventInfo.evStartDate")}</Form.Label>
                      <Form.Control
                        name="eventStartDate"
                        type="date"
                        required
                        min={getCurrentDate()}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDate">
                      <Form.Label>{t("eventInfo.evEndDate")}</Form.Label>
                      <Form.Control
                        name="eventEndDate"
                        type="date"
                        required
                        min={getCurrentDate()}
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
                      <Form.Label>{t("eventInfo.evLimAsistant")}</Form.Label>
                      <Form.Control
                        name="eventLimitPerson"
                        type="number"
                        placeholder={`${t("eventInfo.evLimAsistantHolder")}`}
                        min="10"
                        required
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 "
                      controlId="formBasicCheckbox"
                      required
                    >
                      <Form.Label>{t("eventInfo.evCategory")}</Form.Label>

                      <div className="d-flex gap-2">
                        <Form.Check
                          name="elite_category"
                          type="checkbox"
                          label="Elite"
                        />
                        <Form.Check
                          name="rx_category"
                          type="checkbox"
                          label="RX"
                        />
                        <Form.Check
                          name="sc_category"
                          type="checkbox"
                          label="SC"
                        />
                        <Form.Check
                          name="team_category"
                          type="checkbox"
                          label="Team"
                        />
                      </div>
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
                    <Form.Label>{t("eventInfo.evShortDescript")}</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="shortDescription"
                      placeholder={`${t("eventInfo.evShortDescriptHolder")}`}
                      maxLength="95"
                      style={{ height: "90px" }}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>{t("eventInfo.evLongDescript")}</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="longDescription"
                      placeholder={`${t("eventInfo.evLongDescriptHolder")}`}
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
                        controlId="formBasicRadio"
                        required
                      >
                        <Form.Label>
                          {t("eventInfo.evClasification")}
                        </Form.Label>

                        <div className="d-flex gap-2">
                          <Form.Check
                            name="clasificationType"
                            type="radio"
                            value="presencial"
                            label={`${t("eventInfo.clasificationPresencial")}`}
                            required
                          />
                          <Form.Check
                            name="clasificationType"
                            type="radio"
                            value="online"
                            label={`${t("eventInfo.clasificationOnline")}`}
                            required
                          />
                        </div>
                      </Form.Group>
                      <div className="d-flex gap-2">
                        <Form.Group className="mb-3" controlId="formBasicDate">
                          <Form.Label>{t("eventInfo.evStartDate")}</Form.Label>
                          <Form.Control
                            name="clasificationStartDate"
                            type="date"
                            required
                            min={getCurrentDate()}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDate">
                          <Form.Label>{t("eventInfo.evEndDate")}</Form.Label>
                          <Form.Control
                            name="clasificationEndDate"
                            type="date"
                            required
                            min={getCurrentDate()}
                          />
                        </Form.Group>
                      </div>
                    </Col>
                    <Col>
                      <Form.Group
                        className="mb-3 "
                        controlId="formBasicRadio1"
                        required
                      >
                        <Form.Label>{t("eventInfo.evSemifinal")}</Form.Label>

                        <div className="d-flex gap-2">
                          <Form.Check
                            name="semifinalType"
                            type="radio"
                            value="presencial"
                            label={`${t("eventInfo.clasificationPresencial")}`}
                            required
                          />
                          <Form.Check
                            name="semifinalType"
                            type="radio"
                            value="online"
                            label={`${t("eventInfo.clasificationOnline")}`}
                            required
                          />
                        </div>
                      </Form.Group>
                      <div className="d-flex gap-2">
                        <Form.Group className="mb-3" controlId="formBasicDate">
                          <Form.Label>{t("eventInfo.evStartDate")}</Form.Label>
                          <Form.Control
                            name="semifinalStartDate"
                            type="date"
                            min={getCurrentDate()}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDate">
                          <Form.Label>{t("eventInfo.evEndDate")}</Form.Label>
                          <Form.Control
                            name="semifinalEndDate"
                            type="date"
                            min={getCurrentDate()}
                            required
                          />
                        </Form.Group>
                      </div>
                    </Col>
                    <Col>
                      <Form.Group
                        className="mb-3 "
                        controlId="formBasicRadio2"
                        required
                      >
                        <Form.Label>{t("eventInfo.evFinal")}</Form.Label>

                        <div className="d-flex gap-2">
                          <Form.Check
                            name="finalType"
                            type="radio"
                            value="presencial"
                            label={`${t("eventInfo.clasificationPresencial")}`}
                            required
                          />
                          <Form.Check
                            name="finalType"
                            type="radio"
                            value="online"
                            label={`${t("eventInfo.clasificationOnline")}`}
                            required
                          />
                        </div>
                      </Form.Group>
                      <div className="d-flex gap-2">
                        <Form.Group className="mb-3" controlId="formBasicDate">
                          <Form.Label>{t("eventInfo.evStartDate")}</Form.Label>
                          <Form.Control
                            name="finalStartDate"
                            type="date"
                            min={getCurrentDate()}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDate">
                          <Form.Label>{t("eventInfo.evEndDate")}</Form.Label>
                          <Form.Control
                            name="finalEndDate"
                            type="date"
                            min={getCurrentDate()}
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
              <Button type="submit">{t("eventInfo.evAdd")}</Button>
            </Col>
            <Col
              xs={{ span: 1, offset: 0 }}
              sm={{ span: 1, offset: 0 }}
              md={{ span: 1, offset: 0 }}
              lg={{ span: 1, offset: 0 }}
              xl={{ span: 1, offset: 0 }}
              xxl={{ span: 1, offset: 0 }}
            >
              <Button onClick={() => setShow(false)}>
                {t("eventInfo.evCancel")}
              </Button>
            </Col>
          </Card>
        </Row>
      </Form>
    </Modal>
  );
}

export default AddEvent;
