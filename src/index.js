import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import AppBarDrawer from './AppBarDrawer'

import DataVis from './DataVis/DataVis.js'

import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';

const Images = () => <h1>Image Processing</h1>
const FrontEnd = () => <h1>Front End</h1>
const Notfound = () => <h1>Not found</h1>
const Workflow = () => <h1>Workflow</h1>
const About = () => <h1>About</h1>
const Contact = () => <h1>Contact</h1>


const theme = createMuiTheme({
  palette: {
    text: {
      primary: "rgba(0, 0, 0, 0.67)",
      tertiary : "rgba(255, 255, 255, 0.85)",
    }
  },
});

const routing = (
  <div style={{'marginTop': '60px'}}>
    <MuiThemeProvider theme={theme}>
  <AppBarDrawer />

  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/data" exact component={DataVis} />
      <Route path="/images" exact component={Images} />
      <Route path="/frontend" exact component={FrontEnd} />
      <Route path="/workflow" exact component={Workflow} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route component={Notfound} />
    </Switch>
  </Router>
    </MuiThemeProvider>
  </div>
)


ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
