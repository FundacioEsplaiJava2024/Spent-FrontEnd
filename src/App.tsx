import "./App.css";
import FilterBar from "./components/FilterBarComponent";
import Header from "./components/HeaderComponent";
import SearchBar from "./components/SearchBarComponent";

function App() {
  return (
    <>
      <Header />
      <section id="appBody">
        <div className="container">
          <SearchBar />
          <FilterBar />
        </div>
      </section>
    </>
  );
}

export default App;
