import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardHeader,
  Typography,
  Grid,
  IconButton
} from '@material-ui/core';
import { GithubCircle } from 'mdi-material-ui';
import { DiHeroku } from 'react-icons/di';

const useStyles = makeStyles(theme => ({
  card: {
    textAlign: 'center',
    border: '2px solid #8AF3FF',
    width: '60rem'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  image: {
    height: '60rem',
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      height: '20rem'
    }
  },
  temp: {
    width: '20rem',
    height: 'auto'
  },
  links: {
    color: '#F7F0F0'
  }
}));

const TestProjectCard = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia 
        className={classes.temp}
        image={props.image}
        title={props.title}
      />
      {
        console.log(props.image)
      }
      {/* <CardHeader
        title={props.title}
      />
      <CardContent>
        <Grid container direction="column" justify="flex-start" alignContent="center" spacing={1}>
          <Grid container item justify="center">
            <img src={props.image} alt={props.title} className={classes.image} />
          </Grid>
          <Typography variant="body1" component="span">
            {props.description}
          </Typography>
        </Grid>
      </CardContent> */}
      {/* <CardActions>
        <IconButton href={props.github} >
          <GithubCircle className={classes.links} />
        </IconButton>
        <IconButton href={props.heroku} >
          <DiHeroku className={classes.links} />
        </IconButton>
      </CardActions> */}
    </Card>
  );
};

export default TestProjectCard;