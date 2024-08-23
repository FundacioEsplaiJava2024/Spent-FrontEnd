import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Slide,
  Stack,
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
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import GroupIcon from "@mui/icons-material/Group";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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
  const formattedDate =
    event && event.date
      ? new Date(event.date).toLocaleDateString("en-GB", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "Date not available";

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
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography gutterBottom variant="h3" component="div">
                  {event.title}
                </Typography>
              </Stack>
              <Typography gutterBottom variant="h5" component="div">
                Organizer:{" "}
                <Chip
                  color="primary"
                  onClick={() => handleUserProfile(event.userCreator.username)}
                  icon={<PersonIcon />}
                  label={event.userCreator.username}
                  size="medium"
                  sx={{ ml: 1, mb: 0.5 }}
                />
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <React.Fragment>
                <Typography
                  variant="h6"
                  onClick={handleClickOpen}
                  color="primary"
                >
                  <span className="sportName">
                    <SportsHandballIcon /> {event.sport.name}
                  </span>
                </Typography>
                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle> {event.sport.name}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      {event.sport.description}
                    </DialogContentText>
                  </DialogContent>
                </Dialog>
              </React.Fragment>
              <Typography gutterBottom component="div">
                {event.description}
              </Typography>
            </Box>
            <Box>
              <Card sx={{ width: 250 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/Maps_placeholder.png"
                  title="Event location image"
                />
                <CardContent>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                    <CalendarMonthIcon color="primary" sx={{ verticalAlign: 'middle', mr: 1 }}/>
                    {formattedDate}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                    <AccessTimeIcon color="primary" sx={{ verticalAlign: 'middle', mr: 1 }}/>
                    {event.startTime.substring(0, 5)} -{" "}
                    {event.endTime.substring(0, 5)}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    <LocationOnIcon color="primary" sx={{ verticalAlign: 'middle', mr: 1 }}/>
                    {event.address}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>

          <Divider sx={{ marginTop: 2 }} />

          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant="h6">
              <Box component="span" display="inline-flex" alignItems="center">
                Participants {event.eventParticipants.length} /{" "}
                {event.numParticipants}
                <GroupIcon sx={{ marginLeft: 1, marginBottom: 0.5 }} />
              </Box>
            </Typography>

            <Stack direction="row" spacing={1}>
              {event.eventParticipants.map((user) => (
                <Chip
                  key={user.username}
                  color="primary"
                  onClick={() => handleUserProfile(user.username)}
                  icon={<PersonIcon />}
                  label={user.username}
                  size="medium"
                />
              ))}
            </Stack>
          </Box>
          <Divider sx={{ marginTop: 2 }} />

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
                    marginTop: 2,
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
                    marginTop: 2,
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
