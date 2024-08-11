import Person2Icon from '@mui/icons-material/Person2';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EventCard from './components/EventCardComponent';

const userData = {
  username: 'johnDoe',
  firstName: 'John',
  email: 'johndoe@example.com',
  occupation: 'Software Engineer',
};

function UserProfile() {
  return (
    <Box sx={{ p: 4, bgcolor: 'background.default' }}>
      <Grid container spacing={15}>
        <Grid item xs={10}>
          <Grid container spacing={-1} alignItems="center" >
            <Grid item xs={1} alignItems="center" >
              <Person2Icon fontSize="large"/>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="h5">
                {userData.firstName}
              </Typography>
              <Typography variant="body1">
                {userData.username}
              </Typography>
              <Typography variant="body1">
                {userData.email}
              </Typography>
              <Typography variant="body1">
                {userData.occupation}
              </Typography>
            </Grid>

            <Grid item xs={2} sx={{ marginLeft: 'auto' }}>
              <Typography variant="h6">
                Intereses
              </Typography>
              {/* <ul>
                {userData.interests.map((interest, index) => (
                  <li key={index}> */}
                    <Typography variant="body1">
                      - Deportes
                    </Typography>
                  {/* </li>
                ))} */}
              {/* </ul> */}
            </Grid>

          </Grid>
        </Grid>
        <Grid item xs={20}>
          <Grid container spacing={3}>
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
  );
}

export default UserProfile;
