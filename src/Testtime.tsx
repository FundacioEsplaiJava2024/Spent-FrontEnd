import EventIcon from "@mui/icons-material/Event";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { apiCreateEvent, apiGetSports } from "./api/SpentApiManager";
import { Sport } from "./types/types";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";

export default function EventCreateTest() {
  const navigate = useNavigate();
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

  const [startTimeValue, setStartTimeValue] = useState<dayjs.Dayjs | null>(dayjs());
  const [endTimeValue, setEndTimeValue] = useState<dayjs.Dayjs | null>(dayjs());
  const handleStartTimeChange = (value: dayjs.Dayjs | null) => {
    setStartTimeValue(value);
  };

  const handleEndTimeChange = (value: dayjs.Dayjs | null) => {
    setEndTimeValue(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const startTime = data.get("start-time") as string;
    const endTime = data.get("end-time") as string;

    console.log("Start Time:", startTime);
    console.log("End Time:", endTime);
  };
  const handleClose = () => {
    navigate("/");
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
            position: "relative",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
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
            <TimePicker
              name="start-time"
              label="Start Time"
              value={startTimeValue}
              onChange={handleStartTimeChange}
              />
            <TimePicker
              name="end-time"
              label="End Time"
              value={endTimeValue}
              onChange={handleEndTimeChange}
              referenceDate={dayjs("2022-04-17")}
            />
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
