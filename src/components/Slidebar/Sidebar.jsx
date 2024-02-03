import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  faUsers,
  faUser,
  faCalendarAlt,
  faMoneyBill,
  faUserTie,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { styled } from "@mui/system";
import {
  Drawer,
  Divider,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./Logo";
import customerManagementChildren from "./CustomerMenuItems";
import bookingManagementChildren from "./BookingMenuItem";
import accountingManagementChildren from "./AccountingMenuItem";
import supplierManagementChildren from "./SupplierMenuItem";
import communicationChildren from "./CommunicationMenuItem";
import humanResourcesChildren from "./humanResourcesMenuItem";

const iconStyle = { marginRight: "0.5rem", color: "white" };
const typographyVariant = "body2";

const sidebarStyle = {
  backgroundColor: "#004EDA",
  fontFamily:
    'Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  color: "white",
  width: "240",
  height: "1024px",
};

const ListItemStyled = styled(ListItem)({
  padding: "6px 16px",
  "&:hover": {
    color: "white",
    backgroundColor: "#F9C749FA",
  },
});

// ... (imports remain the same)

const Sidebar = () => {
  const [isCustomerOpen, setCustomerOpen] = useState(false);
  const [isBookingOpen, setBookingOpen] = useState(false);
  const [isAccountingOpen, setAccountingOpen] = useState(false);
  const [isSupplierOpen, setSupplierOpen] = useState(false);
  const [isCommunicationOpen, setCommunicationOpen] = useState(false);
  const [isHumanResourcesOpen, setisHumanResourcesOpen] = useState(false);

  const handleToggle = (stateSetter) => {
    stateSetter((prevState) => !prevState);
  };

  useEffect(() => {
    const body = document.body;
    if (
      isCustomerOpen ||
      isBookingOpen ||
      isAccountingOpen ||
      isSupplierOpen ||
      isCommunicationOpen ||
      isHumanResourcesOpen
    ) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    return () => {
      body.style.overflow = "auto";
    };
  }, [
    isCustomerOpen,
    isBookingOpen,
    isAccountingOpen,
    isSupplierOpen,
    isCommunicationOpen,
    isHumanResourcesOpen,
  ]);

  return (
    <>
      <Drawer
        variant="permanent"
        anchor="left"
        PaperProps={{ style: sidebarStyle }}
      >
        <Logo />
        <Divider />

        <List sx={{ marginTop: "130px" }}>
          {[
            {
              icon: faUsers,
              text: "Customer Management",
              children: customerManagementChildren,
              state: isCustomerOpen,
              onClick: () => handleToggle(setCustomerOpen),
            },
            {
              icon: faCalendarAlt,
              text: "Booking Management",
              children: bookingManagementChildren,
              state: isBookingOpen,
              onClick: () => handleToggle(setBookingOpen),
            },
            {
              icon: faMoneyBill,
              text: "Accounting Management",
              children: accountingManagementChildren,
              state: isAccountingOpen,
              onClick: () => handleToggle(setAccountingOpen),
            },
            {
              icon: faUser,
              text: "Supplier Management",
              children: supplierManagementChildren,
              state: isSupplierOpen,
              onClick: () => handleToggle(setSupplierOpen),
            },
            {
              icon: faComments,
              text: "Communication",
              children: communicationChildren,
              state: isCommunicationOpen,
              onClick: () => handleToggle(setCommunicationOpen),
            },
            {
              icon: faUserTie,
              text: "Human Resources",
              children: humanResourcesChildren,
              state: isHumanResourcesOpen,
              onClick: () => handleToggle(setisHumanResourcesOpen),
            },
          ].map((item, index) => (
            <div key={index}>
              <ListItemStyled button onClick={item.onClick}>
                <ListItemIcon>
                  <FontAwesomeIcon
                    icon={item.icon}
                    style={{ ...iconStyle, marginLeft: "30px" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant={typographyVariant}>
                      {item.text}
                    </Typography>
                  }
                />
                {item.children ? (
                  item.state ? (
                    <ExpandLess style={{ marginRight: "42px" }} />
                  ) : (
                    <ExpandMore style={{ marginRight: "42px" }} />
                  )
                ) : null}
              </ListItemStyled>
              {item.children ? (
                <Collapse in={item.state} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map((child, childIndex) => (
                      <ListItemStyled
                        key={childIndex}
                        button
                        component={Link}
                        to={child.link}
                        sx={{ marginLeft: "45px" }}
                      >
                        <ListItemText
                          primary={
                            <Typography variant={typographyVariant}>
                              <span style={{ marginRight: "12px" }}>•</span>{" "}
                              {child.title}
                            </Typography>
                          }
                        />
                      </ListItemStyled>
                    ))}
                  </List>
                </Collapse>
              ) : null}
            </div>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
