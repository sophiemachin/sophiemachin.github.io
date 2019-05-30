import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import cma from './images/cma.png'
import completion from './images/completion.png'
import summary from './images/summary.png'


import {
  Typography as T,
} from '@material-ui/core'

import SingleLinGridList from '../SingleLineGridList.js'
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
  },
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
  },
  paper : {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
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
    <div className={classes.root}>
    <T variant='h3'>Data analysis and visualisation</T>
      <Paper className={classes.paper}>
        <T variant='h4'>Spreadsheets</T>
      <SingleLinGridList tileData={projects} />
      </Paper>

    </div>
  );
}

export default DataVis;
