import "./login.scss";
import React from "react";
import HeaderLogIn from "./header-login/header-login";
import HeroLogin from "./hero-login/hero-login";
import LoginForm from "./login-form/login-form";
import Footer from "../../components/footer/footer";

function LogIn() {
  const updateThemingCssVariables = () => {
    document.body.style.setProperty("overflow", "auto");
    document.body.style.setProperty("padding", "0px");
    document.body.style.setProperty("height", "0px");
    document.body.removeAttribute("data-rr-ui-modal-open");
    document.body.classList.remove("modal-open");
  };

  return (
    <React.Fragment>
      <HeaderLogIn></HeaderLogIn>
      <HeroLogin></HeroLogin>
      <LoginForm
        show={true}
        backdrop={false}
        onEntered={updateThemingCssVariables}
      ></LoginForm>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default LogIn;
