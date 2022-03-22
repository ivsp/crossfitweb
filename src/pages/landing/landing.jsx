import React from "react";
import BodyLanding from "../../components/body-landing/body-landing";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import HeroLogin from "../login/hero-login/hero-login";

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
