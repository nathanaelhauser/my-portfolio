import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  makeStyles
} from '@material-ui/core/styles'
import {
  CssBaseline,
  Grid
} from '@material-ui/core'
import {
  About,
  Home,
  Portfolio
} from './pages'
import NavBar from './components/NavBar'
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

const App = () => {
  const classes = useStyles()

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div>
          <CssBaseline />
          <NavBar />
          <Grid container direction="row" className={classes.fullHeight}>
            <Grid container item xs={1} sm={1} direction="column" justify="center" alignContent="center">
              <ContactBar />
            </Grid>
            <Grid item xs={11} sm={11}>
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
            </Grid>
          </Grid>
        </div>
      </Router>
    </MuiThemeProvider>
  )
}

export default App
