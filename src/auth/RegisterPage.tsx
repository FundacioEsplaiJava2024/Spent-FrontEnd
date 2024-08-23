import * as React from "react";
import { Box, Button, Paper, Grid, Typography, Avatar, CssBaseline, Link} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { apiRegister } from "../api/AuthApiManager";
import { useNavigate } from "react-router-dom";
import ValidatedTextField from "../validations/ValidatedTextField";
import { emailValidator, nameValidator, passwordValidator, usernameValidator } from "../validations/RegisterValidator";



export default function RegisterPage({ setToken }: RegisterPageProps) {
  const navigate = useNavigate();
  const [emailIsValid, setEmailIsValid] = React.useState(false);
  const [passwordIsValid, setPasswordIsValid] = React.useState(false);
  const [confirmPasswordIsValid, setConfirmPasswordIsValid] = React.useState(false);
  const [usernameIsValid, setUsernameIsValid] = React.useState(false);
  const [nameIsValid, setNameIsValid] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    const name = data.get("name") as string;
    const username = data.get("username") as string;
    if (!emailIsValid || !passwordIsValid || !confirmPasswordIsValid || !usernameIsValid || !nameIsValid) {
      alert("Please fill in all fields correctly");
      return;
    }

    if (password !== data.get("confirm-password")) {
      alert("Passwords do not match");
      return;
    }
    const token = await apiRegister(email, password, name, username);

    if (token == undefined || token == "") {
      alert("Invalid register");
    } else {
      setToken(token);
      localStorage.setItem("accessToken", token);
      navigate('/');
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        id="grid"
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url("/LoginBackground.jpg")',

          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "black" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <ValidatedTextField
              margin="normal"
              required={true}
              fullWidth={true}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus={true}
              multiline={false}
              rows={1}
              validator={emailValidator}
              onChange={(isValid)=> setEmailIsValid(isValid)}
            />
            <ValidatedTextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              multiline={false}
              rows={1}
              validator={passwordValidator}
              onChange={(isValid) => setPasswordIsValid(isValid)}
            />
            <ValidatedTextField
              margin="normal"
              required
              fullWidth
              name="confirm-password"
              label="Confirm Password"
              type="password"
              id="confirm-password"
              autoComplete="current-password"
              multiline={false}
              rows={1}
              onChange={(isValid) => setConfirmPasswordIsValid(isValid)}
              validator={() => false}
              />
            <ValidatedTextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              multiline={false}
              rows={1}
              validator={usernameValidator}
              onChange={(isValid) => setUsernameIsValid(isValid)}
            />
            <ValidatedTextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="First Name"
              name="name"
              autoComplete="name"
              autoFocus
              multiline={false}
              rows={1}
              validator={nameValidator}
              onChange={(isValid) => setNameIsValid(isValid)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "black" }}
            >
              Register
            </Button>
            <Typography sx={{ textAlign: "center" }}>
              Already have an account? <Link href="/">Login</Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

type SetToken = (token: string | null) => void;

interface RegisterPageProps {
  setToken: SetToken;
}

