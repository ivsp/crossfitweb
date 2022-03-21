import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { validateNewUser } from "../../APP/fetch/fetch-functions";
//import Footer from "../../components/footer/footer";
//import { UserContext } from "../../shared/user-info/user.context";
import HeaderLogIn from "../login/header-login/header-login";
import HeroLogin from "../login/hero-login/hero-login";
import ValidateBody from "./components/container-info/validate-modal";

function Validate() {
  // const [userName, setUserName] = useContext(UserContext);
  const navigate = useNavigate();
  const [params] = useSearchParams();

  // const updateThemingCssVariables = () => {
  //   document.body.style.setProperty("overflow", "auto");
  //   document.body.style.setProperty("padding", "0px");
  //   //document.body.style.setProperty("height", "0px");
  //   document.body.removeAttribute("data-rr-ui-modal-open");
  //   document.body.classList.remove("modal-open");
  // };

  useEffect(() => {
    console.log(params.get("token"));
    validateNewUser(params.get("token"));

    setTimeout(
      () => {
        navigate("/login");
      },

      4000
    );
  }, []);

  return (
    <React.Fragment>
      <HeaderLogIn></HeaderLogIn>
      <HeroLogin></HeroLogin>
      <ValidateBody></ValidateBody>
      {/* <Footer></Footer> */}
    </React.Fragment>
  );
}

export default Validate;
