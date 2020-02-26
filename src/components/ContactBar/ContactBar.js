import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography,
  IconButton
} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import EmailIcon from '@material-ui/icons/Email'

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    left: 0,
    zIndex: 1,
    marginLeft: '10px'
  }
})

const SideBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={2} direction="column" alignContent="center" justify="center">
        <Grid container item direction="row" justify="center" alignItems="center">
          <Typography variant="subtitle1" component="body" color="secondary">Contact</Typography>
        </Grid>
        <Grid container item direction="row" justify="center" alignItems="center">
          <IconButton color="secondary" href="https://github.com/mesmerizingYeti">
            <GitHubIcon />
          </IconButton>
        </Grid>
        <Grid container item direction="row" justify="center" alignItems="center">
          <IconButton color="secondary" href="https://linkedin.com/in/nathanael-hauser">
            <LinkedInIcon />
          </IconButton>
        </Grid>
        <Grid container item direction="row" justify="center" alignItems="center">
          <IconButton color="secondary" href="https://twitter.com/NathanaelHauser">
            <TwitterIcon />
          </IconButton>
        </Grid>
        <Grid container item direction="row" justify="center" alignItems="center">
          <IconButton color="secondary" href="mailto:nathanaelhauser@gmail.com?subject=Portfolio Contact">
            <EmailIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  )
}

export default SideBar