import "./carousel-body-landing.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/images/landing/image1.jpg";
import image2 from "../../assets/images/landing/image2.jpg";
import image3 from "../../assets/images/landing/image3.jpg";
import image4 from "../../assets/images/landing/image4.jpg";

function CarouselBodyLanding() {
  return (
    <Row
      style={{
        padding: "2rem 0rem",
        margin: "0px",
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
        <Carousel>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100 carousel_image"
              src={image2}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="container_data">
                <h2 className="carousel_tittle"> ¿QUÉ ES WOD TARGET?</h2>
                <p className="carousel_text">
                  Wod Target nace como un lugar de conexión entre los centros
                  deportivos y los amantes del CrossFit y el CrossTraining. Con
                  el objetivo de crear una comunidad sólida donde los usuarios
                  puedan compartir experiecias.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100 carousel_image"
              src={image4}
              alt="Second slide"
            />

            <Carousel.Caption>
              <div className="container_data">
                <h2 className="carousel_tittle">¿POR QUÉ WOD TARGET?</h2>
                <p className="carousel_text">
                  Wod Target es la web ideal para encontrar los mejores eventos
                  de CrossFit, un lugar para sacar esa bestia que llevas dentro
                  y convertirte en un gran atleta.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100 carousel_image"
              src={image3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className="container_data">
                <h2 className="carousel_tittle">¿CUÁL ES SU OBJETIVO?</h2>
                <p className="carousel_text">
                  Es el lugar perfecto para conocer a nuevas personas, conseguir
                  tus metas y disfrutar del buen ambiente que caracteriza a este
                  deporte.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
}

export default CarouselBodyLanding;
