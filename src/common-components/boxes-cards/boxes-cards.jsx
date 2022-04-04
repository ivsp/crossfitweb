import "./../cities-cards/cities-cards.scss";
import "./boxes-cards.scss";
import Card from "react-bootstrap/Card";

function BoxesCards({ box, image }) {
  return (
    <Card className="card__box_container">
      <Card.Img
        style={{
          width: "100%",
        }}
        className="image_container"
        variant="top"
        src={image}
      />
      <Card.Body className="card-body__container">
        <Card.Title className="card-body_tittle">{box.name}</Card.Title>
        <Card.Text className="card-body_parr">{box.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BoxesCards;
