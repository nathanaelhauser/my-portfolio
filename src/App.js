import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { 
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles'
import {
  Typography,
  AppBar,
  CssBaseline
} from '@material-ui/core'
import {
  About,
  Home,
  Portfolio
} from './pages'
import './assets/fonts/fonts.css'
// import logo from './logo.svg'

const theme = createMuiTheme({
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
      main: '#109648',
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

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <Typography variant="h1" component="header" color="textPrimary">Hello World!</Typography>
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
        </div>
      </Router>
    </MuiThemeProvider>
  )
}

export default App
