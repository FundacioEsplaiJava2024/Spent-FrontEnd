import { useEffect, useState } from "react";
import { apiGetEvents } from "./api/SpentApiManager";
import "./App.css";
import EventCard from "./components/EventCardComponent";
import FilterBar from "./components/FilterBarComponent";
import Header from "./components/HeaderComponent";
import SearchBar from "./components/SearchBarComponent";
import { Event } from "./types/types";



function App() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    apiGetEvents().then((events) => setEvents(events));
  }, []);

  return (
    <>
      <Header />
      <section id="appBody">
        <div className="container">
          <SearchBar />
          <FilterBar />
          {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
          {/* <EventCard />
          <EventCard />
          <EventCard /> */}
        </div>
      </section>
    </>
  );
}

export default App;
