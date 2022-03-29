import React from "react";
import UsersEventsInfo from "../../common-components/users-events-info/users-events-info";
import UsersInfo from "../../common-components/users-info/users-info";

function BodyUser() {
  return (
    <React.Fragment>
      <UsersInfo></UsersInfo>
      <UsersEventsInfo></UsersEventsInfo>
      {/*/poner un componente UserEventsInfo*/}
    </React.Fragment>
  );
}

export default BodyUser;
