import { EventContext } from "./event.context";
import { useEffect, useState } from "react";
import {
  getAllCurrentsEvents,
  getAllCurrentsEventsByEmail,
  getAllPastsEventsByEmail,
} from "../../APP/fetch/fetch-functions";

function EventProvider({ children }) {
  const [currentBoxEventsData, setCurrentBoxEventsData] = useState([]);
  const [pastBoxEventsData, setPastBoxEventsData] = useState([]);
  const [currentsEventsData, setCurrentsEventsData] = useState([]);

  async function getCurrentEv(token) {
    const currentsEvents = await getAllCurrentsEventsByEmail(token);
    setCurrentBoxEventsData(currentsEvents);
  }

  async function getPastEv(token) {
    const pastEvents = await getAllPastsEventsByEmail(token);
    setPastBoxEventsData(pastEvents);
  }

  async function getAllEvents() {
    const events = await getAllCurrentsEvents();
    setCurrentsEventsData(events);
  }

  useEffect(() => {
    //traer los eventos de la base de datos y actualizar el currentEvents get a /boxes pasando email
    const token = localStorage.getItem("token");
    if (token && token !== undefined) {
      getCurrentEv(token);
      getPastEv(token);
    }

    getAllEvents();
  }, []);

  return (
    <EventContext.Provider
      value={[
        currentBoxEventsData,
        setCurrentBoxEventsData,
        pastBoxEventsData,
        setPastBoxEventsData,
        currentsEventsData,
        setCurrentsEventsData,
      ]}
    >
      {children}
    </EventContext.Provider>
  );
}

export default EventProvider;
