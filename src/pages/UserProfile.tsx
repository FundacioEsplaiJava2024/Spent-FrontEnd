import Person2Icon from "@mui/icons-material/Person2";
import { Card, CircularProgress, Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetUser } from "../api/SpentApiManager";
import EventCard from "../components/EventCardComponent";
import Header from "../components/HeaderComponent";
import { User, Event } from "../types/types";

function UserProfile() {
  const { username } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const isUserLoggedIn = localStorage.getItem("username") == user?.username ? true : false;
  const participatedEvents:  Event[] = [];
  const pendingEvents:  Event[] = [];

  const today = new Date(); // Get today's date

  user?.joinedEvents.forEach((event) => {
    const eventDate = new Date(event.date); // Convert the event date string to a Date object

    if (eventDate < today) {
      participatedEvents.push(event); // Add to participatedEvents if the date is earlier than today
    } else {
      pendingEvents.push(event); // Add to pendingEvents if the date is today or later
    }
  });


  useEffect(() => {
    if (username) {
      apiGetUser(username).then((user) => {
        setUser(user);
      });
    }
  }, [username]);
  if (!user)
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

  return (
    <>
      <Header />
      <Box sx={{
        display: "flex",
        justifyContent: "center",
      }}>
        <Card variant="outlined" sx={{
          width: 1150, marginTop: 10
        }}>
          <Box sx={{ p: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Grid container spacing={8} alignItems="center">
                  <Grid item xs={1} alignItems="center">
                    <Person2Icon fontSize="large" />
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="h5">{user.firstName}</Typography>
                    <Typography variant="body1">{user.username}</Typography>
                    <Typography variant="body1">{user.email}</Typography>
                  </Grid>
                </Grid>

                <Divider sx={{ mb: 2, mt: 2 }} />
                <Rating
                  name="read-only"
                  value={user.rating}
                  precision={0.5}
                  readOnly
                />

              </Box>
              <Grid item xs={2} sx={{ marginLeft: "auto", mr: 10 }}>
                <Typography variant="h6">Interests</Typography>
                <Typography variant="body1">
                  - Spikeball <br />- Volleyball
                </Typography>
              </Grid>

            </Box>

            <Divider sx={{ mt: 2, mb: 2 }} />

            <Box display="flex" flexWrap="wrap">
              <Box flex={1} sx={{ padding: 2 }}>
                <Typography variant="h6" textAlign="center">
                  Created events
                </Typography>
                {user.eventsCreated.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </Box>
              <Box flex={1} sx={{ padding: 2 }}>
                <Typography variant="h6" textAlign="center">
                  Participated events
                </Typography>
                {participatedEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </Box>
            </Box>
          </Box>
        </Card>
        {isUserLoggedIn ? (
          <Card variant="outlined" sx={{
            width: 300, marginTop: 10, marginLeft: 2
          }}>

            <Box flex={1} sx={{ padding: 2 }}>
              <Typography variant="h6" textAlign="center" sx={{ mb: 2, mt: 2 }}>
                Pending events
              </Typography>
              {pendingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </Box>
          </Card>
        ) : (<p></p>)}

      </Box>
    </>
  );
}

export default UserProfile;
