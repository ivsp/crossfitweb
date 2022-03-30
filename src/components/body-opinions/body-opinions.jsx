import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import { ThemingContext } from "../../shared/theming/theming.context";
import { createNewTestimonie } from "../../APP/fetch/fetch-functions";
import OpinionSuccses from "../../common-components/alerts/opinion-succses";
import { useNavigate } from "react-router-dom";
import OpinionAlert from "../../common-components/alerts/opinion-alert";
import { useTranslation } from "react-i18next";

function BodyOpinion() {
  const [theming] = useContext(ThemingContext);
  const [showSuccses, setShowSuccses] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [t] = useTranslation("testimonies");
  const navigate = useNavigate();

  const addOpinion = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (token && token !== undefined) {
      const body = {
        testimonie: e.target.opinion.value,
      };
      //hacer fetch pasando token y body
      const data = await createNewTestimonie(token, body);
      if (data.testimonie) {
        setShowSuccses(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setShowWarning(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    }
  };

  return (
    <Row
      style={{
        margin: "0px",
      }}
    >
      <Col
        xs={{ span: 10, offset: 1 }}
        sm={{ span: 10, offset: 1 }}
        md={{ span: 10, offset: 1 }}
        lg={{ span: 6, offset: 3 }}
        xl={{ span: 6, offset: 3 }}
        xxl={{ span: 6, offset: 3 }}
        style={{
          padding: "2rem 0rem",
        }}
      >
        <h1>{t("testimonies.titulo")}</h1>
      </Col>
      <Col
        xs={{ span: 10, offset: 1 }}
        sm={{ span: 10, offset: 1 }}
        md={{ span: 10, offset: 1 }}
        lg={{ span: 6, offset: 3 }}
        xl={{ span: 6, offset: 3 }}
        xxl={{ span: 6, offset: 3 }}
        style={{
          padding: "0px",
        }}
      >
        <div>
          <p>{t("testimonies.primerParr")}</p>
          <p>{t("testimonies.segParr")}</p>
        </div>
      </Col>
      <Col
        xs={{ span: 10, offset: 1 }}
        sm={{ span: 10, offset: 1 }}
        md={{ span: 10, offset: 1 }}
        lg={{ span: 5, offset: 3 }}
        xl={{ span: 5, offset: 3 }}
        xxl={{ span: 5, offset: 3 }}
        style={{
          padding: "0px",
        }}
      >
        <Form
          onSubmit={addOpinion}
          style={{
            paddingBottom: "2.5rem",
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control
              as="textarea"
              name="opinion"
              placeholder={`${t("testimonies.placeHolder")}`}
              maxLength="100"
              style={{ height: "200px" }}
              required
            />
          </Form.Group>
          <Button
            style={{
              width: "100%",
            }}
            variant={theming.primary.color}
            type="submit"
          >
            {t("testimonies.submit")}
          </Button>
        </Form>
        <OpinionSuccses show={showSuccses} setShow={setShowSuccses} />
        <OpinionAlert show={showWarning} setShow={setShowWarning} />
      </Col>
    </Row>
  );
}

export default BodyOpinion;
