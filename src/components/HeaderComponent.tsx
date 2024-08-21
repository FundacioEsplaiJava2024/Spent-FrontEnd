import AccountCircle from "@mui/icons-material/AccountCircle";
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from "@mui/icons-material/Logout";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
    window.location.href = "/";
  };

  const handleRedirect = () => {
    const username = localStorage.getItem("username");
    navigate(`/${username}`);
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleCreateEvent = () => {
    navigate("/event/create");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        id="Header"
        sx={{
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            component="img"
            src="/SPENT.png"
            alt="SPENT logo"
            onClick={handleHomeClick}
            sx={{
              width: "6%",
              cursor: "pointer"
            }}
          />
          <Button 
            color="primary"
            variant="contained"
            onClick={handleCreateEvent}
            sx={{ ml: 150, flexDirection: 'row-reverse' }}
          >
            <Box sx={{ flexGrow: 0, 
              minWidth: 5, 
              height: 24, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent:'center', 
              marginRight: 0, }}>
              <AddIcon sx={{ fontSize:30 }} />
            </Box>
          </Button>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >

              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: -40,
                horizontal: 80,
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleRedirect}>
                <AccountCircle /> Profile
              </MenuItem>
              <MenuItem
                onClick={handleLogout}
                id="logout"
                sx={{
                  color: "red",
                }}
              >
                <LogoutIcon /> Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
