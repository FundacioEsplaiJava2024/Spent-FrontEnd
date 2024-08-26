import CloseIcon from "@mui/icons-material/Close";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { Avatar, Box, Button, Grid, IconButton, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/HeaderComponent";
// import { apiSendContactForm } from "../api/ContactApiManager";
// import { contactValidator } from "../validations/ContactValidator";

export default function Contact() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const nameValue = data.get("name") as string;
        const emailValue = data.get("email") as string;
        const messageValue = data.get("message") as string;

        // if (contactValidator(nameValue, emailValue, messageValue)) {
        //     setError("Invalid input");
        //     return;
        // }

        // try {
        //     await apiSendContactForm(nameValue, emailValue, messageValue);
        //     navigate("/");
        // } catch (error) {
        //     setError("Error sending contact form");
        // }
    };

    const handleClose = () => {
        navigate("/");
    };

    return (
        <>
            <Header />
            <Grid container component="main" sx={{
                marginTop: 10, marginBottom: 5,
                display: "flex", justifyContent: "center", alignItems: "center"
            }}>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            position: "relative",
                        }}
                    >
                        <IconButton
                            sx={{
                                position: "absolute",
                                top: 8,
                                right: 8,
                            }}
                            onClick={handleClose}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Avatar sx={{ m: 1, bgcolor: "black" }}>
                            <ContactSupportIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Contact Us
                        </Typography>

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="message"
                                label="Message"
                                name="message"
                                multiline
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            {error && (
                                <Typography color="error" variant="subtitle2">
                                    {error}
                                </Typography>
                            )}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, backgroundColor: "black" }}
                            >
                                Send
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}