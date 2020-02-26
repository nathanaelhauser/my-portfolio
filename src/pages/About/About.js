import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Grid,
  Grow
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

const About = () => {
  const classes = useStyles()
  const [grow, setGrow] = useState(false)

  useEffect(() => {
    setGrow(true)
  }, [])

  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center" alignContent="center" className={classes.fullHeight}>
        <Grow 
          in={grow}
          style={{ transformOrigin: '0 0 0' }}
          {...(grow ? { timeout: 1000 } : {} )}
        >
          <Typography variant='h1' component='header' color='textPrimary'>About</Typography>
        </Grow>
      </Grid>
    </div>
  )
}

export default About