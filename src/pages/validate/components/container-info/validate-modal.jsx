import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";

function ValidateBody(props) {
  const [t] = useTranslation("header");
  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");

  return (
    <Container>
      <h1>Bienvenido</h1>
    </Container>
  );
}

export default ValidateBody;
