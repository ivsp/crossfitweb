import "./searching-area.scss";
import { ThemingContext } from "../../shared/theming/theming.context";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { EventContext } from "../../shared/event-info/event.context";

function SearchingArea() {
  const [t] = useTranslation("header");
  const [
    ,
    ,
    ,
    ,
    currentEventsData,
    setCurrentsEventsData,
    filterCurrentEventsData,
    setFilterCurrentEventsData,
  ] = useContext(EventContext);

  const [eventName, setEventName] = useState("");
  const [city, setCity] = useState("");
  const [theming] = useContext(ThemingContext);

  const filterByNameAndCity = (currentEvents, eventNameSearch, citySearch) => {
    const event = eventNameSearch.toLowerCase();
    const city = citySearch.toLowerCase();
    return currentEvents.filter(
      (e) =>
        e.eventName.toLowerCase().includes(event) &&
        e.eventCity.toLowerCase().includes(city)
    );
  };

  const filterByName = (e) => {
    setEventName(e.target.value);
    const newFiltered = filterByNameAndCity(
      currentEventsData,
      e.target.value,
      city
    );
    setFilterCurrentEventsData(newFiltered);
  };

  const filterByCity = (e) => {
    setCity(e.target.value);
    const newFiltered = filterByNameAndCity(
      currentEventsData,
      eventName,
      e.target.value
    );
    console.log(newFiltered);
    setFilterCurrentEventsData(newFiltered);
  };

  return (
    <Card
      bg={`${theming.primary.color}`}
      className="searching_conteiner"
      style={{
        fontFamily: "rubik-medium",
      }}
    >
      <Card className="searching_conteiner-info  ">
        <Form className="d-flex justify-content-evenly">
          <Form.Group
            className="pointer  text-center d-flex flex-column align-items-center"
            controlId="formBasic"
            style={{ width: "45%" }}
          >
            <Form.Label
              style={{
                paddingTop: "0.3rem",
              }}
            >
              {t("busqueda.localización")}
            </Form.Label>
            <Form.Control
              onChange={filterByCity}
              style={{
                fontFamily: "rubik-regular",
              }}
              className=" border-0 bg-transparent text-center reset-inputs"
              type="text"
              placeholder={`${t("busqueda.loc_enter")}`}
            />
          </Form.Group>
          <Form.Group
            className="pointer  text-center d-flex justify-content-between align-items-center"
            controlId="formBasicPassword"
            style={{ width: "55%" }}
          >
            <Form.Group className="pointer  text-center d-flex flex-column align-items-center">
              <Form.Label
                style={{
                  paddingTop: "0.3rem",
                }}
              >
                {t("busqueda.categoria")}
              </Form.Label>
              <Form.Control
                onChange={filterByName}
                style={{
                  fontFamily: "rubik-regular",
                }}
                className=" border-0 bg-transparent text-center"
                type="text"
                placeholder={`${t("busqueda.cat_enter")}`}
              />
            </Form.Group>
            <Button
              className="search_button"
              variant={`${theming.strong_details.color}`}
              type="submit"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </Button>
          </Form.Group>
          {/* <Form.Group
            className="p-1   text-center d-flex  align-self-center"
            controlId="formBasicPassword"
            style={{ width: "max-content" }}
          >
         
          </Form.Group> */}
        </Form>
      </Card>
    </Card>
  );
}

export default SearchingArea;
