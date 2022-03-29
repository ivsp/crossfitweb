import React from "react";
import BodyEventsDetails from "../../components/body-events-details/body-events-details";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./events-details.scss";

function EventsDetails() {
  return (
    <React.Fragment>
      <Header></Header>
      <BodyEventsDetails></BodyEventsDetails>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default EventsDetails;
