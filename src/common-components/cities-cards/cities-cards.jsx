import "./cities-cards.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { ThemingContext } from "../../shared/theming/theming.context";
import { useTranslation } from "react-i18next";

function CitiesCards({ city, image }) {
  const [theming] = useContext(ThemingContext);
  const [t] = useTranslation("landing");

  return (
    <Card className="card__container">
      <Card.Img
        style={{
          width: "100%",
        }}
        className="image_container"
        variant="top"
        src={image}
      />
      <Card.Body className="card-body__container">
        <Card.Title className="card-body_tittle">{city.name}</Card.Title>
        <Card.Text className="card-body_parr">{city.description}</Card.Text>
        <Button className="event_button" variant={theming.soft_details.color}>
          {t("events_area.popular_events_button")}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CitiesCards;
