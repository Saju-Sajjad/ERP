import Grid from '@mui/material/Grid';
import Slidebar from '../Slidebar/Sidebar';
import Topbar from '../Pages/TopSidebar';

function Portal() {
  return (
    <Grid container>
      <Grid item xs={12} sm={3}>
        {/* The sidebar will take the full width on small screens (xs) and
             1/4 of the width on larger screens (sm and above). */}
        <Slidebar />
      </Grid>
      <Grid item xs={12} sm={9}>
        {/* The topbar will take the full width on small screens (xs) and
             3/4 of the width on larger screens (sm and above). */}
        <div>
          <Topbar />
        </div>
      </Grid>
    </Grid>
  );
}

export default Portal;