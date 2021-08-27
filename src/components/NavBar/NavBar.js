import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import {
  Grid,
  Link,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  navbar: {
    width: '100%',
    height: '8vh',
    position: 'fixed',
    paddingTop: '10px',
    paddingBottom: '10px',
    zIndex: 2,
    backgroundColor: '#282C34'
  }
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <Grid container direction="row" justify="space-around">
        <Grid item>
          <Link component={RouterLink} to="/">
            <Typography variant="h4" component="header" color="primary">Home</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link component={RouterLink} to="/about">
            <Typography variant="h4" component="header" color="primary">About</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link component={RouterLink} to="/portfolio">
            <Typography variant="h4" component="header" color="primary">Portfolio</Typography>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default NavBar;