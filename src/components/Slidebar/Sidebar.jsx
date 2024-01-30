import  { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  styled,
} from '@mui/system';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBook } from '@fortawesome/free-solid-svg-icons';
import { Drawer, Divider, Collapse, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Logo from './Logo';
import customerManagementChildren from './CustomerMenuItems';
import bookingManagementChildren from './BookingMenuItem';
import accountingManagementChildren from './AccountingMenuItem';

const iconStyle = { marginRight: '0.5rem', color: 'white' };
const typographyVariant = 'body2';

const sidebarStyle = {
  backgroundColor: '#313E6B',
  fontFamily: 'Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
//   color: '#dadcde',
color:'white',
  width: '250',
};

const ListItemStyled = styled(ListItem)({
  padding: '6px 16px',
  '&:hover': {
    color: 'white',
    backgroundColor: '#F9C749FA',
  },
});


const Sidebar = () => {
  const [isCustomerOpen, setCustomerOpen] = useState(false);
  const [isBookingOpen, setBookingOpen] = useState(false);
  const [isAccountingOpen, setAccountingOpen] = useState(false);

  const handleCustomerClick = () => {
    setCustomerOpen(!isCustomerOpen);
  };

  const handleBookingClick = () => {
    setBookingOpen(!isBookingOpen);
  };

  const handleAccountingClick = () => {
    setAccountingOpen(!isAccountingOpen);
  };

  return (
    <>
      <Drawer variant="permanent" anchor="left" PaperProps={{ style: sidebarStyle }}>
        <Logo />
        <Divider />

        <List sx={{ marginTop: '130px' }}>
          {/* Customer Management */}
          <ListItemStyled button onClick={handleCustomerClick}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faUsers} style={{ ...iconStyle, marginLeft: '30px' }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant={typographyVariant}>
                  Customer Management
                </Typography>
              }
            />
            {isCustomerOpen ? <ExpandLess style={{ marginRight: '42px' }} /> : <ExpandMore style={{ marginRight: '42px' }} />}
          </ListItemStyled>
          <Collapse in={isCustomerOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {customerManagementChildren.map((child, index) => (
                <ListItemStyled
                  key={index}
                  button
                  component={Link}
                  to={child.link}
                  sx={{ marginLeft: '45px' }}
                >
                  <ListItemText
                    primary={
                      <Typography variant={typographyVariant}>
                        <span style={{ marginRight: '12px' }}>•</span> {child.title}
                      </Typography>
                    }
                  />
                </ListItemStyled>
              ))}
            </List>
          </Collapse>
               {/* Booking Management */}
               <ListItemStyled button onClick={handleBookingClick}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faBook} style={{ ...iconStyle, marginLeft: '30px' }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant={typographyVariant}>
                Booking Management
              </Typography>
            }
          />
          {isBookingOpen ? <ExpandLess style={{ marginRight: '42px' }} /> : <ExpandMore style={{ marginRight: '42px' }} />}
        </ListItemStyled>
        <Collapse in={isBookingOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {bookingManagementChildren.map((child, index) => (
              <ListItemStyled
                key={index}
                button
                component={Link}
                to={child.link}
                sx={{ marginLeft: '45px' }}
              >
                <ListItemText
                  primary={
                    <Typography variant={typographyVariant}>
                      <span style={{ marginRight: '12px' }}>•</span> {child.title}
                    </Typography>
                  }
                />
              </ListItemStyled>
            ))}
          </List>
        </Collapse>
          {/* Accounting Management */}
          <ListItemStyled button onClick={handleAccountingClick}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faBook} style={{ ...iconStyle, marginLeft: '30px' }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant={typographyVariant}>
                  Accounting Management
                </Typography>
              }
            />
            {isAccountingOpen? <ExpandLess style={{ marginRight: '42px' }} /> : <ExpandMore style={{ marginRight: '42px' }} />}
          </ListItemStyled>
          <Collapse in={isAccountingOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {accountingManagementChildren.map((child, index) => (
                <ListItemStyled
                  key={index}
                  button
                  component={Link}
                  to={child.link}
                  sx={{ marginLeft: '45px' }}
                >
                  <ListItemText
                    primary={
                      <Typography variant={typographyVariant}>
                        <span style={{ marginRight: '12px' }}>•</span> {child.title}
                      </Typography>
                    }
                  />
                </ListItemStyled>
              ))}
            </List>
          </Collapse>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
