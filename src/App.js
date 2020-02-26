import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {
  AnimatedSwitch,
  spring
} from 'react-router-transition'
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  makeStyles
} from '@material-ui/core/styles'
import {
  CssBaseline,
  AppBar,
  Breadcrumbs,
  Link,
  Typography,
  Grid
} from '@material-ui/core'
import {
  About,
  Home,
  Portfolio
} from './pages'
import ContactBar from './components/ContactBar'
import './assets/fonts/fonts.css'
// import logo from './logo.svg'

// MUI Theme for app

let theme = createMuiTheme({
  palette: {
    background: {
      default: '#282C34',
      paper: "#282C34"
    },
    primary: {
      main: '#109648',
      contrastText: '#F7F0F0'
    },
    secondary: {
      main: '#18A999',
      contrastText: '#F7F0F0'
    },
    error: {
      main: '#B83329',
      contrastText: '#F7F0F0'
    },
    text: {
      primary: '#8AF3FF',
      secondary: '#F7F0F0',
      hint: '#F7F0F0'
    }
  },
  typography: {
    'fontFamily': "\"Roboto Condensed\""
  }
})
theme = responsiveFontSizes(theme)

// Style to ensure full page height is used

const useStyles = makeStyles(theme => ({
  fullHeight: {
    height: '-webkit-fill-available'
  },
}))

// Adding animation to route transitions

const mapStyles = styles => ({
  opacity: styles.opacity
})

const fade = value => spring(value, {
  stiffness: 330,
  damping: 22
})

const fadeTransition = {
  atEnter: {
    opacity: 0
  },
  atLeave: {
    opacity: fade(0)
  },
  atActive: {
    opacity: fade(1)
  }
}

const App = () => {
  const classes = useStyles()

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container direction="row" className={classes.fullHeight}>
        <Grid container item xs={1} sm={1} direction="column" justify="center" alignContent="center">
          <ContactBar />
        </Grid>
        <Grid item xs={11} sm={11}>
          <Router>
            <AnimatedSwitch
              atEnter={fadeTransition.atEnter}
              atLeave={fadeTransition.atLeave}
              atActive={fadeTransition.atActive}
              mapStyles={mapStyles}
            >
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route exact path="/" component={Home} />
            </AnimatedSwitch>
            {/* <div>
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </div> */}
          </Router>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  )
}

export default App
