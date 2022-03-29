import Alert from "react-bootstrap/Alert";
import { useTranslation } from "react-i18next";

function EventJointSuccses({ show, setShow }) {
  const [t] = useTranslation("alerts");

  if (show) {
    return (
      <Alert variant="succses" onClose={() => setShow(false)} dismissible>
        <p
          style={{
            fontFamily: "rubik-regular",
          }}
        >
          {t("alert.usuarioapuntado1")}
        </p>
      </Alert>
    );
  }
  return "";
}

export default EventJointSuccses;
