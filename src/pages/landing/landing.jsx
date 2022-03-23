import React from "react";
import BodyLanding from "../../components/body-landing/body-landing";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

function Landing() {
  return (
    <React.Fragment>
      <Header></Header>
      <BodyLanding></BodyLanding>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Landing;
