import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import Paper from "@mui/material/Paper";
import EventIcon from '@mui/icons-material/Event';
import React from "react";


export default function EventCreate(){
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("password") as string;
  
  };
  const [dateTimeValue, setDateTimeValue] = React.useState('');

  const handleDateChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setDateTimeValue(event.target.value);
  };



  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        id="grid"
        item
        xs={false}
        sm={4}
        
      />
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
            <EventIcon  />
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
