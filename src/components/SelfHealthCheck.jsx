import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
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
  symptomsButton: {
    borderRadius: '20px',
    margin: '0.2rem auto',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    textTransform: 'none',
    width: '90%',
  },
  sliderContainer: {
    textAlign: 'center',
  },
  slider: {
    width: '85%',
  },
}));

const SelfHealthCheck = () => {
  const classes = useStyles();

  const marks = [
    {
      value: 0,
      label: 'Today',
    },
    {
      value: 4,
      label: '4 days',
    },
    {
      value: 14,
      label: '+14 days',
    },
  ];

  // eslint-disable-next-line no-unused-vars
  const [healthState, setHealthSate] = useState({
    symptoms: {
      fever: false,
      couch: false,
      soreThroat: false,
      difficultyBreathing: false,
      tiredness: false,
      musclePain: false,
    },
    period: 0,
  });

  return (
    <>
      <Container maxWidth="sm">
        <h1>Self Health Check</h1>
        <p>What symptoms do you feel?</p>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Button
              className={classes.symptomsButton}
              variant="outlined"
              color={healthState.symptoms.fever ? 'primary' : ''}
              onClick={() =>
                setHealthSate({
                  symptoms: {
                    ...healthState.symptoms,
                    fever: !healthState.symptoms.fever,
                  },
                })
              }
            >
              Fever
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              className={classes.symptomsButton}
              variant="outlined"
              color={healthState.symptoms.couch ? 'primary' : ''}
              onClick={() =>
                setHealthSate({
                  symptoms: {
                    ...healthState.symptoms,
                    couch: !healthState.symptoms.couch,
                  },
                })
              }
            >
              Couch
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              className={classes.symptomsButton}
              variant="outlined"
              color={healthState.symptoms.soreThroat ? 'primary' : ''}
              onClick={() =>
                setHealthSate({
                  symptoms: {
                    ...healthState.symptoms,
                    soreThroat: !healthState.symptoms.soreThroat,
                  },
                })
              }
            >
              Sore-throat
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button
              className={classes.symptomsButton}
              variant="outlined"
              color={healthState.symptoms.difficultyBreathing ? 'primary' : ''}
              onClick={() =>
                setHealthSate({
                  symptoms: {
                    ...healthState.symptoms,
                    difficultyBreathing: !healthState.symptoms
                      .difficultyBreathing,
                  },
                })
              }
            >
              Difficulty Breathing
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button
              className={classes.symptomsButton}
              variant="outlined"
              color={healthState.symptoms.tiredness ? 'primary' : ''}
              onClick={() =>
                setHealthSate({
                  symptoms: {
                    ...healthState.symptoms,
                    tiredness: !healthState.symptoms.tiredness,
                  },
                })
              }
            >
              Tiredness
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button
              className={classes.symptomsButton}
              variant="outlined"
              color={healthState.symptoms.musclePain ? 'primary' : ''}
              onClick={() =>
                setHealthSate({
                  symptoms: {
                    ...healthState.symptoms,
                    musclePain: !healthState.symptoms.musclePain,
                  },
                })
              }
            >
              Muscle Pain
            </Button>
          </Grid>
        </Grid>

        <p>How long have you been experiencing these symptoms?</p>

        <div className={classes.sliderContainer}>
          <Slider
            className={classes.slider}
            defaultValue={0}
            aria-labelledby="discrete-slider-custom"
            step={1}
            valueLabelDisplay="auto"
            marks={marks}
            min={0}
            max={14}
          />
        </div>

        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Send the Symptoms
          </Button>

          <Button color="primary">Request a Quick Test Kit</Button>
        </div>
      </Container>
    </>
  );
};

export default SelfHealthCheck;
