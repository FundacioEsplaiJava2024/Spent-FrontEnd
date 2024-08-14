import Person2Icon from "@mui/icons-material/Person2";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import EventCard from "./components/EventCardComponent";
import Header from "./components/HeaderComponent";

const userData = {
  username: "johnDoe",
  firstName: "John",
  email: "johndoe@example.com",
  rating: 4.5,
};

function UserProfile() {
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
                <Typography variant="h5">{userData.firstName}</Typography>
                <Typography variant="body1">{userData.username}</Typography>
                <Typography variant="body1">{userData.email}</Typography>
                <Rating
                  name="read-only"
                  value={userData.rating}
                  precision={0.5}
                  readOnly
                />
              </Grid>

              <Grid item xs={2} sx={{ marginLeft: "auto" }}>
                <Typography variant="h6">Intereses</Typography>
                {/* <ul>
                {userData.interests.map((interest, index) => (
                  <li key={index}> */}
                <Typography variant="body1">- Deportes</Typography>
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
                  Eventos Creados
                </Typography>
                <EventCard />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" textAlign="center">
                  Eventos Participados
                </Typography>
                <EventCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default UserProfile;
