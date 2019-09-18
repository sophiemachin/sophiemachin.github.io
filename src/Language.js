import {Card, CardHeader, Grid, makeStyles, Typography as T} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import book_text from "./images/book_text.jpg";
import Button from "@material-ui/core/Button";
import React from "react";

const frontendUrl = "https://sophiemachin.github.io/wordcounter_frontend/"

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(1),
    textAlign: 'center',
  },
  avatar:{
    margin : theme.spacing(0.5),
  },
  img: {
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
    padding: '0px 20px 0px 20px',
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
    padding: '5px',
    display: 'flex',
  },
  textBox: {
    textAlign: 'left'
  }
}));


function Language() {

  const classes = useStyles();

  return (
    <Card className={classes.card}>

      <CardHeader title={'Language processing app'} subtitle={'subtitle'}/>
      <CardContent>
        <div className={classes.cardContent}>
          <Grid container>
            <Grid item xs={12} sm={5} md={4}>
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
            <Grid item xs={12} sm={7} md={8}>

              <div className={classes.cardText}>
                <div>
                  <T varaint='body1' gutterBottom>
                    A small, single-page language processing app
                  </T>
                  <div className={classes.textBox}>
                    <T variant='body1' gutterBottom>
                      Front end: React and Material-UI
                    </T>
                  </div>
                  <div className={classes.textBox}>
                    <T variant='body1' gutterBottom>
                      Back end: Python and Natural Language Processing Toolkit
                    </T>
                  </div>
                </div>
                <div className={classes.cardButtons}>
                  <div className={classes.button}>
                    <Button variant='outlined' href={frontendUrl}>
                      View
                    </Button>
                  </div>
                  <div className={classes.button}>
                    <Button variant='outlined' href={frontendUrl}>
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </CardContent>

    </Card>
  )
}

export default Language