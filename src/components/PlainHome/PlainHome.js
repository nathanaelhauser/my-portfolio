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
  },
  trailingSpace: {
    marginRight: '0.3rem',
    textAlign: 'center'
  },
  centerText: {
    textAlign: 'center'
  }
}))

const PlainHome = () => {
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
          <Typography variant='h1' component='h1' color='textPrimary'>
            Welcome!
          </Typography>
        </Grid>
        <Grid container item justify="center" alignContent="center" alignItems="center">
          <Typography variant='h2' component='h2' color='textPrimary' className={classes.centerText}>
            I'm Nathanael Hauser
          </Typography>
        </Grid>
        <Grid container item justify="center" alignContent="center" alignItems="center">
          <Typography variant='body1' component='span' color='textSecondary' className={classes.centerText}>
            I'm a full-stack developer and I can create a MERN web app for you. But more importantly, I love to learn!
          </Typography>
        </Grid>
        <Grid container item justify="center" alignContent="center" alignItems="center">
          <Typography variant='body1' component='p' color='textSecondary' className={classes.trailingSpace}>
            Take a look around my website ...
          </Typography>
          <Typography variant='body1' component='p' color='textSecondary' className={classes.centerText}>
            or check out my social on the left.
          </Typography>
        </Grid>
        <Grid container item justify="center" alignContent="center" alignItems="center">
          <Typography variant='body1' component='p' color='textSecondary' align="center">
            You'll definitely see something you like!
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default PlainHome