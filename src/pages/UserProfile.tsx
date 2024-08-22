import Person2Icon from "@mui/icons-material/Person2";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetUser } from "../api/SpentApiManager";
import EventCard from "../components/EventCardComponent";
import Header from "../components/HeaderComponent";
import { User } from "../types/types";

function UserProfile() {
  const { username } = useParams();
  const [user, setUser] = useState<User | null>(null);
  console.log(user);

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
      <Box sx={{ p: 4, bgcolor: "background.default", marginTop: 3 }}>
        <Grid container spacing={15}>
          <Grid item xs={10}>
            <Grid container spacing={-1} alignItems="center">
              <Grid item xs={1} alignItems="center">
                <Person2Icon fontSize="large" />
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h5">{user.firstName}</Typography>
                <Typography variant="body1">{user.username}</Typography>
                <Typography variant="body1">{user.email}</Typography>
                <Rating
                  name="read-only"
                  value={user.rating}
                  precision={0.5}
                  readOnly
                />
              </Grid>
              <Grid item xs={2} sx={{ marginLeft: "auto" }}>
                <Typography variant="h6">Interests</Typography>
                <Typography variant="body1">
                  - Spikeball <br />- Volleyball
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={20}>
            <Grid container spacing={25}>
              <Grid item xs={6}>
                <Typography variant="h6" textAlign="center">
                  Created events
                </Typography>
                {user.eventsCreated.map((event) => (
                  <div className="EventCard">
                    <EventCard key={event.id} event={event} />
                  </div>
                ))}
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" textAlign="center">
                  Participated events
                </Typography>
                {user.joinedEvents.map((event) => (
                  <div className="EventCard">
                    <EventCard key={event.id} event={event} />
                  </div>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default UserProfile;
