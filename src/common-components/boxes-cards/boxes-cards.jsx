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
        <Card.Title className="card-body_tittle">{box}</Card.Title>
        <Card.Text className="card-body_parr">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BoxesCards;
