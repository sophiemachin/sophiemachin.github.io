import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import AppBarDrawer from './AppBarDrawer'


const Users = () => <h1>Users</h1>
const Contact = () => <h1>Contact</h1>
const Notfound = () => <h1>Not found</h1>

const routing = (
  <div>
  <AppBarDrawer />

  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/users" exact component={Users} />
      <Route path="/contact" exact component={Contact} />
      <Route component={Notfound} />
    </Switch>
  </Router>
  </div>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
