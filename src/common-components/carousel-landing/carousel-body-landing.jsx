import "./carousel-body-landing.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/images/landing/image1.jpg";
import image2 from "../../assets/images/landing/image2.jpg";
import image3 from "../../assets/images/landing/image3.jpg";
import image4 from "../../assets/images/landing/image4.jpg";
import { useTranslation } from "react-i18next";

function CarouselBodyLanding() {
  const [t] = useTranslation("landing");

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
                <h2 className="carousel_tittle">
                  {" "}
                  {t("carousel.banner_text1_tittle")}
                </h2>
                <p className="carousel_text">
                  {t("carousel.banner_text1_body")}
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
                <h2 className="carousel_tittle">
                  {t("carousel.banner_text2_tittle")}
                </h2>
                <p className="carousel_text">
                  {t("carousel.banner_text2_body")}
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
                <h2 className="carousel_tittle">
                  {t("carousel.banner_text3_tittle")}
                </h2>
                <p className="carousel_text">
                  {t("carousel.banner_text3_body")}
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
