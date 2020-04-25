import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: '20px',
    margin: '1rem auto',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    textTransform: 'none',
    width: '90%',
  },
  buttons: {
    height: 'auto',
    textAlign: 'center',
  },
  card: {
    borderColor: '#5384AA',
    borderRadius: '20px',
    margin: '0 auto',
    width: '90%',
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Diagnose = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="sm">
        <h1>Diagnose</h1>
        <p>Have a big impact in your Community.</p>
        <p>Help us to prevent the spread of COVID-19</p>

        <div className={classes.buttons}>
          <Link to="/self-health-check">
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Self Health Check
            </Button>
          </Link>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
          >
            Mark yourself as infected
          </Button>
        </div>

        <Card variant="outlined" className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Quick Test Kit
            </Typography>
            <Typography variant="body2" component="p">
              You can request a COVID-19 Quick Test Kit for 20 €
            </Typography>
          </CardContent>
          <CardActions className={classes.cardAction}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Request a Quick Test Kit
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};

export default Diagnose;
