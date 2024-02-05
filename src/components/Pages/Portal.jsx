
import Grid from '@mui/material/Grid';
import Slidebar from '../Slidebar/Sidebar';
import Topbar from './TopSidebar';

const Portal = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={3}>
        <Slidebar />
      </Grid>
      <Grid item xs={12} sm={9}>
        <div>
          <Topbar />
        </div>
      </Grid>
    </Grid>
  );
}

export default Portal;
