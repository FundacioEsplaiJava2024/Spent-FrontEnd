import "./App.css";
import EventCard from "./components/EventCardComponent";
import FilterBar from "./components/FilterBarComponent";
import Header from "./components/HeaderComponent";
import SearchBar from "./components/SearchBarComponent";
import EventCreate from "./EventCreate";

function App() {
  return (
    <>
      <Header />
      <section id="appBody">
        <div className="container">
          <SearchBar />
          <EventCreate/>
          <FilterBar />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </section>
    </>
  );
}

export default App;
