import GroupIcon from '@mui/icons-material/Group';
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { blue } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';
import { Event } from "../types/types";
import './EventCardStyle.css';


interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link to={`/events/${event.id}`} className="EventCard">
      <Card sx={{ minWidth: 500, marginTop: 3, backgroundColor: blue[50], }}>
        <CardContent>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={6}>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {event.sport.sportName}
              </Typography>
            </Grid>
            <Grid textAlign="right">
              <Typography sx={{ mt: 1.5 }} color="text.secondary">
                {event.date}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="h5" component="div">
            {event.title}
          </Typography>

          <Typography variant="body2" sx={{ mb: 0.5, mt: 0.5 }}>
            {event.startTime} / {event.endTime}
          </Typography>
          <Typography variant="body2">
            {event.userCreator ? (
              <>
                <strong>Organizer: </strong> {event.userCreator.firstName}
              </>
            ) : (
              <span>Organized by user</span>
            )}
          </Typography>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>Address: </strong>{event.address}
              </Typography>
            </Grid>
            <Grid textAlign="right">
              <Typography variant="body2">
                <GroupIcon sx={{ marginTop: -1 }} /> <br />{event.eventParticipants.length} / {event.numParticipants}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Link>
  );
}
