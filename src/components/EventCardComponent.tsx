import GroupIcon from "@mui/icons-material/Group";
import { Box, Chip, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Event } from "../types/types";
import "./EventCardStyle.css";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const shortStartTime = event.startTime.substring(0, 5);
  const shortEndTime = event.endTime.substring(0, 5);

  return (
    <Link to={`/events/${event.id}`} className="EventCard">
      <Card variant="outlined" sx={{ marginTop: 3 }}>
        <Box sx={{ p: 2 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography gutterBottom variant="h5" component="div">
              {event.title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {event.eventParticipants.length} / {event.numParticipants}{" "}
              <GroupIcon
                color="primary"
                sx={{ position: "relative", top: "4px" }}
              />
            </Typography>
          </Stack>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography color="text.secondary" variant="body2">
              {event.date}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {shortStartTime} / {shortEndTime}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ p: 1 }}>
          <Typography gutterBottom variant="body2" sx={{ marginLeft: 1 }}>
            Activity:{" "}
            <Chip color="primary" label={event.sport.name} size="small" />
          </Typography>
        </Box>
      </Card>
    </Link>
  );
}
