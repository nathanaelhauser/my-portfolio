import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link as RouterLink } from 'react-router-dom'
import {
  Grid,
  Link,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  navbar: {
    height: '10vh',
    width: '100%',
    position: 'fixed',
    marginTop: '10px',
    zIndex: 2
  },

}))

const NavBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.navbar}>
      <Grid container direction="row" justify="space-around">
        <Grid item>
          <Link component={RouterLink} to="/">
            <Typography variant="h4" component="header" color="textPrimary">Home</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link component={RouterLink} to="/about">
            <Typography variant="h4" component="header" color="textPrimary">About</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link component={RouterLink} to="/portfolio">
            <Typography variant="h4" component="header" color="textPrimary">Portfolio</Typography>
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}

export default NavBar