import "./body-landing.scss";

import CarouselBodyLanding from "../../common-components/carousel-landing/carousel-body-landing";
import FindEvent from "./components/find-event-body";
import React from "react";

function BodyLanding() {
  return (
    <React.Fragment>
      <CarouselBodyLanding></CarouselBodyLanding>
      <FindEvent></FindEvent>
    </React.Fragment>
  );
}

export default BodyLanding;
