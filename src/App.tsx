import "./App.css";
import Header from "./components/HeaderComponent";
import SearchBar from "./components/SearchBarComponent";

function App() {
  return (
    <>
      <Header />
      <section id="appBody">
        <SearchBar />
      </section>
    </>
  );
}

export default App;
