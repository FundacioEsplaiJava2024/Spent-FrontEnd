import { Box, Grid, Typography } from "@mui/material";
import Header from "./components/HeaderComponent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetEventById } from "./api/SpentApiManager";
import { Event } from "./types/types";

function EventPage() {
  const {id} = useParams();
  const [event, setEvent] = useState<Event | null> (null);

  useEffect(()=>{
    if(id){
      apiGetEventById(id).then((event)=>{
        setEvent(event);
      });
    }
  }, [id]);
if(!event) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <Box sx={{ padding: "20px" }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h3" fontWeight="bold">
                {event.title}
              </Typography>
              <Typography variant="h5">
                {/* {event.sport.sportName} */}
                </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "10px",
                  backgroundColor: "#e0e0e0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Add your map image here */}
              </Box>
              <Typography variant="body1" mt={2}>
                {event.address}
              </Typography>
              <Typography variant="h5" fontWeight="bold" mt={1}>
                {event.date}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3} mt={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "150px",
                  height: "50px",
                  borderRadius: "10px",
                  backgroundColor: "#4CAF50",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h5" fontWeight="bold" color="white">
                  +/-
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {/* {event.eventParticipants.length} / {event.numParticipants} */}
                </Typography>
                <Box
                  sx={{
                    marginLeft: "10px",
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#e0e0e0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* Add your person icon here */}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default EventPage;
  