import React, { useEffect, useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Grid,
  Collapse
} from '@material-ui/core'
import PagesContext from '../../utils/PagesContext'

const useStyles = makeStyles(theme => ({
  root: {
    height: '92vh',
    width: '100%',
    marginTop: '8vh',
    paddingLeft: '8%',
    paddingRight: '8%',
    position: 'relative',
    left: '0',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '8%',
      paddingRight: '0'
    }
  },
  fullHeight: {
    height: '-webkit-fill-available',
  },
  profilePicture: {
    position: 'relative',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    borderRadius: '4px',
    [theme.breakpoints.down('sm')]: {
      width: '200px'
    }
  },
  centerText: {
    textAlign: 'center'
  }
}))

const AnimatedAbout = props => {
  const classes = useStyles()
  const [collapse, setCollapse] = useState(false)
  const { toggleAbout } = useContext(PagesContext)

  useEffect(() => {
    setCollapse(true)
  }, [])

  return (
    <div className={classes.root}>
      <Collapse
        in={collapse}
        onEntered={() => toggleAbout()}
      >
        <Grid container direction="column" justify="flex-start" alignContent="center" className={classes.fullHeight} wrap='nowrap'>
          <Grid item xs={10} className={classes.centerText}>
            <Typography variant='h1' component='header' color='textPrimary'>About</Typography>
          </Grid>
          <Grid container item xs={10} justify='center' alignContent='center' wrap='nowrap'>
            <img src={props.picture} alt="me" className={classes.profilePicture} />
          </Grid>
          <Grid item xs={10} className={classes.centerText}>
            <Typography variant='body1' component='span'>
              Full stack web developer bringing over 8 years of customer service into a technical career field. Skilled in html, css, javascript, swift, C++, and python and known for my patience, enthusiasm and ability to teach my coworkers. Passionate about learning and growing with each and every project. I want to help build technology that helps people live good and healthy lives. My past work experience gives me a good position to provide a good and workable UX. Enthused to leverage my experience and skills to help build team driven projects.
          </Typography>
          </Grid>
        </Grid>
      </Collapse>
    </div>
  )
}

export default AnimatedAbout