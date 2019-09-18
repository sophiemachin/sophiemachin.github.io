import {Card, CardHeader, makeStyles, Typography as T} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
  },
  content : {
    display:'flex',
    // height: '50vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    margin: theme.spacing(1),
    // textAlign: 'center',
  },
  avatar:{
    margin : theme.spacing(0.5),
  },
  form : {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
  textField : {
    minWidth:'400px',
    margin: '5px',
  }

}));


function Contact() {
  const classes = useStyles();

  const [feedback, setFeedback] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');


  function sendFeedback (templateId, variables) {
    window.emailjs.send(
      'gmail', templateId,
      variables
    ).then(res => {
      console.log('Email successfully sent!')
    })
    // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  function handleSubmit() {
    const templateId = 'template_65sJ28Jj';
    sendFeedback(templateId, {
      message_html: feedback,
      from_name: name,
      email: email,
    })
  }

  return <div className={classes.root}>
    <div className={classes.content}>
      <Card className={classes.card}>
        <CardHeader title='Get in touch!' />
        <CardContent >
          <T variant='body1'>If you're interested in a collaboration or want
            to use one of my projects, I'd love to hear from you. </T>

        <Grid container justify="center" alignItems="center">

          <form className="test-mailing">
            <div className={classes.form}>
              <TextField
                className={classes.textField}
                variant="outlined"
                label='Name'
                onChange={e => setName(e.target.value)}
                value={name}
              />
              <TextField
                className={classes.textField}
                variant="outlined"
                label='Email address'
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
              <TextField
                className={classes.textField}
                variant="outlined"
                onChange={e => setFeedback(e.target.value)}
                value={feedback}
                multiline
                rows="4"
                label="Message"
                required
              />
            </div>
            <Button
              variant='contained'
              color='primary'
              onClick={handleSubmit}
              disabled={!feedback}
            >
              Submit
            </Button>
          </form>
        </Grid>
        </CardContent>
      </Card>
    </div>
  </div>
}

export default Contact