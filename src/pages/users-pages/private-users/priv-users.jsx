import React from "react";
import BodyUser from "../../../components/body-users/body-users";
import Footer from "../../../components/footer/footer";
import Header from "../../../components/header/header";

function UsersPage() {
  return (
    <React.Fragment>
      <Header></Header>
      <BodyUser></BodyUser>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default UsersPage;
