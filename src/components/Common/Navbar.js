import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userProfile, setUserProfile] = React.useState({});
  const [profile, setProfile] = React.useState()
  const navigate = useNavigate();


  React.useEffect(() => {
    if (localStorage.getItem('user') === null) {
      setAuth(false);
    }

    if (localStorage.getItem('user') !== null) {
      let user = JSON.parse(localStorage.getItem('user'));
      let prof = localStorage.getItem('profile');
      setUserProfile(user);
      setProfile(prof);
    }
  }, [])

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    localStorage.clear();
    event.preventDefault();
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#707EFF" }}>
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>

            Health-e
          </Typography>

          {/* <Typography variant="h6" component="div" sx={{ marginLeft: '852px', textAlign: 'right' }}>
            About us
          </Typography> */}
          {
            !auth && 
            <Button href="/login" variant="h6" sx={{ text: "white", marginRight: '30px', textAlign: 'right' }}>
            Login
          </Button>
          }

          {
            auth && profile !== "patient" && userProfile.is_admin && 
            <Button variant="h6" href="/decision" sx={{ marginLeft: '852px', textAlign: 'right' }}>
              Requests
            </Button>
          }


          {auth && (
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
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link href="/profile" underline="none"><MenuItem onClick={handleClose}>My account</MenuItem></Link>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}