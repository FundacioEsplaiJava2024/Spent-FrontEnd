import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { AccountCircle } from '@mui/icons-material';

export default function Header() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (         
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute"sx={{bgcolor:"black"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpenDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SPENT
          </Typography>
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
                  vertical: 'top',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: -35,
                  horizontal: 80,
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} sx={{color:"red"}}>Profile</MenuItem>
                <MenuItem onClick={handleClose} sx={{color:"red"}}>Log out</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
      <Drawer
        open={openDrawer}
        onClose={handleCloseDrawer}
        sx={{
            width:'100%',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: '35%',
                boxSizing:"inherit",
            }
        }}
        variant="temporary"
        anchor="left"
        >
            <List>
            <ListItem button onClick={handleCloseDrawer}>
            <ListItemText primary="Button 1" />
          </ListItem>
          <ListItem button onClick={handleCloseDrawer}>
            <ListItemText primary="Button 2" />
          </ListItem>
          <ListItem button onClick={handleCloseDrawer}>
            <ListItemText primary="Button 3" />
          </ListItem>
            </List>
      </Drawer>
    </Box>
  );
}