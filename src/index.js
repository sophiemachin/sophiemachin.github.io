import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App2';
import * as serviceWorker from './serviceWorker';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import AppBarDrawer from './AppBarDrawer'

import {createMuiTheme, makeStyles, MuiThemeProvider} from '@material-ui/core/styles';

import {Card, CardActionArea, CardHeader, Typography as T,} from '@material-ui/core';
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Contact from "./Contact"

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
  },
  content : {
    display:'flex',
    height: '50vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    margin: theme.spacing(1),
    // textAlign: 'center',
  },
  avatar:{
    margin : theme.spacing(0.5),
  },
}))


function SkeletonPage({page}) {
  const classes = useStyles();
  return <div className={classes.root}>
    <T variant='h3'>{page}</T>
    <div className={classes.content}>
      <Card className={classes.card}>
        <CardActionArea >
          <CardHeader title='Coming soon'
                      subheader='This section is still under construction'/>
            <Grid container justify="center" alignItems="center">
              <Avatar className={classes.avatar}>
                <i className='fas fa-tools'/>
              </Avatar>
            </Grid>

        </CardActionArea>
      </Card>
    </div>
  </div>
}

const Notfound  = () => <SkeletonPage page='Not found'/>;
const About     = () => <SkeletonPage page='About'/>;


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
