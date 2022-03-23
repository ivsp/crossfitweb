import React from "react";
import BoxEventsInfo from "../../common-components/box-events-info/box-events-info";
import BoxInfo from "../../common-components/box-info/box-info";
import "./body-boxes.scss";

function BodyBox() {
  return (
    <React.Fragment>
      <BoxInfo></BoxInfo>
      <BoxEventsInfo></BoxEventsInfo>
    </React.Fragment>
  );
}

export default BodyBox;
