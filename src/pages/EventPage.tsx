import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Container,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  Slide,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  apiGetEventById,
  apiJoinEvent,
  apiWithdrawEvent,
} from "../api/SpentApiManager";
import { Event, User } from "../types/types";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import { TransitionProps } from "@mui/material/transitions";
import "./EventPage.css";
import PersonIcon from "@mui/icons-material/Person";
import Header from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import SportsHandballIcon from '@mui/icons-material/SportsHandball';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const username = localStorage.getItem("username") as string;
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleUserProfile = (username: string) => {
    navigate(`/${username}`);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isUsernameInEventParticipants = (
    event: Event,
    username: string
  ): boolean => {
    return event.eventParticipants.some(
      (participant) => participant.username === username
    );
  };

  const isParticipant =
    event && localStorage.getItem("username")
      ? isUsernameInEventParticipants(event, username)
      : false;

  useEffect(() => {
    if (id) {
      apiGetEventById(id).then((event) => {
        setEvent(event);
      });
    }
  }, [id]);
  if (!event)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress color="inherit" />
      </Box>
    );

  const handleJoin = () => {
    const newUser: User = {
      id: "newUserId",
      username: username,
      email: "default@example.com",
      firstName: "Default",
      rating: 0,
      eventsCreated: [],
      joinedEvents: [],
    };

    const updatedEvent = {
      ...event,
      eventParticipants: [...event.eventParticipants, newUser],
    };

    setEvent(updatedEvent);
    apiJoinEvent(id as string);
  };

  const handleWithdraw = () => {
    const updatedEvent = {
      ...event,
      eventParticipants: event.eventParticipants.filter(
        (participant) => participant.username !== username
      ),
    };

    setEvent(updatedEvent);
    apiWithdrawEvent(id as string);
  };

  return (
    <>
      <Header />
      <Card variant="outlined" sx={{ width: 1000, ml: 20, marginTop: 10 }}>
        <Box sx={{ p: 2 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography gutterBottom variant="h5" component="div">
              {event.title}
            </Typography>

            <Typography gutterBottom variant="body1" component="div">
              {event.address}
              <br />
              {event.date}
              <br />
              {event.startTime.substring(0, 5)} -{" "}
              {event.endTime.substring(0, 5)}
            </Typography>
          </Stack>
          <React.Fragment>
            <Typography variant="h6" onClick={handleClickOpen} color="primary">
              
              <span className="sportName"><SportsHandballIcon/> {event.sport.sportName}</span>
            </Typography>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle> {event.sport.sportName}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  {event.sport.description}
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </React.Fragment>
          <Typography color="text.secondary" variant="body2">
            {event.sport.description}
          </Typography>
          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant="body2">
              Participants {event.eventParticipants.length} /{" "}
              {event.numParticipants}
            </Typography>

            <Stack direction="row" spacing={1}>
              {event.eventParticipants.map((user) => (
                <Chip
                  key={user.username}
                  color="primary"
                  onClick={() => handleUserProfile(user.username)}
                  icon={<PersonIcon />}
                  label={user.username}
                  size="small"
                />
              ))}
            </Stack>
          </Box>
          <Box>
            <Typography variant="h5">
              {isParticipant ? (
                <Button
                  onClick={handleWithdraw}
                  variant="contained"
                  color="error"
                  sx={{
                    width: "100px",
                    height: "40px",
                    borderRadius: "5px",
                    backgroundColor: "red",
                    marginTop: 5,
                  }}
                >
                  Withdraw
                </Button>
              ) : (
                <Button
                  onClick={handleJoin}
                  variant="contained"
                  color="success"
                  sx={{
                    width: "100px",
                    height: "40px",
                    borderRadius: "5px",
                    backgroundColor: "#4CAF50",
                  }}
                >
                  Join
                </Button>
              )}
            </Typography>
          </Box>
        </Box>
        
      </Card>
      <FooterComponent />
    </>
  );
}
