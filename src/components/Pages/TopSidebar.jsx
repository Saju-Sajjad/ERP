import { useState } from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  InputBase,
  Paper,
} from "@mui/material";
import {
  Search,
  Notifications,
  Person,
  Settings,
  Mail,
  Security,
  ExitToApp,
} from "@mui/icons-material";
import Logo from "../../assets/pics.jpg";
import { Link } from "react-router-dom";

const useStyles = styled((theme) => ({
  grow: {
    flexGrow: 1,
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  iconButton: {
    backgroundColor: "#F1F1F1",
    borderRadius: "10px",
    border: '1px solid gray', // Adjust the color and width as needed
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&:active": {
      backgroundColor: "transparent",
    },
    "&:focus": {
      outline: "none",
    },
    "&:hover, &:active": {
      boxShadow: "none",
    },
  },
  
}));

const TopSidebar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const notificationOpen = Boolean(notificationAnchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationMenu = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setNotificationAnchorEl(null);
  };

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", boxShadow: "none" }}
      >
        <Toolbar>
          <div className={classes.grow} />
          <div className={classes.search}>
            <Paper component="form" sx={{ backgroundColor: "#F1F1F1",borderRadius:'15px',boxShadow:'none' }}>
              <InputBase
                placeholder="Search"
                sx={{padding:'10px'}}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
              <IconButton className={classes.searchIcon}>
                <Search />
              </IconButton>
            </Paper>
          </div>
          <Box display="flex" alignItems="center" sx={{ marginLeft: "auto",padding:'4px' }}>
            <IconButton
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleNotificationMenu}
              className={classes.iconButton}
              sx={{
                color: "gray",
                padding:'20px'
              }}
            >
              <Badge badgeContent={17} color="error">
                <Notifications sx={{ color: "gray" }} />
              </Badge>
            </IconButton>

            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              className={classes.iconButton}
              sx={{
                borderRadius: '15px',
                "&:hover": { backgroundColor: "transparent" },
                "&:active": {
                  backgroundColor: "transparent",
                  boxShadow: "none",
                },
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#F1F1F1",
                  color: "black",
                  borderRadius:'15px',
                  padding:'10px',
                  width:'100%'
                }}
              >
                <Avatar src={Logo} alt="User Avatar" />
                <Box marginLeft="8px" textAlign="left">
                  <Typography variant="body1" fontWeight="bold">
                    Khadin Hussain
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    CEO
                  </Typography>
                </Box>
              </div>
            </IconButton>
          </Box>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/profile">
              <Person fontSize="small" style={{ marginRight: "8px" }} />
              My Profile
            </MenuItem>
            <MenuItem component={Link} to="/settings">
              <Settings fontSize="small" style={{ marginRight: "8px" }} />
              Settings
            </MenuItem>
            <MenuItem component={Link} to="/messages">
              <Mail fontSize="small" style={{ marginRight: "8px" }} />
              Messages
            </MenuItem>
            <MenuItem component={Link} to="/support">
              <Security fontSize="small" style={{ marginRight: "8px" }} />
              Support
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ExitToApp
                fontSize="small"
                style={{ marginRight: "8px", color: "red" }}
              />
              Logout
            </MenuItem>
          </Menu>

          <Menu
            id="notification-appbar"
            anchorEl={notificationAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={notificationOpen}
            onClose={handleClose}
          >
            {/* Add your notification menu items here */}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopSidebar;
