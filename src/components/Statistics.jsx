import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chart } from 'react-charts';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
  chartContainer: {
    height: '16rem',
  },
}));

const Statistics = () => {
  const classes = useStyles();

  const data = React.useMemo(
    () => [
      {
        label: 'New Cases',
        data: [
          [1586649600000, 300],
          [1586736000000, 320],
          [1586822400000, 330],
          [1586908800000, 340],
          [1586995200000, 350],
          [1587081600000, 370],
          [1587168000000, 372],
          [1587254400000, 375],
          [1587340800000, 372],
          [1587427200000, 368],
          [1587513600000, 367],
          [1587600000000, 360],
          [1587686400000, 355],
          [1587772800000, 350],
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'time', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    []
  );

  return (
    <>
      <Container maxWidth="sm">
        <h1>Statistics</h1>
        <p>Daily new cases</p>

        <Box className={classes.chartContainer}>
          <Chart data={data} axes={axes} tooltip />
        </Box>
      </Container>
    </>
  );
};

export default Statistics;
