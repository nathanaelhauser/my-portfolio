import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Grid,
  Divider
} from '@material-ui/core'
import {
  LanguageCpp,
  LanguageJava,
  LanguageSwift,
  LanguageCss3,
  LanguageJavascript,
  LanguagePython,
  LanguagePhp,
  React as LanguageReact,
  Nodejs
} from 'mdi-material-ui'
import {
  DiDart,
  DiHtml5,
  DiMongodb,
  DiMysql
} from 'react-icons/di'
import GridIcon from '../GridIcon'

const useStyles = makeStyles(theme => ({
  root: {
    height: '92vh',
    marginTop: '8vh',
    marginLeft: '20px',
    overflowX: 'hidden'
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
  },
  skillsTitle: {
    textDecoration: 'underline',
    padding: '10px'
  },
  dividerColor: {
    color: "#F7F0F0"
  },
  skillsGrid: {
    marginTop: "5px"
  },
  cardIcon: {
    color: "#282C34",
    fontSize: '3rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem'
    }
  }
}))

const PlainAbout = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>

      {/* Title */}
      <Grid container direction="column" justify="flex-start" alignItems="center" wrap='nowrap'>
        <Grid item xs={10} className={classes.centerText}>
          <Typography variant='h1' component='header' color='textPrimary'>About</Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" className={classes.fullHeight}>

        {/* About Picture and Text */}
        <Grid item container direction="column" justify="flex-start" alignItems="center" wrap='nowrap'>
          <Grid container item xs={10} justify='center' alignContent='center' wrap='nowrap'>
            <img src={props.picture} alt="me" className={classes.profilePicture} />
          </Grid>
          <Grid item xs={10} className={classes.centerText}>
            <Typography variant='body1' component='span'>
              Full stack web developer bringing over 8 years of customer service into a technical career field. Skilled in html, css, javascript, swift, C++, and python and known for my patience, communication and ability to teach my coworkers. Passionate about learning and growing with each and every project. I want to help build technology that helps people live good and healthy lives. My past work experience gives me a good position to provide a good and workable UX. Enthused to leverage my experience and skills to help build team driven projects.
            </Typography>
          </Grid>
        </Grid>

        <Divider orientation="horizontal" variant="middle" className={classes.dividerColor} />

        {/* Skills */}
        <Grid item container direction="row" justify="center" spacing={2} className={classes.skillsGrid}>

          <GridIcon tooltip="C++">
            <LanguageCpp className={classes.cardIcon} />
          </GridIcon>
          <GridIcon tooltip="Java">
            <LanguageJava className={classes.cardIcon} />
          </GridIcon>
          <GridIcon tooltip="Swift">
            <LanguageSwift className={classes.cardIcon} />
          </GridIcon>
          <GridIcon tooltip="Html5">
            <DiHtml5 className={classes.cardIcon} />
          </GridIcon>
          <GridIcon tooltip="Css3">
            <LanguageCss3 className={classes.cardIcon} />
          </GridIcon>
          <GridIcon tooltip="Javascript">
            <LanguageJavascript className={classes.cardIcon} />
          </GridIcon>
          <GridIcon tooltip="Nodejs">
            <Nodejs className={classes.cardIcon} />
          </GridIcon>
          <GridIcon tooltip="React">
            <LanguageReact className={classes.cardIcon} />
          </GridIcon>
          <GridIcon tooltip="MongoDB">
            <DiMongodb className={classes.cardIcon} />
          </GridIcon>
          <GridIcon tooltip="MySQL">
            <DiMysql className={classes.cardIcon} />
          </GridIcon>
          <GridIcon tooltip="Dart">
            <DiDart className={classes.cardIcon} />
          </GridIcon>
          <GridIcon tooltip="Python">
            <LanguagePython className={classes.cardIcon} />
          </GridIcon>
          <GridIcon tooltip="Php">
            <LanguagePhp className={classes.cardIcon} />
          </GridIcon>

        </Grid>
      </Grid>
    </div>
  )
}

export default PlainAbout