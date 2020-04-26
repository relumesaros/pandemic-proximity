import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles/index';

export const Title = styled.h1`
  color: #272d40;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

export const SubTitle = styled.p`
  color: #272d40;
  font-size: 14px;
  margin: 5px 0;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  box-sizing: border-box;
  padding: 24px;
  max-width: 500px;
  margin: 0 auto;
`;

export const ContainerWrapperNoPadding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  height: 100%;
  padding: 0;
  max-width: 500px;
  margin: 0 auto;
`;

const useButtonBlueFilledStyles = makeStyles(() => ({
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
}));

export const ButtonBlueFilled = ({ content }) => {
  const classes = useButtonBlueFilledStyles();
  return (
    <Button variant="contained" className={classes.buttonBlueFilled}>
      {content}
    </Button>
  );
};

const useButtonWhiteUnfilledStyles = makeStyles(() => ({
  buttonBlueFilled: {
    color: '#3B84FF',
    fontSize: '14px',
    margin: '10px 0',
    'font-weight': 'bold',
    padding: '12px 0',
    textTransform: 'none',
    width: '100%',
    border: 'none',
    background: '#fff',
    'box-shadow': 'none',
  },
}));

export const ButtonWhiteUnfilled = ({ content }) => {
  const classes = useButtonWhiteUnfilledStyles();
  return (
    <Button variant="contained" className={classes.buttonBlueFilled}>
      {content}
    </Button>
  );
};
