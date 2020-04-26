import React, { useState } from 'react';
import styled from 'styled-components';
import withStyles from '@material-ui/core/es/styles/withStyles';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
  ButtonBlueFilled,
  ButtonWhiteUnfilled,
  ContainerWrapper,
  SubTitle,
  Title,
} from './CommonComponent';

const GridWrapper = styled.div`
  margin-top: 20px;
`;

const PeriodExpieriencingQuestion = styled.p`
  color: #272d40;
  font-size: 14px;
`;

const useStyles = makeStyles(() => ({
  root: {
    margin: '40px 0 0 5%',
    width: '90%',
  },
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
  symptomsButtonRoot: {
    borderRadius: '16px',
    color: '#272D40',
    fontSize: '14px',
    margin: '10px 0',
    borderColor: '#E7EFF6!important',
    padding: '12px 0',
    textTransform: 'none',
    width: '100%',
  },
  symptomsButtonSelected: {
    borderRadius: '16px',
    color: '#3B84FF',
    fontSize: '14px',
    margin: '10px 0',
    borderColor: '#2E79FF!important',
    'font-weight': 'bold',
    padding: '12px 0',
    textTransform: 'none',
    width: '100%',
  },
  sliderContainer: {},
  slider: {
    width: '85%',
    color: '#2D74FF',
  },
  container: {
    padding: '0 24px 20px 24px',
    height: '100%',
  },
}));

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = withStyles({
  root: {
    color: '#3880ff',
    height: 2,
    padding: '15px 0',
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    '&:focus, &:hover, &$active': {
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 11px)',
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);

const SelfHealthCheck = () => {
  const classes = useStyles();

  const marks = [
    { value: 0, label: 'Today' },
    { value: 1 },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' },
    { value: 11, label: '11' },
    { value: 12, label: '12' },
    { value: 13 },
    { value: 14, label: '+14 days' },
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
    <ContainerWrapper>
      <div>
        <Title>Self Health Check</Title>
        <SubTitle>What symptoms do you feel?</SubTitle>
        <GridWrapper>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Button
                className={
                  healthState.symptoms.fever
                    ? classes.symptomsButtonSelected
                    : classes.symptomsButtonRoot
                }
                variant="outlined"
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
                className={
                  healthState.symptoms.couch
                    ? classes.symptomsButtonSelected
                    : classes.symptomsButtonRoot
                }
                variant="outlined"
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
                className={
                  healthState.symptoms.soreThroat
                    ? classes.symptomsButtonSelected
                    : classes.symptomsButtonRoot
                }
                variant="outlined"
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
                className={
                  healthState.symptoms.difficultyBreathing
                    ? classes.symptomsButtonSelected
                    : classes.symptomsButtonRoot
                }
                variant="outlined"
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
                className={
                  healthState.symptoms.tiredness
                    ? classes.symptomsButtonSelected
                    : classes.symptomsButtonRoot
                }
                variant="outlined"
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
                className={
                  healthState.symptoms.musclePain
                    ? classes.symptomsButtonSelected
                    : classes.symptomsButtonRoot
                }
                variant="outlined"
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
        </GridWrapper>

        <PeriodExpieriencingQuestion>
          How long have you been experiencing these symptoms?
        </PeriodExpieriencingQuestion>

        <div className={classes.root}>
          <IOSSlider
            aria-label="ios slider"
            defaultValue={0}
            marks={marks}
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={14}
          />
        </div>
      </div>

      <div className={classes.buttons}>
        <ButtonBlueFilled content="Send the Symptoms" />
        <ButtonWhiteUnfilled content="Request a Quick Test Kit" />
      </div>
    </ContainerWrapper>
  );
};

export default SelfHealthCheck;
