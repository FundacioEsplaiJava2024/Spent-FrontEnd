import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Event } from "../types/types";


interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Card sx={{ minWidth: 500, marginTop: 3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {event.sport.sportName}
        </Typography>
        <Typography variant="h5" component="div">
          {event.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {event.date}
        </Typography>
        <Typography variant="body2">
          {event.startTime} / {event.endTime}
        </Typography>
      </CardContent>
    </Card>
  );
}
