import EventIcon from "@mui/icons-material/Event";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { apiGetSports } from "./api/SpentApiManager";
import FilterBar from "./components/FilterBarComponent";
import { Sport } from "./types/types";

export default function EventCreate() {
  const [sports, setSports] = useState<Sport[]>([]);
  const [selectedSport, setSelectedSport] = useState<Sport | null>(null);
  useEffect(() => {
    const fetchSports = async () => {
      const fetchedSports = await apiGetSports();
      setSports(fetchedSports); 
    };

    fetchSports();
  }, []);

  const handleChange = (event: { target: { value: string } }) => {
    const selectedSport = sports.find(
      (sport) => sport.sportName === event.target.value
    );
    setSelectedSport(selectedSport || null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

  };
  const [dateTimeValue, setDateTimeValue] = React.useState("");

  const handleDateChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDateTimeValue(event.target.value);
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid id="grid" item xs={false} sm={4} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "black" }}>
            <EventIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Event
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="date"
              label="Date"
              name="date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="start-time"
              label="Start Time "
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
              value={dateTimeValue}
              onChange={handleDateChange}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="end-time"
              label="End Time "
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
              value={dateTimeValue}
              onChange={handleDateChange}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="num-participants"
              label="Number Participants"
              name="num-participants"
              autoComplete="num-participants"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="addres"
              label="Addres"
              name="addres"
              autoComplete="addres"
              autoFocus
            />

            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Sport
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={selectedSport ? selectedSport.sportName : ""} // Mostrar el nombre del deporte seleccionado
                onChange={handleChange}
                autoWidth
                label="Sport"
              >

                {sports.map((sport) => (
                  <MenuItem key={sport.id} value={sport.sportName}>
                    {sport.sportName}
                  </MenuItem>
                ))}
                {/* <MenuItem value={"Kayak"}>Kayak</MenuItem>
                <MenuItem value={"Spikeball"}>Spikeball</MenuItem>
                <MenuItem value={"curling"}>Curling</MenuItem> */}
              </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "black" }}
            >
              Create Event
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
