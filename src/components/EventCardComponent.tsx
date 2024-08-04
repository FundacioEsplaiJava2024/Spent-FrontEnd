import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function EventCard() {
  return (
    <Card sx={{ minWidth: 275, marginTop:3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Spikeball
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
      <CardActions>
        <Button size="small">Sign Up</Button>
      </CardActions>
    </Card>
  );
}
