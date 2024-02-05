import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { Drawer, Divider, Collapse, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoiceDollar, faBook, faComments, faUser, faIndustry } from '@fortawesome/free-solid-svg-icons';
import Logo from './Logo';
import menuItems from './MenuItem';

library.add(faFileInvoiceDollar, faBook, faComments, faUser, faIndustry);

const iconStyle = { marginLeft: '1.5rem', color: 'white' };
const toggleIconStyle = { marginRight: '0rem', color: 'white' };
const sidebarStyle = {
  backgroundColor: '#004EDA',
  fontFamily: 'Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  color: 'white',
  width: '240px',
  height: '1024px',
};

const ListItemStyled = styled(ListItem)({
  padding: '4px 14px',
  '&:hover': {
    color: 'white',
    backgroundColor: '#F9C749FA',
  },
});

const Sidebar = () => {
  const [isOpenArray, setIsOpenArray] = useState(new Array(menuItems.length).fill(false));

  const handleToggle = (index) => {
    setIsOpenArray((prev) => {
      const newArray = [...prev];
      newArray[index] = !newArray[index];
      return newArray;
    });
  };

  useEffect(() => {
    const body = document.body;
    if (isOpenArray.some((isOpen) => isOpen)) {
      body.style.overflowY = 'hidden';
    } else {
      body.style.overflowY = 'auto';
    }

    return () => {
      body.style.overflowY = 'auto';
    };
  }, [isOpenArray]);

  return (
    <>
      <Drawer
        variant="permanent"
        anchor="left"
        PaperProps={{ style: sidebarStyle }}
        sx={{
          '& .MuiDrawer-paper': {
            overflowY: isOpenArray.some((isOpen) => isOpen) ? 'hidden' : 'auto',
          },
        }}
      >
        <Logo />
        <Divider />
        <List sx={{ marginTop: '130px',marginLeft:"-30px" }}>
          {menuItems.map((item, index) => (
            <div key={index}>
              <ListItemStyled button onClick={() => handleToggle(index)}>
                <ListItemIcon>
                  {/* Font Awesome icon */}
                  <FontAwesomeIcon icon={item.icon} style={iconStyle} />
                </ListItemIcon>
                <ListItemText primary={<Typography>{item.title}</Typography>} />
                {item.children && (isOpenArray[index] ? <ExpandLess style={toggleIconStyle} /> : <ExpandMore style={toggleIconStyle} />)}
              </ListItemStyled>
              {item.children && (
                <Collapse in={isOpenArray[index]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map((child, childIndex) => (
                      <ListItemStyled
                        key={childIndex}
                        button
                        component={Link}
                        to={child.link}
                        style={{ marginLeft: '35px' }}
                      >
                        <span style={{ marginRight: '6px', color: '#F9C749FA' }}>•</span> <ListItemText primary={<Typography>{child.title}</Typography>} />
                      </ListItemStyled>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
