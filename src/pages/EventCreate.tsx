import CloseIcon from "@mui/icons-material/Close";
import EventIcon from "@mui/icons-material/Event";
import {
  Autocomplete,
  IconButton,
  Stack,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { LocalizationProvider, TimeField } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiCreateEvent, apiGetSports } from "../api/SpentApiManager";
import { Sport } from "../types/types";
import { addressValidator, dateValidator, descriptionValidator, numParticipantsValidator, titleValidator } from "../validations/CreateEventValidator";
import ValidatedTextField from "../validations/ValidatedTextField";


export default function EventCreate() {
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

  const [startTime, setStartTime] = useState<Dayjs | null>(dayjs());
  const [endTime, setEndTime] = useState<Dayjs | null>(dayjs());

  const handleStartTimeChange = (newValue: Dayjs | null) => {
    setStartTime(newValue);
  };

  const handleEndTimeChange = (newValue: Dayjs | null) => {
    setEndTime(newValue);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const title = data.get("title") as string;
    const date = data.get("date") as string;
    const description = data.get("description") as string;
    const numParticipants = data.get("numParticipants") as string;
    const address = data.get("address") as string;
    const sportName = selectedSport?.name;
    const startTimeHour = startTime?.hour() ?? 0;
    const startTimeMinute = startTime?.minute() ?? 0;
    const endTimeHour = endTime?.hour() ?? 0;
    const endTimeMinute = endTime?.minute() ?? 0;


    if (titleValidator(title)) {
      alert("Invalid title");
      return;
    }

    if (dateValidator(date)) {
      alert("Invalid date");
      return;
    }

    if (startTimeHour > endTimeHour) {
      alert("Invalid time");
      return
    }
    if (startTimeHour == endTimeHour && startTimeMinute >= endTimeMinute) {
      alert("invalid time");
      return;
    }

    if (descriptionValidator(description)) {
      alert("Invalid description");
      return;
    }

    if (numParticipantsValidator(numParticipants)) {
      alert("Invalid number of participants");
      return;
    }

    if (addressValidator(address)) {
      alert("Invalid address");
      return;
    }

    if (sportName == null) {
      alert('Seleccione un deporte');
      return;
    }

    var realStartTime = "";
    var realEndTime = "";

  
    if (startTime && endTime) {
      realStartTime = startTime.format('HH:mm') as string;
      realEndTime = endTime.format('HH:mm') as string;
    } else {
      alert('Time not selected');
      return;
    }
    console.log("name"+selectedSport?.name),
    console.log("sportName"+ sportName),
    await apiCreateEvent(
      title,
      date,
      realStartTime,
      realEndTime,
      description,
      numParticipants.toString(),
      address,
      sportName ?? ""
    );
    navigate("/");
  };

  const handleClose = () => {
    navigate("/");

  };

  function isValid(): void {
    throw new Error("Function not implemented.");
  }

  return (

    <>
      <Box sx={{
        backgroundImage: 'url("/CreateBackground.jpg")', backgroundSize: 'cover', backgroundPosition: 'bottom',
        height: '140vh'
      }}>
        <Grid container component="main" sx={{ height: "100vh", marginTop: 0, marginBottom: 5 }}>
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

                <ValidatedTextField
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  autoComplete="title"
                  autoFocus
                  multiline={false}
                  variant="filled"
                  rows={1}
                  validator={titleValidator}
                  onChange={(isValid)}
                />
                <ValidatedTextField
                  margin="normal"
                  required
                  fullWidth
                  id="date"
                  label="Date"
                  name="date"
                  type="date"
                  multiline={false}
                  InputLabelProps={{
                    shrink: true,
                  }}       
                  variant="filled"
                  rows={1}
                  validator={dateValidator}
                  onChange={(isValid)}
                />
                <Box sx={{ display: "flex", marginTop: 1, gap: 10 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimeField
                      label="Start time"
                      format="HH:mm"
                      value={startTime}
                      onChange={handleStartTimeChange}
                    />
                  </LocalizationProvider>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimeField
                      label="End time"
                      format="HH:mm"
                      value={endTime}
                      onChange={handleEndTimeChange}
                    />
                  </LocalizationProvider>
                </Box>

                <ValidatedTextField
                  margin="normal"
                  required={true}
                  fullWidth={true}
                  id="description"
                  label="Description"
                  name="description"
                  autoComplete="description"
                  autoFocus={true}
                  multiline={true}
                  variant="filled"
                  rows={4}
                  validator={descriptionValidator}
                  onChange={(isValid)}
                />

                <ValidatedTextField
                  margin="normal"
                  required
                  fullWidth
                  id="numParticipants"
                  label="Number Participants"
                  name="numParticipants"
                  type="number"
                  autoComplete="numParticipants"
                  autoFocus
                  validator={numParticipantsValidator}
                  onChange={(isValid)}
                  multiline={false}
                  variant="filled"
                  rows={0}
                />

                <ValidatedTextField
                  margin="normal"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                  autoFocus
                  validator={addressValidator}
                  onChange={(isValid)}
                  multiline={false}
                  variant="filled"
                  rows={0}
                />
                <Stack spacing={2} sx={{ width: 300, marginTop: 3 }}>
                  <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    options={sports.map(
                      (option: { name: string }) => option.name
                    )}
                    renderInput={(params) => <TextField {...params} label="Sports" />}
                    onChange={(_sport, value) => {
                      const selectedSport = sports.find((sport) => sport.name === value);
                      setSelectedSport(selectedSport ?? null);
                    }} />
                </Stack>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, backgroundColor: "black" }}
                >
                  Create Event
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
