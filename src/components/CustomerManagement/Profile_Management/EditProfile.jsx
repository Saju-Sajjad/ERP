
import Grid from "@mui/material/Grid";
import Portal from '../../Pages/Portal'
import Link from "@mui/material/Link";

const EditProfile= () => {
  return (
    <Grid container sx={{ color: "white", fontFamily: "Arial, Helvetica, sans-serif" }}>
      <Grid item xs={12} sm={12}>
        <Portal />
      </Grid>
      <Grid item container xs={12} sm={9.7} style={{ backgroundColor: '#004EDA', marginLeft: 'auto' }}>
        <Grid item xs={12} sm={12} sx={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            <Link to='/home' component="div" sx={{ ...linkStyle, color: 'yellow' }}><span style={dotStyle}></span> Profile Overview</Link>
            <Link to='/home' component="div" sx={{ ...linkStyle, color: 'yellow' }}><span style={dotStyle}></span> Profile Overview</Link>
            <Link to='/home' component="div" sx={{ ...linkStyle, color: 'yellow' }}><span style={dotStyle}></span> Profile Overview</Link>
            <Link to='/home' component="div" sx={{ ...linkStyle, color: 'yellow' }}><span style={dotStyle}></span> Profile Overview</Link>
            <Link to='/home' component="div" sx={{ ...linkStyle, color: 'yellow' }}><span style={dotStyle}></span> Profile Overview</Link>
            <Link to='/home' component="div" sx={{ ...linkStyle, color: 'yellow' }}><span style={dotStyle}></span> Profile Overview</Link>
            <Link to='/home' component="div" sx={{ ...linkStyle, color: 'yellow' }}><span style={dotStyle}></span> Profile Overview</Link>
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
  color: '#FFD700',
  padding:"10px",
  textDecoration: 'none',
  letterSpacing: '1px',
  position: 'relative',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  width: '100%', // Adjust the width as needed
  transition: 'color 0.3s ease', // Add a smooth transition effect for text color
  '&:hover': {
    color: '#FFFF', // Hover text color
    backgroundColor: '#F9C749FA', // Hover background color
  },
};

const dotStyle = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: '#F9C749FA',
  marginRight: '8px', // Adjust the space between the dot and text
};

export default EditProfile;
