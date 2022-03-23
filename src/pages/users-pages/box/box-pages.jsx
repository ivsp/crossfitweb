import React from "react";
import BodyBox from "../../../components/body-boxes/body-boxes";
import Footer from "../../../components/footer/footer";
import Header from "../../../components/header/header";

function BoxPage() {
  return (
    <React.Fragment>
      <Header></Header>
      <BodyBox></BodyBox>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default BoxPage;
