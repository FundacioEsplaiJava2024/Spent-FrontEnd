import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, InputAdornment, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { apiGetEvents, apiGetSports } from "./api/SpentApiManager";
import "./App.css";
import EventCard from "./components/EventCardComponent";
import Header from "./components/HeaderComponent";
import { Event, Sport } from "./types/types";

function App() {
  const [events, setEvents] = useState<Event[]>([]);
  const [sports, setSports] = useState<Sport[]>([]);

  const [selectedSport, setSelectedSport] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredEvents = events
    .filter((event: Event) =>
      selectedSport ? event.sport.sportName === selectedSport : true
    )
    .filter((event: Event) =>
      searchTerm ? event.title.toLowerCase().includes(searchTerm.toLowerCase()) : true
    );

  useEffect(() => {
    const fetchEventsAndSports = async () => {
      const fetchedEvents = await apiGetEvents();
      setEvents(fetchedEvents);
      const fetchedSports = await apiGetSports();
      setSports(fetchedSports);
    };

    fetchEventsAndSports();
  }, []);

  return (
    <>
      <Header />
      <section id="appBody">
        <div className="container">
          <Stack
            spacing={2}
            sx={{ width: 1000, borderRadius: 80, marginTop: 5 }}
            id="SearchBar"
          >
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              options={events.map((option) => option.title)}
              onInputChange={(event, newInputValue) => {
                setSearchTerm(newInputValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Events"
                  sx={{
                    borderRadius: "80px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "80px",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Stack>
          <Stack spacing={2} sx={{ width: 300, marginTop: 3 }}>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              options={sports.map(
                (option: { sportName: string }) => option.sportName
              )}
              renderInput={(params) => <TextField {...params} label="Sports" />}
              onChange={(sport, value) => setSelectedSport(value as string)}
            />
          </Stack>
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
