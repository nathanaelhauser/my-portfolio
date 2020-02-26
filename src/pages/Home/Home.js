import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Grid,
  Grow,
  Zoom,
  Slide,
  Fade
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

const Home = () => {
  const classes = useStyles()
  const [transition, setTransition] = useState({
    greeting: true,
    name: false,
    firstLine: false,
    secondLineOne: false,
    secondLineTwo: false,
    thirdLine: false
  })

  useEffect(() => {
    setTransition({ ...transition, greeting: true })
  }, [])

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
          <Grow
            in={transition.greeting}
            style={{ transformOrigin: '0 0 0' }}
            onEntered={() => setTransition({ ...transition, name: true })}
            {...(transition.greeting ? { timeout: 1000 } : {})}
          >
            <Typography variant='h1' component='h1' color='textPrimary'>Welcome!</Typography>
          </Grow>
        </Grid>
        <Grid container item justify="center" alignContent="center" alignItems="center">
          <Grow
            in={transition.name}
            onEntered={() => setTransition({ ...transition, firstLine: true })}
            {...(transition.name ? { timeout: 3500 } : {})}
          >
            <Typography variant='h2' component='h2' color='textPrimary' className={classes.centerText}>I'm Nathanael Hauser</Typography>
          </Grow>
        </Grid>
        <Grid container item justify="center" alignContent="center" alignItems="center">
          <Fade
            in={transition.firstLine}
            onEntered={() => setTransition({ ...transition, secondLineOne: true })}
          >
            <Typography variant='body1' component='span' color='textSecondary' className={classes.centerText}>
              I'm a full-stack developer and I can create a MERN web app for you. But more importantly, I love to learn!
            </Typography>
          </Fade>
        </Grid>
        <Grid container item justify="center" alignContent="center" alignItems="center">
          <Slide
            direction='down'
            in={transition.secondLineOne}
            onEntered={() => setTransition({ ...transition, secondLineTwo: true })}
            {...(transition.secondLineOne ? { timeout: 3500 } : {})}
          >
            <Typography variant='body1' component='p' color='textSecondary' className={classes.trailingSpace}>
              Take a look around my website ...
            </Typography>
          </Slide>
          <Slide
            direction='right'
            in={transition.secondLineTwo}
            onEntered={() => setTransition({ ...transition, thirdLine: true })}
            {...(transition.secondLineTwo ? { timeout: 2500 } : {})}
          >
            <Typography variant='body1' component='p' color='textSecondary' className={classes.centerText}>
              or check out my social on the left.
            </Typography>
          </Slide>
        </Grid>
        <Grid container item justify="center" alignContent="center" alignItems="center">
          <Zoom
            in={transition.thirdLine}
            {...(transition.thirdLine ? { timeout: 1500 } : {})}
          >
            <Typography variant='body1' component='p' color='textSecondary' align="center">
              Maybe you'll see something you like!
            </Typography>
          </Zoom>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home