import React from 'react';
import './App.css';


import { makeStyles } from '@material-ui/core/styles';

import breakfast from './images/breakfast.jpg'
import burgers from './images/burgers.jpg'

import {
  Grid, Card, CardHeader, CardMedia, Typography as T
} from '@material-ui/core'

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

}))

const tileData = [
  {
    img: breakfast,
    title: 'Data visualisation',
    language: 'React',
    cols: 2,
  }, {
    img: burgers,
    title: 'Image Processing',
    language: 'MATLAB',
    cols: 2,
  }, {
    img: burgers,
    title: 'Puzzles',
    language: 'C++ and Python',
    cols: 2,
  }
];

function App() {

  const classes = useStyles();

  return (
    <div className="App">

        <T variant="h3">Sophie Machin's portfolio</T>

        <Grid container spacing={3} className={classes.grid}>

          {tileData.map(tile => (
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardHeader title={tile.title} subheader={tile.language}/>
              <CardMedia
                className={classes.media}
                image={tile.img}
              />
            </Card>
          </Grid>
        ))}

        </Grid>

    </div>
  );
}

export default App;
