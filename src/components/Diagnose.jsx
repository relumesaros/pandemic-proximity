import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import {
  ButtonBlueFilled,
  ContainerWrapper,
  SubTitle,
  Title24,
} from './CommonComponent';
import toastrService from '../service/toastrService';

const CardWrapper = styled.div`
  border-radius: 16px;
  border: 1px solid #dae7f2;
  padding: 16px 20px;
`;
const CardTitle = styled.p`
  color: #272d40;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const CardSubTitle = styled.p`
  color: #484b4d;
  font-size: 14px;
`;

const useStyles = makeStyles(theme => ({
  buttonBlue: {
    borderRadius: '16px',
    color: '#3B84FF',
    fontSize: '14px',
    margin: '10px 0',
    borderColor: '#2E79FF!important',
    'font-weight': 'bold',
    padding: '12px 0',
    'box-shadow': '0 2px 4px 0 rgba(0,0,0,0.17)',
    textTransform: 'none',
    width: '100%',
  },
  buttonBlueFilled: {
    borderRadius: '16px',
    color: '#fff',
    fontSize: '14px',
    margin: '10px 0',
    'font-weight': 'bold',
    padding: '12px 0',
    textTransform: 'none',
    width: '100%',
    border: '1px solid #2D7CFF',
    background: 'linear-gradient(270deg, #2F7BFF 0%, #41A0FF 100%)',
    'box-shadow': '0 4px 8px 0 rgba(18,15,16,0.14)',
  },
  buttonRed: {
    borderRadius: '16px',
    color: '#CF0F4D',
    fontSize: '14px',
    margin: '10px 0',
    borderColor: '#FF6496!important',
    'font-weight': 'bold',
    padding: '12px 0',
    'box-shadow': '0 2px 4px 0 rgba(0,0,0,0.17)',
    textTransform: 'none',
    width: '100%',
  },
  buttons: {
    margin: '20px 0',
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Diagnose = () => {
  const classes = useStyles();

  return (
    <ContainerWrapper>
      <div>
        <Title24>Diagnose</Title24>
        <SubTitle>Have a big impact in your Community.</SubTitle>
        <SubTitle>Help us to prevent the spread of COVID-19</SubTitle>

        <div className={classes.buttons}>
          <Link to="/self-health-check">
            <Button variant="outlined" className={classes.buttonBlue}>
              Self Health Check
            </Button>
          </Link>
          <Button
            variant="outlined"
            className={classes.buttonRed}
            onClick={() => {
              toastrService.success(
                'You marked yourself as infected. Stay safe!'
              );
            }}
          >
            Mark yourself as infected
          </Button>
        </div>
      </div>
      <CardWrapper>
        <CardTitle>Quick Test Kit</CardTitle>
        <CardSubTitle>
          You can request a COVID-19 Quick Test Kit for 20 €
        </CardSubTitle>
        <Link to="/diagnose/request-a-test">
          <ButtonBlueFilled content="Request a Quick Test Kit" />
        </Link>
      </CardWrapper>
    </ContainerWrapper>
  );
};

export default Diagnose;
