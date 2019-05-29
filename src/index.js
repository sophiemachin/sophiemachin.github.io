import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, HashRouter as Router} from 'react-router-dom'
import AppBarDrawer from './AppBarDrawer'

import DataVis from './DataVis/DataVis.js'


// const DataVis = () => <h1>Data Visualisation</h1>
const Images = () => <h1>Image Processing</h1>
const FrontEnd = () => <h1>Front End</h1>
const Notfound = () => <h1>Not found</h1>

const routing = (
  <div style={{'marginTop': '60px'}}>
  <AppBarDrawer />

  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/data" exact component={DataVis} />
      <Route path="/images" exact component={Images} />
      <Route path="/frontend" exact component={FrontEnd} />
      <Route component={Notfound} />
    </Switch>
  </Router>
  </div>
)


ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
