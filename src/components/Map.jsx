import React from 'react';
import styled from 'styled-components';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import SentimentDissatisfied from '@material-ui/icons/SentimentDissatisfied';
import SentimentVeryDissatisfied from '@material-ui/icons/SentimentVeryDissatisfied';
import config from '../config';
import * as positionService from '../service/positionService';

const MapWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const GoogleMapWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const SentimentVeryDissatisfiedWrapper = styled(SentimentVeryDissatisfied)`
  color: #ff5d9d;
`;

const SentimentDissatisfiedWrapper = styled(SentimentDissatisfied)`
  color: #f5a829;
`;

const HighlightOffIconWrapper = styled(HighlightOffIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const CircleStatisticWrapper = styled.div`
  padding: 30px 30px;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.17);
  position: absolute;
  bottom: 20px;
  width: calc(80% - 60px);
  left: 5%;
`;

const CircleStatisticRowWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CircleStatisticInfectedTextWrapper = styled.p`
  color: #272d40;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0;
  margin: 4px 0 4px 11px;
`;

const CircleStatisticSymptomsTextWrapper = styled.p`
  color: #484b4d;
  font-family: 'SF UI Display';
  font-size: 14px;
  letter-spacing: 0;
  line-height: 20px;
  margin: 4px 0 4px 11px;
`;

const loadMapScript = initAutocomplete => {
  if (!window.google || (window.google && !window.google.maps)) {
    const index = window.document.getElementsByTagName('script')[0];
    const script = window.document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${config.googleApiKey}&libraries=places&callback=initAutocomplete`;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
    window.initAutocomplete = initAutocomplete;
  } else {
    initAutocomplete();
  }
};

class Map extends React.Component {
  state = {
    infected: 0,
    symptoms: 0,
    showCircleStatistics: false,
  };

  searchBox = null;

  positions = [];

  circles = [];

  selectCircle = circleIndex => {
    this.onResetCircleStatistic();
    this.circles[circleIndex].setOptions({ strokeWeight: 2 });
    const { radius } = this.positions[circleIndex];
    this.setState({
      infected: parseInt(radius * 0.8, 10),
      symptoms: parseInt(radius * 0.4, 10),
      showCircleStatistics: true,
    });
  };

  onResetCircleStatistic = () => {
    this.circles.forEach(circle => {
      circle.setOptions({ strokeWeight: 1 });
    });
  };

  onCloseCircleStatistic = () => {
    this.onResetCircleStatistic();
    this.circles.forEach(circle => {
      circle.setOptions({ strokeWeight: 1 });
    });
    this.setState({
      showCircleStatistics: false,
    });
  };

  initAutocomplete = async () => {
    await positionService.populatePositions();
    this.positions = positionService.getPositions();

    window.map = new window.google.maps.Map(document.getElementById('map'), {
      center: this.positions[0].center,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      zoom: 16,
    });

    const positionsLength = this.positions.length;

    for (let i = 0; i < positionsLength; i++) {
      const position = this.positions[i];
      this.circles[i] = new window.google.maps.Circle({
        strokeColor: '#FF6496',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#ff9eb8',
        fillOpacity: 0.35,
        map: window.map,
        center: position.center,
        radius: position.radius,
      });

      this.circles[i].addListener('click', () => this.selectCircle(i));
    }

    const input = document.getElementById('pac-input');

    if (this.initializedAutocomplete) {
      return;
    }

    if (!input) {
      setTimeout(this.initAutocomplete, 500);
      return;
    }

    this.initializedAutocomplete = true;

    this.searchBox = new window.google.maps.places.SearchBox(input);

    let markers = [];

    this.searchBox.addListener('places_changed', () => {
      const places = this.searchBox.getPlaces();

      if (places.length === 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(marker => {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      const bounds = new window.google.maps.LatLngBounds();
      places.forEach(place => {
        if (!place.geometry) {
          return;
        }
        const icon = {
          url: place.icon,
          size: new window.google.maps.Size(71, 71),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(17, 34),
          scaledSize: new window.google.maps.Size(25, 25),
        };

        // Create a marker for each place.
        markers.push(
          new window.google.maps.Marker({
            map: window.map,
            icon,
            title: place.name,
            position: place.geometry.location,
          })
        );

        if (place.geometry.viewport) {
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      window.map.fitBounds(bounds);
    });
  };

  componentDidMount = () => {
    loadMapScript(this.initAutocomplete);
  };

  render() {
    return (
      <MapWrapper>
        <input
          id="pac-input"
          className="controls"
          type="text"
          placeholder="Search Box"
        />
        <GoogleMapWrapper id="map" />
        {this.state.showCircleStatistics && (
          <CircleStatisticWrapper>
            <HighlightOffIconWrapper onClick={this.onCloseCircleStatistic} />
            <CircleStatisticRowWrapper>
              <SentimentVeryDissatisfiedWrapper />
              <CircleStatisticInfectedTextWrapper>
                {this.state.infected} People Infected
              </CircleStatisticInfectedTextWrapper>
            </CircleStatisticRowWrapper>

            <CircleStatisticRowWrapper>
              <SentimentDissatisfiedWrapper />
              <CircleStatisticSymptomsTextWrapper>
                {this.state.symptoms} People with symptoms
              </CircleStatisticSymptomsTextWrapper>
            </CircleStatisticRowWrapper>
          </CircleStatisticWrapper>
        )}
      </MapWrapper>
    );
  }
}

export default Map;
