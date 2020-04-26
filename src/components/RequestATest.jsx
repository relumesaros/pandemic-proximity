import React, { useState } from 'react';
import styled from 'styled-components';
import withStyles from '@material-ui/core/es/styles/withStyles';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {
  ButtonBlueFilled,
  ButtonWhiteUnfilled,
  ContainerWrapper,
  Title,
} from './CommonComponent';
import { Link } from 'react-router-dom';

const GridWrapper = styled.div`
  margin-top: 20px;
`;

const PeriodExpieriencingQuestion = styled.p`
  color: #272d40;
  font-size: 14px;
`;

const ButtonsWrapper = styled.div`
  margin: 10px 0;
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
  price: {
    marginTop: '1.15rem',
  },
}));

const BlueRadio = withStyles({
  root: {
    border: '2px solid',
    borderColor: '#2D74FF',
    borderRadius: '20px',
    margin: '0.5rem 0',
    width: '100%',
  },
  label: {
    width: '85%',
  },
})(FormControlLabel);

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

const RequestATest = () => {
  const classes = useStyles();

  return (
    <ContainerWrapper>
      <div>
        <Title>Checkout</Title>
      </div>

      <Typography variant="h5" display="block" gutterBottom>Payment Method</Typography>

      <FormControl component="fieldset">
        <RadioGroup aria-label="payment" name="payment" defaultValue="card">
          <BlueRadio
            value="card"
            control={<Radio color="primary" />}
            label="Credit / Debit Card"
            labelPlacement="start"
          />

          <BlueRadio
            value="cash"
            control={<Radio color="primary" />}
            label="Cash on Delivery"
            labelPlacement="start"
          />

          <BlueRadio
            value="bank"
            control={<Radio color="primary" />}
            label="Bank Transfer"
            labelPlacement="start"
          />
        </RadioGroup>
      </FormControl>

      <Grid container spacing={1}>
        <Grid item xs={4} className={classes.price}>
          <Typography variant="caption" display="block" gutterBottom>Total to Pay</Typography>
          <Typography variant="h6" display="block" gutterBottom>20 €</Typography>
        </Grid>
        <Grid item xs={8}>
          <ButtonsWrapper>
            <ButtonBlueFilled content="Proceed" />
          </ButtonsWrapper>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
};

export default RequestATest;
