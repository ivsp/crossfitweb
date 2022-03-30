import Alert from "react-bootstrap/Alert";
import { useTranslation } from "react-i18next";

function OpinionAlert({ show, setShow }) {
  const [t] = useTranslation("alerts");

  if (show) {
    return (
      <Alert variant="warning" onClose={() => setShow(false)} dismissible>
        <p
          style={{
            fontFamily: "rubik-regular",
          }}
        >
          {t("alert.opinionWarning")}
        </p>
      </Alert>
    );
  }
  return "";
}

export default OpinionAlert;
