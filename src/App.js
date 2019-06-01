import React from 'react';
import './App.css';

import {makeStyles} from '@material-ui/core/styles';

import {Card, CardActionArea, CardHeader, Grid} from '@material-ui/core'

import SimpleBreadCrumbs from "./BreadCrumbs";
import Avatar from "@material-ui/core/Avatar";

const tileData = [
  {
    title: 'Data visualisation',
    language: 'React, Plotly, Django',
    cols: 2,
    href: '/#/data',
    icons : [
      'fas fa-database',
      'fab fa-python',
      'fas fa-chart-bar',
    ],
  }, {
    title: 'Image Processing',
    language: 'MATLAB and Octave',
    cols: 2,
    href: '/#/images',
    icons: [
      'fas fa-image',
      'fas fa-sliders-h',

    ],
  }, {
    title: 'Front End',
    language: 'React',
    cols: 2,
    href: '/#/frontend',
    icons : [
      'devicon-webpack-plain',
      'fab fa-js',
      'fab fa-react',
    ],
  }, {
    title: 'Puzzles',
    language: 'C++ and Python',
    cols: 2,
    href: '/#/puzzles',
    icons: [
      'fas fa-puzzle-piece',
      'devicon-cplusplus-plain',
    ],
  }, {
    title: 'Workflow',
    language: 'Workflow tools',
    cols: 2,
    href: '/#/workflow',
    icons: [
      'devicon-github-plain',
      'devicon-pycharm-plain',
      'devicon-trello-plain',
  ],
},

];


const useStyles = makeStyles(theme => ({
  root: {
    padding: '20px',
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
  avatar:{
    margin : theme.spacing(0.5),
  },
}))


function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
    <SimpleBreadCrumbs />
        <Grid container spacing={3} className={classes.grid}>

          {tileData.map(tile => (
          <Grid item xs={12} sm={6} key={tile.href}>
            <Card className={classes.card}>
            <CardActionArea href={tile.href}>
              <CardHeader title={tile.title} subheader={tile.language}/>
              <Grid container justify="center" alignItems="center">
              {tile.icons.map(icon =>
                <Avatar key={icon} className={classes.avatar}>
                  <i key={icon} className={`${icon}`}/>
                </Avatar>
              )}

              </Grid>
              </CardActionArea>

            </Card>

          </Grid>
        ))}

        </Grid>

    </div>
  );
}

export default App;
