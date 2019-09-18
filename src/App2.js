import React from 'react';
import './App.css';

import {makeStyles} from '@material-ui/core/styles';

import {Card, CardHeader, Grid} from '@material-ui/core'
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import book_text from './images/book_text.jpg'
import CardMedia from "@material-ui/core/CardMedia";

const tileData = [
  {
    title: 'Language processing app',
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
  // media: {
  //   height: 0,
  //   paddingTop: '56.25%', // 16:9
  // },
  avatar:{
    margin : theme.spacing(0.5),
  },
  img: {
    // minWidth: '300px',
    maxWidth: '100%',
    maxHeight: '100%',

  },
  mediaContainer: {
    // width : '30%'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  cardText : {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardButtons : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button : {
    padding: '10px',
    display: 'flex',
  }
}))


const frontendUrl = "https://sophiemachin.github.io/wordcounter_frontend/"

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.grid}>

        <Grid item xs={12}>
          <Card className={classes.card}>

            <CardHeader title={'Language processing app'}/>
            <CardContent>
              <div className={classes.cardContent}>
                <Grid container >
                <Grid item xs={12} sm={6} m={4}>
                  <div className={classes.mediaContainer}>
                    <CardMedia className={classes.media} src='./images/book_text.jpg'>
                      <img
                        src={book_text}
                        className={classes.img}
                        alt="Text from a book"
                      />
                    </CardMedia>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} m={8}>

                  <div className={classes.cardText}>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla non sollicitudin turpis, a consectetur purus. Integer
                      vitae velit vel leo porttitor vehicula pulvinar nec augue.
                    </div>
                    <div className={classes.cardButtons}>
                      <div className={classes.button}>
                        <Button variant='outlined' href={frontendUrl}>
                          Link to app
                        </Button>
                      </div>
                      <div className={classes.button}>
                        <Button variant='outlined' href={frontendUrl}>
                          View on GitHub
                        </Button>
                      </div>
                    </div>
                  </div>
                </Grid>
                </Grid>
              </div>
            </CardContent>

          </Card>

        </Grid>

      </Grid>

    </div>
  );
}

export default App;
