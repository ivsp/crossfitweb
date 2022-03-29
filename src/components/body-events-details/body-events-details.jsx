import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import imageTaronja from "../../assets/images/taronja.png";
import { useContext, useEffect, useState } from "react";
import { ThemingContext } from "../../shared/theming/theming.context";
import { useTranslation } from "react-i18next";
import { EventContext } from "../../shared/event-info/event.context";
import { returnDateByTimeStamp } from "../../APP/functions/functions";
import { useParams } from "react-router-dom";
import {
  addAthlete,
  addUserToaEvent,
  getAllCurrentsEvents,
} from "../../APP/fetch/fetch-functions";
import EventJointAlert from "../../common-components/alerts/event-join-alert";
import EventJointSuccses from "../../common-components/alerts/event-join-succses";

function BodyEventsDetails() {
  const [theming] = useContext(ThemingContext);
  const [t] = useTranslation("users");
  const [, , , , , setCurrentsEventsData] = useContext(EventContext);
  const [eventDetails, setEventDetails] = useState({});
  const { evname } = useParams();
  const [alertErrShow, setAlertErrShow] = useState(false);
  const [alertSuccShow, setAlertSuccShow] = useState(false);

  async function getAllEvents() {
    const events = await getAllCurrentsEvents();
    setCurrentsEventsData(events);
    const currentEvent = events.find((e) => e.eventName === evname);
    setEventDetails(currentEvent);
    return currentEvent;
  }

  const addUser = async () => {
    const bodyForEvent = {
      eventName: eventDetails.eventName,
    };
    const bodyForAthlete = {
      eventName: eventDetails.eventName,
      eventStartDate: eventDetails.eventStartDate,
      eventEndDate: eventDetails.eventEndDate,
      eventCity: eventDetails.eventCity,
    };
    const token = localStorage.getItem("token");
    if (token && token !== undefined) {
      const data = await addUserToaEvent(bodyForEvent, token);

      const athlete = await addAthlete(bodyForAthlete, token);
      if (data.error || athlete.error) {
        setAlertErrShow(true);
      } else {
        setAlertSuccShow(true);
      }
    }
  };

  useEffect(() => {
    setEventDetails(getAllEvents());
  }, [evname]);

  return (
    <Row
      style={{
        margin: "0px",
        padding: "1rem 0rem",
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
          style={{
            fontFamily: "rubik-regular",
            border: "none",
            paddingBottom: "2.5rem",
          }}
        >
          <Row
            style={{
              paddingTop: "1rem",
            }}
          >
            <Col
              xs={{ span: 11, offset: 0 }}
              sm={{ span: 4, offset: 3 }}
              md={{ span: 4, offset: 4 }}
              lg={{ span: 4, offset: 5 }}
              xl={{ span: 4, offset: 5 }}
              xxl={{ span: 4, offset: 5 }}
            >
              <img
                style={{
                  height: "200px",
                }}
                src={imageTaronja}
                alt=""
              />
            </Col>
          </Row>
          <Row
            style={{
              paddingTop: "1rem",
            }}
          >
            <Col
              style={{
                fontFamily: "rubik-semibold",
              }}
            >
              <h1>{eventDetails?.eventName}</h1>
            </Col>
          </Row>
          <Row
            style={{
              paddingTop: "0.5rem",
            }}
          >
            <Col
              xs={12}
              sm={{ span: 6, offset: 0 }}
              md={{ span: 5, offset: 0 }}
              lg={{ span: 5, offset: 0 }}
              xl={{ span: 5, offset: 0 }}
              xxl={{ span: 5, offset: 0 }}
            >
              {t("eventInfo.evStartDate")}:{" "}
              {returnDateByTimeStamp(eventDetails?.eventStartDate)}
            </Col>
            <Col
              xs={12}
              sm={{ span: 5, offset: 0 }}
              md={{ span: 5, offset: 0 }}
              lg={{ span: 5, offset: 0 }}
              xl={{ span: 5, offset: 0 }}
              xxl={{ span: 5, offset: 0 }}
            >
              {t("eventInfo.evEndDate")}:{" "}
              {returnDateByTimeStamp(eventDetails?.eventEndDate)}
            </Col>
          </Row>
          <Row
            style={{
              paddingTop: "0.5rem",
            }}
          >
            <Col>
              <p>
                {t("eventInfo.evCity")}: {eventDetails?.eventCity}
              </p>
            </Col>
          </Row>
          <Row
            style={{
              paddingTop: "0.5rem",
            }}
          >
            <Col>
              <p>{eventDetails?.longDescription}</p>
            </Col>
          </Row>
          <Row
            style={{
              paddingTop: "1rem",
            }}
          >
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              xxl={12}
              style={{
                paddingBottom: "0.2rem",
              }}
            >
              {t("eventInfo.evClasification")}:{" "}
              {eventDetails?.clasificationType === "presencial"
                ? `${t("eventInfo.clasificationPresencial")}`
                : `${t("eventInfo.clasificationOnline")}`}
            </Col>
            <Col
              xs={12}
              sm={{ span: 6, offset: 0 }}
              md={{ span: 5, offset: 0 }}
              lg={{ span: 5, offset: 0 }}
              xl={{ span: 5, offset: 0 }}
              xxl={{ span: 5, offset: 0 }}
            >
              {t("eventInfo.evStartDate")}:{" "}
              {returnDateByTimeStamp(eventDetails?.clasificationStartDate)}
            </Col>
            <Col
              xs={12}
              sm={{ span: 5, offset: 0 }}
              md={{ span: 5, offset: 0 }}
              lg={{ span: 5, offset: 0 }}
              xl={{ span: 5, offset: 0 }}
              xxl={{ span: 5, offset: 0 }}
            >
              {t("eventInfo.evEndDate")}:{" "}
              {returnDateByTimeStamp(eventDetails?.clasificationEndDate)}
            </Col>
          </Row>
          <Row
            style={{
              paddingTop: "1rem",
            }}
          >
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              xxl={12}
              style={{
                paddingBottom: "0.2rem",
              }}
            >
              {t("eventInfo.evSemifinal")}:{" "}
              {eventDetails?.semifinalType === "presencial"
                ? `${t("eventInfo.clasificationPresencial")}`
                : `${t("eventInfo.clasificationOnline")}`}
            </Col>
            <Col
              xs={12}
              sm={{ span: 6, offset: 0 }}
              md={{ span: 5, offset: 0 }}
              lg={{ span: 5, offset: 0 }}
              xl={{ span: 5, offset: 0 }}
              xxl={{ span: 5, offset: 0 }}
            >
              {t("eventInfo.evStartDate")}:{" "}
              {returnDateByTimeStamp(eventDetails?.semifinalStartDate)}
            </Col>
            <Col
              xs={12}
              sm={{ span: 5, offset: 0 }}
              md={{ span: 5, offset: 0 }}
              lg={{ span: 5, offset: 0 }}
              xl={{ span: 5, offset: 0 }}
              xxl={{ span: 5, offset: 0 }}
            >
              {t("eventInfo.evEndDate")}:{" "}
              {returnDateByTimeStamp(eventDetails?.semifinalEndDate)}
            </Col>
          </Row>
          <Row
            style={{
              paddingTop: "1rem",
            }}
          >
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              xxl={12}
              style={{
                paddingBottom: "0.2rem",
              }}
            >
              {t("eventInfo.evFinal")}:{" "}
              {eventDetails?.finalType === "presencial"
                ? `${t("eventInfo.clasificationPresencial")}`
                : `${t("eventInfo.clasificationOnline")}`}
            </Col>
            <Col
              xs={12}
              sm={{ span: 6, offset: 0 }}
              md={{ span: 5, offset: 0 }}
              lg={{ span: 5, offset: 0 }}
              xl={{ span: 5, offset: 0 }}
              xxl={{ span: 5, offset: 0 }}
            >
              {t("eventInfo.evStartDate")}:{" "}
              {returnDateByTimeStamp(eventDetails?.finalStartDate)}
            </Col>
            <Col
              xs={12}
              sm={{ span: 5, offset: 0 }}
              md={{ span: 5, offset: 0 }}
              lg={{ span: 5, offset: 0 }}
              xl={{ span: 5, offset: 0 }}
              xxl={{ span: 5, offset: 0 }}
            >
              {t("eventInfo.evEndDate")}:{" "}
              {returnDateByTimeStamp(eventDetails?.finalEndDate)}
            </Col>
          </Row>
          <Row
            style={{
              paddingTop: "3rem",
            }}
          >
            {" "}
            <EventJointAlert
              show={alertErrShow}
              setShow={setAlertErrShow}
            ></EventJointAlert>
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: "auto", offset: 3 }}
              md={{ span: "auto", offset: 4 }}
              lg={{ span: "auto", offset: 5 }}
              xl={{ span: "auto", offset: 5 }}
              xxl={{ span: "auto", offset: 5 }}
            >
              <Button
                onClick={addUser}
                variant={theming.primary.color}
                style={{
                  padding: "0.5rem 1rem",
                }}
              >
                {t("eventInfo.evJoin")}
              </Button>
            </Col>
          </Row>
          <EventJointSuccses
            show={alertSuccShow}
            setShow={setAlertSuccShow}
          ></EventJointSuccses>
        </Card>
      </Col>
    </Row>
  );
}

export default BodyEventsDetails;
