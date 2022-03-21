import React from "react";
import SearchingArea from "../../../common-components/searching-area/searching-area";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import BodyUser from "../../../components/body-user/body-user";

function UserPages() {
  return (
    <React.Fragment>
      <Header></Header>
      <SearchingArea></SearchingArea>
      <BodyUser></BodyUser>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default UserPages;
