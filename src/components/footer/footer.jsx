import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./footer.scss";
function Footer() {
  return (
    <Row
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
      xxl={12}
      style={{
        width: "100%",
        padding: "0px",
        height: "5vh",
        backgroundColor: "black",
        marginTop: "auto",
        marginLeft: "0px",
        marginRight: "0px",
        color: "white",
        // position: "fixed",
        bottom: "0px",
      }}
    >
      <Col
        style={{
          padding: "0px",
          margin: "0px 0px",
        }}
      >
        FOOTER
      </Col>
    </Row>
  );
}

export default Footer;
