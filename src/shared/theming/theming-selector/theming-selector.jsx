import { useContext } from "react";
import { ThemingContext } from "../theming.context";
import Form from "react-bootstrap/Form";
import React from "react";

function ThemingSelector() {
  const [theming, setTheming] = useContext(ThemingContext);

  const changeTheme = (e) => {
    if (theming === "L") {
      setTheming("D");
    } else {
      setTheming("L");
    }
  };

  return (
    <React.Fragment>
      <Form onChange={changeTheme}>
        <Form.Check className="toggle" type="switch" id={theming} />
      </Form>
    </React.Fragment>
  );
}

export default ThemingSelector;
