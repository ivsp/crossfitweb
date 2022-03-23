import "./footer.scss";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
//<i class="fa-brands fa-twitter-square"></i>
function Footer() {
  const navigate = useNavigate();
  return (
    <Row
      className="footer_container"
      style={{
        margin: "0px",
      }}
    >
      <Col
        className=""
        xs={{ span: 10, offset: 2 }}
        sm={{ span: 10, offset: 2 }}
        md={{ span: 10, offset: 2 }}
        lg={{ span: 10, offset: 2 }}
        xl={{ span: 10, offset: 2 }}
        xxl={{ span: 10, offset: 2 }}
        style={{
          paddingBottom: "1rem",
        }}
      >
        <Row>
          <Col
            xs={{ span: 1, offset: 0 }}
            sm={{ span: 1, offset: 0 }}
            md={{ span: 2, offset: 0 }}
            lg={{ span: 1, offset: 0 }}
            xl={{ span: 1, offset: 0 }}
            xxl={{ span: 1, offset: 0 }}
          >
            <Nav.Link href="https://www.instagram.com/">
              <FontAwesomeIcon
                className="icons"
                icon={faInstagram}
              ></FontAwesomeIcon>
            </Nav.Link>
          </Col>
          <Col
            xs={{ span: 1, offset: 3 }}
            sm={{ span: 1, offset: 3 }}
            md={{ span: 1, offset: 3 }}
            lg={{ span: 1, offset: 4 }}
            xl={{ span: 2, offset: 3 }}
            xxl={{ span: 1, offset: 3 }}
          >
            <Nav.Link href="https://twitter.com/home">
              <FontAwesomeIcon
                className="icons"
                icon={faTwitterSquare}
              ></FontAwesomeIcon>
            </Nav.Link>
          </Col>
          <Col
            xs={{ span: 1, offset: 3 }}
            sm={{ span: 1, offset: 3 }}
            md={{ span: 1, offset: 3 }}
            lg={{ span: 1, offset: 3 }}
            xl={{ span: 1, offset: 3 }}
            xxl={{ span: 1, offset: 3 }}
          >
            <Nav.Link href="https://www.youtube.com/">
              <FontAwesomeIcon
                className="icons"
                icon={faYoutube}
              ></FontAwesomeIcon>
            </Nav.Link>
          </Col>
        </Row>
      </Col>
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
            xs={{ span: 4, offset: 0 }}
            sm={{ span: 4, offset: 0 }}
            md={{ span: 5, offset: 0 }}
            lg={{ span: 5, offset: 0 }}
            xl={{ span: 4, offset: 0 }}
            xxl={{ span: 4, offset: 0 }}
          >
            <p className="text_footer"> Copyright © 2021 - www.targetwod.com</p>
          </Col>
          <Col
            onClick={() => navigate("/")}
            xs={{ span: 3, offset: 1 }}
            sm={{ span: 3, offset: 1 }}
            md={{ span: 3, offset: 1 }}
            lg={{ span: 3, offset: 1 }}
            xl={{ span: 4, offset: 1 }}
            xxl={{ span: 3, offset: 1 }}
          >
            <p className="text_footer">Politica de privacidad</p>
          </Col>
          <Col
            onClick={() => navigate("/")}
            xs={{ span: 2, offset: 1 }}
            sm={{ span: 2, offset: 1 }}
            md={{ span: 2, offset: 1 }}
            lg={{ span: 2, offset: 1 }}
            xl={{ span: 2, offset: 1 }}
            xxl={{ span: 2, offset: 1 }}
          >
            <p className="text_footer">Contacto</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Footer;
