import { EventContext, UserContext } from "./event.context";
import { useState } from "react";

function EventProvider({ children }) {
  const [currentEventsData, setEventsData] = useState([]);
  const [pastEventsData, setPastEventsData] = useState([]);

  return (
    <EventContext.Provider
      value={[
        currentEventsData,
        setEventsData,
        pastEventsData,
        setPastEventsData,
      ]}
    >
      {children}
    </EventContext.Provider>
  );
}

export default EventProvider;
