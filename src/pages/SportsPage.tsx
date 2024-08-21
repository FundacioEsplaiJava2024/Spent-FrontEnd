import {
  Autocomplete,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { apiGetSports } from "../api/SpentApiManager";
import Header from "../components/HeaderComponent";
import { Sport } from "../types/types";
import SearchIcon from "@mui/icons-material/Search";

function SportsPage() {
  const [sports, setSports] = useState<Sport[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredSports = sports
  .filter((sport: Sport) =>
    searchTerm ? sport.sportName.toLowerCase().includes(searchTerm.toLowerCase()) : true
  );


  useEffect(() => {
    apiGetSports().then((sports) => {
      setSports(sports.sort((a, b) => a.sportName.localeCompare(b.sportName)));
    });
  }, []);

  return (
    <>
      <Header />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Stack
          spacing={2}
          sx={{ width: 1000, borderRadius: 80, marginTop: 3 }}
          id="SearchBar" 
        >
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={sports.map((option) => option.sportName)}
            onInputChange={(sport, newInputValue) => {
              setSearchTerm(newInputValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Events"
                sx={{
                  borderRadius: "80px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "80px",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </Stack>
      </Box>
      <Grid container justifyContent="center">
        <Typography variant="h3" align="center" style={{ marginTop: 15 }}>
          Deportes
        </Typography>
      </Grid>
      <Container
      id="sports"
      sx={{
        pt: { xs: 2, sm: 4 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Grid container spacing={2}>
        {filteredSports.map((sport, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body1" color="text.primary">
                  {sport.sportName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {sport.description}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >

              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>

    </>
  );
}

export default SportsPage;


