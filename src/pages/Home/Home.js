import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Grid
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    marginLeft: '20px',
    overflow: 'hidden'
  },
  fullHeight: {
    height: '-webkit-fill-available',
  }
}))

const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid 
        container 
        spacing={2}
        direction="column" 
        justify="center" 
        alignContent="center" 
        className={classes.fullHeight}
      >
        <Grid container item justify="center" alignContent="center" alignItems="center">
          <Typography variant='h1' component='h1' color='textSecondary'>Welcome!</Typography>
        </Grid>
        <Grid container item justify="center" alignContent="center" alignItems="center">
          <Typography variant='h2' component='h2' color='textSecondary'>I'm Nathanael Hauser</Typography>
        </Grid>
        <Grid container item justify="center" alignContent="center" alignItems="center">
          <Typography variant='body1' component='p' color='textPrimary' align="center">
            I'm a full-stack developer and I can create a MERN web app for you. But more importantly, I love to learn!
          </Typography>
        </Grid>
        <Grid container item justify="center" alignContent="center" alignItems="center">
          <Typography variant='body1' component='p' color='textPrimary' align="center">
            Take a look around my website or check out my social on the left.
          </Typography>
        </Grid>
        <Grid container item justify="center" alignContent="center" alignItems="center">
          <Typography variant='body1' component='p' color='textPrimary' align="center">
            Maybe you'll see something you like!
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home