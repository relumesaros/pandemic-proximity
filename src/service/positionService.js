import config from '../config';
import fetchService from './fetchService';

const positions = [];

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getInitialPosition = () =>
  fetchService.post(config.geoLocateApi, null, {
    key: config.googleApiKey,
  });

const getRandomBinary = () => parseInt(Math.random() * 100, 10) % 2 === 0;

const populatePositions = async ({ centerEnforced }) => {
  if (positions.length && !centerEnforced) {
    return;
  }

  let center;
  if (!centerEnforced) {
    const locationResponse = await getInitialPosition();
    center = locationResponse.location;
  } else {
    center = centerEnforced;
  }

  positions[0] = {
    center,
    radius: 40,
  };

  for (let i = 1; i < 15; i++) {
    const { lat, lng } = positions[0].center;
    let latRandom;
    let lngRandom;

    const offset = 150;
    const latOffsetPlus = parseInt(lat * 100000, 10) + offset;
    const latOffsetMinus = parseInt(lat * 100000, 10) - offset;
    const lngOffsetPlus = parseInt(lng * 100000, 10) + offset;
    const lngOffsetMinus = parseInt(lng * 100000, 10) - offset;
    const range = 1000;
    // const offsetMinus = parseInt(lat * 100000);
    if (getRandomBinary()) {
      latRandom = randomIntFromInterval(latOffsetPlus, latOffsetPlus + range);
    } else {
      latRandom = randomIntFromInterval(latOffsetMinus - range, latOffsetMinus);
    }

    if (getRandomBinary()) {
      lngRandom = randomIntFromInterval(lngOffsetPlus, lngOffsetPlus + range);
    } else {
      lngRandom = randomIntFromInterval(lngOffsetMinus - range, lngOffsetMinus);
    }

    const centerNew = {
      lat: latRandom / 100000,
      lng: lngRandom / 100000,
    };
    const radius = randomIntFromInterval(20, 100);

    positions[i] = {
      center: centerNew,
      radius,
    };
  }

  for (let i = 15; i < 30; i++) {
    const { lat, lng } = positions[0].center;
    let latRandom;
    let lngRandom;

    const offset = 200;
    const latOffsetPlus = parseInt(lat * 10000, 10) + offset;
    const latOffsetMinus = parseInt(lat * 10000, 10) - offset;
    const lngOffsetPlus = parseInt(lng * 10000, 10) + offset;
    const lngOffsetMinus = parseInt(lng * 10000, 10) - offset;
    const range = 1000;
    // const offsetMinus = parseInt(lat * 100000);
    if (getRandomBinary()) {
      latRandom = randomIntFromInterval(latOffsetPlus, latOffsetPlus + range);
    } else {
      latRandom = randomIntFromInterval(latOffsetMinus - range, latOffsetMinus);
    }

    if (getRandomBinary()) {
      lngRandom = randomIntFromInterval(lngOffsetPlus, lngOffsetPlus + range);
    } else {
      lngRandom = randomIntFromInterval(lngOffsetMinus - range, lngOffsetMinus);
    }

    const centerNew = {
      lat: latRandom / 10000,
      lng: lngRandom / 10000,
    };
    const radius = randomIntFromInterval(400, 800);

    positions[i] = {
      center: centerNew,
      radius,
    };
  }
};
const getPositions = () => positions;

export { getPositions, populatePositions };
