import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';

const DiagnoseTitle = styled.h1`
  color: #272d40;
  font-size: 24px;
  font-weight: bold;
`;

const DiagnoseSubTitle = styled.p`
  color: #272d40;
  font-size: 14px;
  margin: 5px 0;
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

const DiagnoseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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
  card: {
    borderRadius: '16px',
    border: '1px solid #DAE7F2',
    padding: '16px 20px',
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    padding: '0 24px 20px 24px',
    height: '100%',
  },
}));

const Diagnose = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="sm" className={classes.container}>
        <DiagnoseWrapper>
          <div>
            <DiagnoseTitle>Diagnose</DiagnoseTitle>
            <DiagnoseSubTitle>
              Have a big impact in your Community.
            </DiagnoseSubTitle>
            <DiagnoseSubTitle>
              Help us to prevent the spread of COVID-19
            </DiagnoseSubTitle>

            <div className={classes.buttons}>
              <Link to="/self-health-check">
                <Button variant="outlined" className={classes.buttonBlue}>
                  Self Health Check
                </Button>
              </Link>
              <Button variant="outlined" className={classes.buttonRed}>
                Mark yourself as infected
              </Button>
            </div>
          </div>
          <Card variant="outlined" className={classes.card}>
            <CardTitle>Quick Test Kit</CardTitle>
            <CardSubTitle>
              You can request a COVID-19 Quick Test Kit for 20 €
            </CardSubTitle>
            <Button variant="contained" className={classes.buttonBlueFilled}>
              Request a Quick Test Kit
            </Button>
          </Card>
        </DiagnoseWrapper>
      </Container>
    </>
  );
};

export default Diagnose;
