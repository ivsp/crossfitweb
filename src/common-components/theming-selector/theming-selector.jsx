import { useContext } from "react";
import { ThemingContext } from "../../shared/theming/theming.context";
import Form from "react-bootstrap/Form";
import React from "react";
import { theme } from "../../shared/theming/theming.context";

function ThemingSelector() {
  const [theming, setTheming] = useContext(ThemingContext);

  const changeTheme = (e) => {
    console.log(theming);
    if (theming === theme[0]) {
      setTheming(theme[1]);
    } else {
      setTheming(theme[0]);
    }
  };

  return (
    <React.Fragment>
      <div className="show-selector" onChange={changeTheme}>
        <Form.Check className="toggle " type="switch" id={theming} />
      </div>
    </React.Fragment>
  );
}

export default ThemingSelector;
