import {Card, CardHeader, Grid, makeStyles, Typography as T} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import React from "react";

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(2),
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


function PortfolioCard({portfolio}) {

  const classes = useStyles();

  return (
    <Card className={classes.card}>

      <CardHeader
        title={portfolio.title}
        subheader={portfolio.subheader}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Grid container>
            <Grid item xs={12} sm={5} md={4}>
              <div className={classes.mediaContainer}>
                <img
                  src={portfolio.img}
                  className={classes.img}
                  alt={portfolio.imgAlt}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={7} md={8}>

              <div className={classes.cardText}>
                <div>
                  {(portfolio.text).map(t =>
                    <div className={classes.textBox} key={t}>
                      <T variant='body1' gutterBottom>
                        {t}
                      </T>
                    </div>
                  )}
                </div>
                <div className={classes.cardButtons}>
                  <div className={classes.button}>
                    <Button variant='outlined' href={portfolio.frontEndUrl}>
                      View
                    </Button>
                  </div>
                  <div className={classes.button}>
                    <Button variant='outlined' href={portfolio.githubUrl}>
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

export default PortfolioCard