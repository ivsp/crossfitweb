import "./box-info.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import giraldaCr from "./../../assets/images/boxes/giralda.png";
import { useContext, useState } from "react";
import { ThemingContext } from "../../shared/theming/theming.context";
import ChangeBoxInfo from "./modals/change-box-info";
import { UserContext } from "../../shared/user-info/user.context";

function BoxInfo() {
  const [theming] = useContext(ThemingContext);
  const [modalModifyDataShow, setModalModifyDataShow] = useState(false);
  const [userData, setUserData] = useContext(UserContext);

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
          </div>
          <Card.Body>
            <Card.Title className="box-name">{userData.name}</Card.Title>
            <Card.Text className="tittle-description">Dirección:</Card.Text>
            <Card.Text className="tittle-value">{userData.addres}</Card.Text>
            <div className="location-data_container">
              <div>
                <Card.Text className="tittle-description">Cuidad:</Card.Text>
                <Card.Text className="tittle-value">{userData.city}</Card.Text>
              </div>
              <div>
                <Card.Text className="tittle-description">Provincia:</Card.Text>
                <Card.Text className="tittle-value">
                  {userData.province}
                </Card.Text>
              </div>
              <div>
                <Card.Text className="tittle-description">CP:</Card.Text>
                <Card.Text className="tittle-value">
                  {userData.postal_code}
                </Card.Text>
              </div>
            </div>

            <div className="flex-container">
              <div>
                <Card.Text className="tittle-description">Teléfono</Card.Text>
                <Card.Text className="tittle-value">{userData.phone}</Card.Text>
              </div>
              <Button
                style={{
                  height: "fit-content",
                }}
                variant={theming.primary.color}
                onClick={() => setModalModifyDataShow(true)}
              >
                Modificar datos
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <ChangeBoxInfo
        show={modalModifyDataShow}
        onHide={() => setModalModifyDataShow(false)}
        userdata={userData}
        setUserdata={setUserData}
      ></ChangeBoxInfo>
    </Row>
  );
}

export default BoxInfo;
