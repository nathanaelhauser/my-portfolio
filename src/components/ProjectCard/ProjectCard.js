import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardHeader,
  IconButton
} from '@material-ui/core'
import { GithubCircle } from 'mdi-material-ui'
import { DiHeroku } from 'react-icons/di'

const ProjectCard = props => {
  return (
    <Card>
      <CardHeader 
        title={props.title}
      />
      <CardMedia image={props.image} />
      <CardContent>
        {props.children}
      </CardContent>
      <CardActions>
        <IconButton href={props.github} >
          <GithubCircle />
        </IconButton>
        <IconButton href={props.heroku} >
          <DiHeroku />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default ProjectCard