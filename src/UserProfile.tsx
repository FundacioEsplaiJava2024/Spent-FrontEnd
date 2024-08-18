import Person2Icon from "@mui/icons-material/Person2";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetUser } from "./api/SpentApiManager";
import Header from "./components/HeaderComponent";
import { User } from "./types/types";


function UserProfile() {
  const { username } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [event, setEvent] = useState<any | null>(null);


  useEffect(() => {
    if (username) {
      apiGetUser(username).then((user) => {
        setUser(user);
        // setEvent({
        //   id: 1,
        //   name: "Evento de prueba",
        //   description: "Este es un evento de prueba",
        //   date: "2023-03-01T12:00:00.000Z",
        // });
      });
    }
  }, [username]);
  if (!user) return <div>Loading...</div>;

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
                {/* <ul>
                {userData.interests.map((interest, index) => (
                  <li key={index}> */}
                <Typography variant="body1">
                  - Spikeball <br />
                  - Volleyball
                </Typography>
                {/* </li>
                ))} */}
                {/* </ul> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={20}>
            <Grid container spacing={25}>
              <Grid item xs={6}>
                <Typography variant="h6" textAlign="center">
                  Created events
                </Typography>

                {/* <EventCard event={event} /> */}

              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" textAlign="center">
                  Participated events
                </Typography>
                {/* <EventCard event={event} /> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default UserProfile;
