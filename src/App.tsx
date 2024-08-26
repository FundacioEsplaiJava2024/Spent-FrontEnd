import AddIcon from "@mui/icons-material/Add";
import SearchIcon from '@mui/icons-material/Search';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import { Autocomplete, Box, Button, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { apiGetEvents, apiGetSports } from "./api/SpentApiManager";
import "./App.css";
import EventCard from "./components/EventCardComponent";
import FooterComponent from './components/FooterComponent';
import Header from "./components/HeaderComponent";
import { Event, Sport } from "./types/types";

function App() {
  const [events, setEvents] = useState<Event[]>([]);
  const [sports, setSports] = useState<Sport[]>([]);
  const navigate = useNavigate();

  const [selectedSport, setSelectedSport] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredEvents = events
    .filter((event: Event) =>
      selectedSport ? event.sport.name === selectedSport : true
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

  const handleCreateEvent = () => {
    navigate("/event/create");
  };

  return (
    <>
      <Header />
      <section id="appBody">
        <div className="container">
          <Box sx={{ display: 'flex' }}>
            <Stack
              spacing={2}
              sx={{ width: 600, borderRadius: 80, marginTop: 5 }}
              id="SearchBar"
            >
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={events.map((option) => option.title)}
                onInputChange={(_event, newInputValue) => {
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
            <Button
              variant="contained"
              onClick={handleCreateEvent}
              sx={{ ml: 2, color: "primary", height: 50, marginTop: 5.3, borderRadius: 80 }}
            >
              <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                Create Event
                <AddIcon sx={{ ml: 1, alignItems: 'center' }} />
              </Box>
            </Button>
          </Box>

          <Stack direction="row" spacing={8} alignItems="center"
            sx={{ marginTop: 2, marginBottom: 2 }}>
            <Typography variant="body1" color={'primary'}
              sx={{ textDecoration: 'none' }}
              component="a" href="/sports">
              <SportsHandballIcon sx={{ fontSize: 20, marginBottom: -0.4 }} />
              Sports
            </Typography>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              options={sports.map(
                (option: { name: string }) => option.name
              )}
              renderInput={(params) => (<TextField {...params} label="Sports"
                sx={{ width: 290, fontSize: 16 }}
              />
              )}
              onChange={(_sport, value) => setSelectedSport(value as string)}
            />
          </Stack>
          {filteredEvents.map((event) => (
            <Box display="flex" flexWrap="wrap">
              <Box sx={{ width: 600}}>
                <EventCard key={event.id} event={event} />
              </Box>
            </Box>
          ))}

        </div>
      </section>
      <FooterComponent />
    </>
  );
}

export default App;
