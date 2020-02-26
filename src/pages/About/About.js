import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Grid
} from '@material-ui/core'
import cardImg from './images/profile-pic.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100%',
    marginTop: '8vh',
    position: 'relative',
    left: '0'
  },
  fullHeight: {
    height: '-webkit-fill-available',
  },
  profilePicture: {
    position: 'relative',
    width: '80%',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    borderRadius: '4px',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  centerText: {
    textAlign: 'center'
  }
}))

const About = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center" alignContent="center" className={classes.fullHeight}>
        <Grid container item direction='row' justify='center' alignContext='center'>
          <Grid item xs={10} sm={12} className={classes.centerText}>
            <Typography variant='h1' component='header' color='textPrimary'>About</Typography>
          </Grid>
        </Grid>
        <Grid container item direction='row' justify='center' alignContext='center'>
          <Grid item xs={8} sm={12}>
            <img src={cardImg} alt="me" className={classes.profilePicture} />
          </Grid>
        </Grid>
        <Grid container item direction='row' justify='center' alignContext='center'>
          <Grid item xs={10} sm={12} className={classes.centerText}>
            <Typography variant='body1' component='span'>
              Full stack web developer bringing over 8 years of customer service into a technical career field. Skilled in html, css, javascript, swift, C++, and python and known for my patience, enthusiasm and ability to teach my coworkers. Passionate about learning and growing with each and every project. I want to help build technology that helps people live good and healthy lives. My past work experience gives me a good position to provide a good and workable UX. Enthused to leverage my experience and skills to help build team driven projects.
          </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default About