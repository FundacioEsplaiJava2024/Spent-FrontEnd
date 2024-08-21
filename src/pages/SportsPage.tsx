import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { apiGetSports } from "../api/SpentApiManager";
import Header from "../components/HeaderComponent";
import { Sport } from "../types/types";

function SportsPage() {
    const [sports, setSports] = useState<Sport[]>([]);

    useEffect(() => {
        apiGetSports().then((sports) => {
            setSports(sports.sort((a, b) => a.sportName.localeCompare(b.sportName)));
        });
    }, []);


    return (
        <>
            <Header />
            <Grid container justifyContent="center">
                <Typography variant="h3" align="center" style={{ marginTop: 10 }}>
                    Deportes
                </Typography>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <List>
                        {sports.slice(0, sports.length / 2).map((sport) => (
                            <ListItem key={sport.id}>
                                <ListItemText primary={sport.sportName} secondary={sport.description} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <List>
                        {sports.slice(sports.length / 2).map((sport) => (
                            <ListItem key={sport.id}>
                                <ListItemText primary={sport.sportName} secondary={sport.description} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </>
    );
}

export default SportsPage;