import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chart } from 'react-charts';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import countries from '../service/countriesService';

const useStyles = makeStyles(() => ({
  card: {
    borderColor: '#5384AA',
    borderRadius: '20px',
    margin: '0 auto',
    marginTop: '1rem',
    width: '90%',
  },
  chartContainer: {
    height: '16rem',
    marginTop: '4rem',
  },
  container: {
    position: 'relative',
  },
  countrySelector: {
    margin: '0 0.6rem',
    width: '96%',
  },
  flag: {
    height: '2rem',
    position: 'absolute',
    right: '1rem',
    top: '0.3rem',
  },
  red: {
    color: '#CF0F4D',
  },
  green: {
    color: '#34C082',
  },
  greenDark: {
    color: '#00BBA7',
  },
}));

const Statistics = () => {
  const classes = useStyles();

  const [country, setCountry] = useState({
    selected: 'RO',
  });

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
          [1587859200000, 348],
          [1587945600000, 346],
        ],
      },
    ],
    []
  );

  const selectCountry = event => {
    setCountry({ selected: event.target.value });
  };
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'time', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    []
  );

  return (
    <Container maxWidth="sm" className={classes.container}>
      <h1>Statistics</h1>

      <img
        className={classes.flag}
        src={`https://www.countryflags.io/${country.selected.toLowerCase()}/flat/64.png`}
        alt="romania"
      />

      <FormControl
        variant="outlined"
        className={[classes.formControl, classes.countrySelector].join(' ')}
      >
        <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={country.selected}
          onChange={selectCountry}
          label="Age"
        >
          {countries.map(item => (
            <MenuItem value={item.code} key={item.code}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card variant="outlined" className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  color="primary"
                >
                  11036
                </Typography>
                <Typography>Total Cases</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card variant="outlined" className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.red}
                >
                  +401
                </Typography>
                <Typography>New Cases (24h)</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card variant="outlined" className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.green}
                >
                  3054
                </Typography>
                <Typography>Recoveries</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card variant="outlined" className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.greenDark}
                >
                  26,67%
                </Typography>
                <Typography>Recovery Rate</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card variant="outlined" className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  5.51%
                </Typography>
                <Typography>Fatality Rate</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <Box className={classes.chartContainer}>
        <p>Daily new cases</p>
        <Chart data={data} axes={axes} tooltip />
      </Box>
    </Container>
  );
};

export default Statistics;
