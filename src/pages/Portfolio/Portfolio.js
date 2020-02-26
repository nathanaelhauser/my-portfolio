import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Grid
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100%',
    position: 'relative',
    left: '0'
  },
  fullHeight: {
    height: '-webkit-fill-available',
  },
  fadeContainer: {
    overflow: 'hidden'
  }
}))

const Portfolio = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center" alignContent="center" className={classes.fullHeight}>
        <div className={classes.fadeContainer}>
          <Typography variant='h1' component='header' color='textPrimary'>Portfolio</Typography>
        </div>
      </Grid>
    </div>
  )
}

export default Portfolio