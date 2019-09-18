import React from 'react';
import './App.css';

import {Grid, makeStyles} from '@material-ui/core';
import Language from "./Language";


const useStyles = makeStyles(theme => ({
  root : {

  },
  grid : {
    padding: theme.spacing(4)
  },
}));


function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.grid}>

        <Grid item xs={12}>
          <Language />


        </Grid>

      </Grid>

    </div>
  );
}

export default App;
