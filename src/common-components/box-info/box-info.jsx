import "./box-info.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import blankUser from "./../../assets/images/blank-user/user-none.png";
import { useContext, useState } from "react";
import { ThemingContext } from "../../shared/theming/theming.context";
import ChangeBoxInfo from "./modals/change-box-info";
import { UserContext } from "../../shared/user-info/user.context";
import { useTranslation } from "react-i18next";

function BoxInfo() {
  const [theming] = useContext(ThemingContext);
  const [modalModifyDataShow, setModalModifyDataShow] = useState(false);
  const [userData, setUserData] = useContext(UserContext);
  const [t] = useTranslation("users");

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
            <Card.Img
              className="image_profile"
              variant="top"
              src={
                userData?.file
                  ? `${process.env.REACT_APP_URL}/${userData.file}`
                  : blankUser
              }
            />
          </div>
          <Card.Body>
            <Card.Title className="box-name">{userData.name}</Card.Title>
            <Card.Text className="tittle-description">
              {" "}
              {t("userInfo.direccion")}
            </Card.Text>
            <Card.Text className="tittle-value">{userData.addres}</Card.Text>
            <div className="location-data_container">
              <div>
                <Card.Text className="tittle-description">
                  {t("userInfo.ciudad")}
                </Card.Text>
                <Card.Text className="tittle-value">{userData.city}</Card.Text>
              </div>
              <div>
                <Card.Text className="tittle-description">
                  {t("userInfo.provincia")}
                </Card.Text>
                <Card.Text className="tittle-value">
                  {userData.province}
                </Card.Text>
              </div>
              <div>
                <Card.Text className="tittle-description">
                  {t("userInfo.cp")}
                </Card.Text>
                <Card.Text className="tittle-value">
                  {userData.postalCode}
                </Card.Text>
              </div>
            </div>

            <div className="flex-container">
              <div>
                <Card.Text className="tittle-description">
                  {t("userInfo.telefono")}
                </Card.Text>
                <Card.Text className="tittle-value">{userData.phone}</Card.Text>
              </div>
              <Button
                style={{
                  height: "fit-content",
                }}
                variant={theming.primary.color}
                onClick={() => setModalModifyDataShow(true)}
              >
                {t("userInfo.modDatos")}
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <ChangeBoxInfo
        show={modalModifyDataShow}
        setShow={setModalModifyDataShow}
        onHide={() => setModalModifyDataShow(false)}
        userdata={userData}
        setUserdata={setUserData}
      ></ChangeBoxInfo>
    </Row>
  );
}

export default BoxInfo;
