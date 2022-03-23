import "./box-info.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import giraldaCr from "./../../assets/images/boxes/giralda.png";
import { useContext } from "react";
import { ThemingContext } from "../../shared/theming/theming.context";

function BoxInfo() {
  const [theming] = useContext(ThemingContext);
  return (
    <Row style={{ margin: "0px", height: "fit-content", paddingTop: "1.5rem" }}>
      <Col
        xs={{ span: 12, offset: 0 }}
        sm={{ span: 12, offset: 0 }}
        md={{ span: 10, offset: 1 }}
        lg={{ span: 10, offset: 1 }}
        xl={{ span: 10, offset: 1 }}
        xxl={{ span: 10, offset: 1 }}
      >
        <Card className="box-info_container">
          <div className="image_container">
            <Card.Img className="image_profile" variant="top" src={giraldaCr} />
            <Button variant={theming.primary.color}>Cambiar Imagen</Button>
          </div>
          <Card.Body>
            <Card.Title className="box-name">Giralda CrossFit</Card.Title>
            <Card.Text className="tittle-description">Dirección:</Card.Text>
            <Card.Text className="tittle-value">C/Balbino Marrón 3</Card.Text>
            <div className="location-data_container">
              <div>
                <Card.Text className="tittle-description">Cuidad:</Card.Text>
                <Card.Text className="tittle-value">Sevilla</Card.Text>
              </div>
              <div>
                <Card.Text className="tittle-description">Provincia:</Card.Text>
                <Card.Text className="tittle-value">Sevilla</Card.Text>
              </div>
              <div>
                <Card.Text className="tittle-description">CP:</Card.Text>
                <Card.Text className="tittle-value">41018</Card.Text>
              </div>
            </div>

            <div className="flex-container">
              <div>
                <Card.Text className="tittle-description">Teléfono</Card.Text>
                <Card.Text className="tittle-value">678154860</Card.Text>
              </div>
              <Button
                style={{
                  height: "fit-content",
                }}
                variant={theming.primary.color}
              >
                Modificar datos
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default BoxInfo;
