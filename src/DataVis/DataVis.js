import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {Paper, Typography as T,} from '@material-ui/core'

import SingleLinGridList from '../SingleLineGridList.js'

import cma from './images/cma.png'
import completion from './images/completion.png'
import summary from './images/summary.png'

import pdf_cover from './images/pdf_cover.png'
import pdf_active from './images/pdf_active.png'
import pdf_prog from './images/pdf_prog.png'

import cli_cpd from './images/cli_cpd.png'
import cli_sub from './images/cli_sub.png'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
  },
  paper : {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
}))

const spreadsheets = [
  {
    img: cma,
    title: 'Data visualisation',
  }, {
    img: completion,
    title: 'Image Processing',
  }, {
    img: summary,
    title: 'Front End',
  }
];

const Pdfs = [
  {
    img: pdf_cover,
    title: 'PDF cover',
  }, {
    img: pdf_active,
    title: 'PDF active users',
  }, {
    img: pdf_prog,
    title: 'PDF progress',
  }
];


const Cli = [
  {
    img: cli_cpd,
    title: 'Command line tool',
  }, {
    img: cli_sub,
    title: 'Command line tool',
  }
];

function DataVis() {

  const classes = useStyles();

  return (
      <div>
        <div className={classes.root}>

          <T variant='h3'>Data analysis and reporting</T>
            <Paper className={classes.paper}>
              <T variant='h4'>Spreadsheets</T>
              <SingleLinGridList tileData={spreadsheets} />
            </Paper>

            <Paper className={classes.paper}>
              <T variant='h4'>PDF reporting</T>
              <SingleLinGridList tileData={Pdfs} />
            </Paper>

          <Paper className={classes.paper}>
              <T variant='h4'>Command line tools</T>
              <SingleLinGridList tileData={Cli} />
            </Paper>
        </div>
      </div>
  );
}

export default DataVis;
