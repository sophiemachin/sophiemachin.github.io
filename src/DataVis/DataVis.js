import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import cma from './images/cma.png'
import completion from './images/completion.png'
import summary from './images/summary.png'


import {
  Grid, Typography as T,
} from '@material-ui/core'


import Example from './DataGallery'

const useStyles = makeStyles(theme => ({

  grid : {
    padding: theme.spacing(4)
  },
  card: {
    margin: theme.spacing(1),
    textAlign: 'center',

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  link : {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  }

}))

const projects = [
  {
    img: cma,
    title: 'Data visualisation',
    language: 'React, Plotly, Django',
    cols: 2,

  }, {
    img: completion,
    title: 'Image Processing',
    language: 'MATLAB and Octave',
    cols: 2,
    href: '/#/images',
  }, {
    img: summary,
    title: 'Front End',
    language: 'React',
    cols: 2,
    href: '/#/frontend',
  }
];

function DataVis() {

  const classes = useStyles();

  return (
    <div>
    <T variant='h3'>Data analysis and visualisation</T>
    <Grid container spacing={3} className={classes.grid}>
    
    <Example />

    </Grid>
    </div>
  );
}

export default DataVis;
