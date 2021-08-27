import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid
} from '@material-ui/core';
import ProjectCard from '../../components/ProjectCard';
import TestProjectCard from '../../components/TestProjectCard';
import cookieImage from './images/cookie_snapshot.png';
import flakeImage from './images/flake_snapshot.png';
import werkImage from './images/werk_snapshot.png';

const useStyles = makeStyles(theme => ({
  root: {
    height: '92vh',
    marginTop: '8vh',
    marginLeft: '20px',
    overflowX: 'hidden'
  },
  gridProject: {
    marginLeft: '1rem'
  },
  fullHeight: {
    height: '-webkit-fill-available',
  }
}));

const Portfolio = () => {
  const classes = useStyles();

  const projects = [
    {
      title: 'Hungry Cookie Monster - The Sequelize',
      image: cookieImage,
      github: 'https://github.com/mesmerizingYeti/sequelize-cookie-monster',
      heroku: 'https://enigmatic-ravine-58782.herokuapp.com/',
      description: `Hungry Cookie Monster is a full stack application that allows users to input cookies to bake and have the cookie monster eat them. This app utilizies Sequelize (MySQL), Express and Nodejs for the back end and React-Express-Views for the front end.`
    },
    {
      title: 'Flake',
      image: flakeImage,
      github: 'https://github.com/mesmerizingYeti/flake',
      heroku: 'https://tranquil-reef-16365.herokuapp.com/',
      description: `Flake is a full stack application that allows users to generate different excuses for events they just d o n ' t want to attend. We've all been there... Flake integrates several technologies to let its users use randomly generated excuses based on severity and even create their own excuses. Once they are happy with the reason to flake, they're given the ability to add them to their "Excuse Calendar" for them to check at any time so they can always keep their story straight.`
    },
    {
      title: 'Werk',
      image: werkImage,
      github: 'https://github.com/mesmerizingYeti/werk',
      heroku: 'https://fathomless-forest-35789.herokuapp.com/',
      description: `WERK is a full stack MERN application that lets users create a WERK account and create their own workouts or generate random workouts using exercises that the app offers. Users are able navigate between several pages throughout the app. The Home page gives them the ability to quickstart (which will generate a random workout) or create a custom workout (which allows the user to build their own workout). The Custom and Quickstart tabs go to those two pages. The Exercises page gives a list of all the exercises offered by the app. And the About page gives some info on the lovely developers. Listed on the Profile tab is the user's information and their saved workouts.`
    }
  ];

  return (
    <div className={classes.root}>
      <Grid 
        container 
        direction="column" 
        justify="flex-start" 
        alignItems="center" 
        wrap="nowrap" 
        spacing={2} 
        className={classes.fullHeight}
      >
        <Typography variant='h1' component='header' color='textPrimary'>Portfolio</Typography>
        {
          projects.map(project => (
            <Grid item xs={9}>
              <TestProjectCard 
                {...project}
              />
            </Grid> 
          ))
        }
      </Grid>
    </div>
  );
};

export default Portfolio;