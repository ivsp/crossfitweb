import React from "react";
import SearchingArea from "../../../common-components/searching-area/searching-area";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import BodyEvents from "../../../components/body-events/body-events";

function EventsPages() {
  return (
    <React.Fragment>
      <Header></Header>
      <SearchingArea></SearchingArea>
      <BodyEvents></BodyEvents>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default EventsPages;
