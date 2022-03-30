import React from "react";
import BodyNotFound from "../../components/body-not-found/body-not-found";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

function NotFound() {
  return (
    <React.Fragment>
      <Header></Header>
      <BodyNotFound></BodyNotFound>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default NotFound;
