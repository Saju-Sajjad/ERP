import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import LinkMUI from "@mui/material/Link";
import Portal from "../../../components/Pages/Portal";
const Dashboard = () => {
  return (
    <Grid
      container
      sx={{ color: "white", fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <Grid item xs={12} sm={12}>
        <Portal />
      </Grid>
      <Grid
        item
        container
        xs={12}
        sm={9.7}
        style={{ backgroundColor: "#004EDA", marginLeft: "auto" }}
      >
        <Grid item xs={12} sm={12} sx={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              whiteSpace: "nowrap",
            }}
          >
            <LinkMUI
              to="./profile"
              component={Link}
              sx={{ ...linkStyle, color: "yellow" }}
            >
              <span style={dotStyle}></span> Profile Overview
            </LinkMUI>
            <LinkMUI
              to="/booking-history"
              component={Link}
              sx={{ ...linkStyle, color: "yellow" }}
            >
              <span style={dotStyle}></span> Booking History
            </LinkMUI>
            <LinkMUI
              to="/preferences"
              component={Link}
              sx={{ ...linkStyle, color: "yellow" }}
            >
              <span style={dotStyle}></span> Preferences
            </LinkMUI>
            <LinkMUI
              to="/personalized-recommendation"
              component={Link}
              sx={{ ...linkStyle, color: "yellow" }}
            >
              <span style={dotStyle}></span> Personalized Recommendation
            </LinkMUI>
            <LinkMUI
              to="/loyalty-points"
              component={Link}
              sx={{ ...linkStyle, color: "yellow" }}
            >
              <span style={dotStyle}></span> Loyalty Points
            </LinkMUI>
            <LinkMUI
              to="/feedback-summery"
              component={Link}
              sx={{ ...linkStyle, color: "yellow" }}
            >
              <span style={dotStyle}></span> Feedback Summery
            </LinkMUI>
            <LinkMUI
              to="/communication-preferences"
              component={Link}
              sx={{ ...linkStyle, color: "yellow" }}
            >
              <span style={dotStyle}></span> Communication Preferences
            </LinkMUI>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Your main content goes here */}
        </Grid>
      </Grid>
    </Grid>
  );
};

const linkStyle = {
  color: "#FFD700",
  padding: "10px", // Adjust the padding as needed
  textDecoration: "none",
  position: "relative",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  width: "100%",
  transition: "color 0.3s ease",
  "&.MuiLink-root": {
    borderBottom: "none", // Remove default MUI Link bottom border
  },

  "&:hover": {
    color: "#FFFF",
    backgroundColor: "#F9C749FA",
    "&.MuiLink-root": {
      borderBottom: "none", // Remove bottom border on hover
    },
  },
};

const dotStyle = {
  width: "6px",
  height: "6px",
  borderRadius: "50%",
  backgroundColor: "#F9C749FA",
  marginRight: "4px",
};

export default Dashboard;
