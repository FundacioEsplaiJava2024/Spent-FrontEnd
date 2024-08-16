import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Event } from "../types/types";


interface EventCardProps{
  event: Event;
}

export default function EventCard({event}: EventCardProps) {
  return (
    <Card sx={{ minWidth: 500, marginTop:3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {event.title}
        </Typography>
        <Typography variant="h5" component="div">
          Spikeball 2v2 a Barceloneta!
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          24 Agost 2024
        </Typography>
        <Typography variant="body2">
          15:30 / 17:30
        </Typography>
      </CardContent>
    </Card>
  );
}
