import React from 'react';
import './App.css';

import {Grid, makeStyles} from '@material-ui/core';
import PortfolioCard from "./PortfolioCard";
import Portfolios from "./Portfolios"

const useStyles = makeStyles(theme => ({
  root : {
    // keep this to avoid app being slightly too large for screen
    padding :'12px'
  },
  grid : {

  },
}));


function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} >

        <Grid item xs={12}>

          {Portfolios.map(portfolio =>
            <PortfolioCard key={portfolio.title} portfolio={portfolio} />
          )}

        </Grid>

      </Grid>

    </div>
  );
}

export default App;
