import React from 'react';
import logo from './logo.svg';
import './App.css';

import { GridList, GridListTile, GridListTileBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import breakfast from './images/breakfast.jpg'
import burgers from './images/burgers.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}))

const tileData = [
  {
    img: breakfast,
    title: 'Data visualisation',
    author: 'author',
    language: 'React',
    cols: 2,
  }, {
    img: burgers,
    title: 'Project Euler',
    author: 'author',
    language: 'C++',
    cols: 2,
  },
];

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Sophie Machin's portfolio</p>

        <GridList cellHeight={160} className={classes.gridList} cols={4}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>{tile.language}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
      </header>

    </div>
  );
}

export default App;
