import React from 'react'
import {
  makeStyles,
  withStyles
} from '@material-ui/core/styles'
import {
  Grid,
  Card,
  CardContent,
  Tooltip
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  gridItem: {
    marginBottom: '5px'
  },
  card: {
    backgroundColor: "#8AF3FF",
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  }
}))

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip)

const GridIcon = props => {
  const classes = useStyles()

  return (
    <Grid item lg={1} className={classes.gridItem}>
      <LightTooltip title={props.tooltip}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            {props.children}
          </CardContent>
        </Card>
      </LightTooltip>
    </Grid>
  )
}

export default GridIcon